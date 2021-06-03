import React from "react";
import { TextField, List, Datagrid, RichTextField, EditButton } from "react-admin";
import { CustomImagesField } from "../Fields";

const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick='edit'>
        <TextField source="_id" />
        <TextField source="username" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default UserList;
