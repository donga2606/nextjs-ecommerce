import React from "react";
import {
  ArrayInput,
  Create,
  PasswordInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from "react-admin";

const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="username" />
      <PasswordInput source="password" />
    </SimpleForm>
  </Create>
);
export default UserCreate;
