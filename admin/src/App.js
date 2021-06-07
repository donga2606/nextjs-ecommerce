import React from "react";
import { Admin, Resource, ListGuesser} from "react-admin";
import ProductList from './components/product/ProductList';
import ProductEdit from './components/product/ProductEdit'
import ProductCreate from './components/product/ProductCreate'
import dataProvider from './dataProvider'
import UserList from "./components/user/UserList";
import UserCreate from "./components/user/UserCreate";
import UserEdit from "./components/user/UserEdit";

function App() {

  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="product" list={ProductList} create={ProductCreate} edit={ProductEdit}></Resource>
      {/* <Resource name="user" list={UserList} create={UserCreate} edit={UserEdit}></Resource> */}
    </Admin>
  );
}

export default App;
