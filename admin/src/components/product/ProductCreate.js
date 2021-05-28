import React from 'react'
import {ArrayInput, Create, SimpleForm, SimpleFormIterator, TextInput} from 'react-admin'

const ProductCreate = props => (
        <Create {...props}>
            <SimpleForm>
                {/* <ReferenceInput source="userId" reference="users">
                    <SelectInput optionText="name" />
                </ReferenceInput> */}
                <TextInput source="name" />
                <ArrayInput source="imageArr" >
                    <SimpleFormIterator>
                        <TextInput source="url" />
                    </SimpleFormIterator>
                </ArrayInput>
                <TextInput source="price" />
                <TextInput source="description" />
            </SimpleForm>
           </Create>
)
export default ProductCreate;