import React from "react";
import { Admin, Resource, ListGuesser} from "react-admin";
import ProductList from './components/product/ProductList';
import ProductEdit from './components/product/ProductEdit'
import ProductCreate from './components/product/ProductCreate'
import dataProvider from './dataProvider'

function App() {

  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="product" list={ProductList} create={ProductCreate} edit={ProductEdit}></Resource>
      <Resource name="user" list={ListGuesser}></Resource>
    </Admin>
  );
}

export default App;
