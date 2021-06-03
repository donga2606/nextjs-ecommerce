import axios from 'axios'

interface IBaseApi {
  handleResponse: (res: any) => any
  get: (url: string) => Promise<Record<string, any>>
  post: (url: string, body: Record<string, any>) => any
  put: (url: string, body) => any
}

class BaseApi implements IBaseApi {
  // response
  handleResponse(res) {
    if (res) {
      return res
    }
  }

  // get
  async get(url: string) {
    try {
      const res = await axios.get(url)
      return this.handleResponse(res)
    } catch (err) {
      console.log(err)
    }
  }

  // post
  async post(url: string, body: Record<string, any>): Promise<Record<string, any>> {
    const args: Record<string, any> = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: body,
      url,
    }
    try {
      const res = await axios(args) // if not use axios.post, we could send object instead
      return this.handleResponse(res)
    } catch (err) {
      console.error('Request Fail: ', err)
    }
  }

  // put
  async put(url: string, body: Record<string, any>): Promise<Record<string, any>> {
    const args: Record<string, any> = {
      method: 'PUT',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: JSON.stringify(body),
      url,
    }
    try {
      const res = await axios(args)
      return this.handleResponse(res)
    } catch (err) {
      console.error('Request Fail: ', err)
    }
  }
  // Method DELETE
  async delete(url: string, body: Record<string, any>): Promise<Record<string, any>> {
    const args: Record<string, any> = {
      method: 'DELETE',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: JSON.stringify(body),
      url,
    }
    try {
      const res = await axios(args)
      return this.handleResponse(res)
    } catch (err) {
      console.error('Request Fail: ', err)
    }
  }

  postTxs(url: string, method: string): any {
    return axios[method](url)
  }
}

const api = new BaseApi()

export default api

// tao them method de rieng url ra
