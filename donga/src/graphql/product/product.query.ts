import { gql } from 'apollo-boost'

export const GET_PRODUCTS = gql`
 query {
  products {
    name
    image
    id
    price
    description
  }
}
`
