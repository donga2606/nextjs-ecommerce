import { fetchUtils } from "react-admin";
import { stringify } from "query-string";

const apiUrl = "http://localhost:4041/api";
const httpClient = fetchUtils.fetchJson;

const dataProvider = {
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    // const url = `${apiUrl}/${resource}`;

    return httpClient(url).then(({ headers, json }) => {
      return {
        data: json.data.map((resource) => ({ ...resource, id: resource._id })),
        total: json.data.length
      };
    });
  },

  getOne: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => {
      return {data: {...json.data, id: json.data._id}}
    }),

  getMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    return httpClient(url).then(({ json }) => ({ data: json }));
  },

  getManyReference: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => ({
      data: json.data.map(resource=>({...resource, id: resource._id})),
      total: parseInt(headers.get("content-range").split("/").pop(), 10),
    }));
  },

  update: (resource, params) =>{
    
    return (
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => { 
      
      return ({
        data: {...json.data, id: json.data._id}
      })
    }))
  }
,
  updateMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json.data }));
  },

  create: (resource, params) =>
    httpClient(`${apiUrl}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    }).then(({ json }) => {
      
      return {data: { ...json.data, id: json.data._id},}
    }),

  delete: (resource, params) =>
    {
      
    return httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "DELETE",
    }).then(({ json }) => ({ data: {...json.data, id: json.data._id} }))
    },
  deleteMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: "DELETE",
    }).then(({ json }) => ({ data: json }));
  },
};

export default dataProvider;
