import React from "react";
import { TextField, List, Datagrid, RichTextField, EditButton } from "react-admin";
import { CustomImagesField } from "../Fields";

const ProductList = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick='edit'>
        <TextField source="_id" />
        <TextField source="name" />
        <CustomImagesField source="imageArr" label="Images"/>     
        <RichTextField source="description" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default ProductList;
