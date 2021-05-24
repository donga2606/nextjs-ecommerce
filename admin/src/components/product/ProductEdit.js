import React from "react";
import { Edit, SimpleForm, TextInput, useNotify, useRedirect } from "react-admin";


const ProductEdit = (props) => {
    const notify = useNotify();
    const redirect = useRedirect();
    const onFailure = (error) => {
        notify(`could not edit post, ${error}`)
        redirect('/product')
    }
  return (
    <Edit onFailure={onFailure} {...props}>
      <SimpleForm>
        {/* <ReferenceInput source="userId" reference="users">
                    <SelectInput optionText="id" />
                </ReferenceInput> */}
        <TextInput disabled source="id" fullWidth={true} />
        <TextInput source="name" fullWidth={true} />
        <TextInput source="description" fullWidth={true} />
        <TextInput source="imageArr" fullWidth={true} />
      </SimpleForm>
    </Edit>
  );
};

export default ProductEdit;
