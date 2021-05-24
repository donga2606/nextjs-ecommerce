import React from "react";
import { TextField, List, Datagrid, RichTextField, EditButton } from "react-admin";

const ProductList = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick='edit'>
        <TextField source="_id" />
        <TextField source="name" />
        <RichTextField source="imageArr" label="Images"/>     
        <RichTextField source="description" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default ProductList;