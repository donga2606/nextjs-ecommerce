import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  useNotify,
  useRedirect,
} from "react-admin";

const UserEdit = (props) => {
  const notify = useNotify();
  const redirect = useRedirect();
  const onFailure = (error) => {
    notify(`could not edit post, ${error}`);
    redirect("/product");
  };
  return (
    <Edit onFailure={onFailure} {...props}>
      <SimpleForm>
        <TextInput disabled source="id" fullWidth={true} />
        <TextInput source="username" fullWidth={true} />
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
