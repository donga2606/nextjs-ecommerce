import React from "react";
import {
  ArrayInput,
  Edit,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
  useNotify,
  useRedirect,
} from "react-admin";

const ProductEdit = (props) => {
  const notify = useNotify();
  const redirect = useRedirect();
  const onFailure = (error) => {
    notify(`could not edit post, ${error}`);
    redirect("/product");
  };
  return (
    <Edit onFailure={onFailure} {...props}>
      <SimpleForm>
        {/* <ReferenceInput source="userId" reference="users">
                    <SelectInput optionText="id" />
                </ReferenceInput> */}
        <TextInput disabled source="id" fullWidth={true} />
        <TextInput source="name" fullWidth={true} />
        <TextInput source="description" fullWidth={true} />
        <ArrayInput source="imageArr" fullWidth={true}>
          <SimpleFormIterator>
            <TextInput source="url" />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Edit>
  );
};

export default ProductEdit;
