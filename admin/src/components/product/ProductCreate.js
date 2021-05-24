import React from 'react'
import {Create, SimpleForm, TextInput} from 'react-admin'

const ProductCreate = props => (
        <Create {...props}>
            <SimpleForm>
                {/* <ReferenceInput source="userId" reference="users">
                    <SelectInput optionText="name" />
                </ReferenceInput> */}
                <TextInput source="name" />
                <TextInput source="imageArr" />
                <TextInput source="price" />
                <TextInput source="description" />
            </SimpleForm>
           </Create>
)
export default ProductCreate;