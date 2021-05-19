import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Product {
    id: ID!
    name: String
    description: String
    imageArr: [String]
    price: String
    isActive: Boolean
  }

  type User {
    id: ID
    name: String
    orderItems: [OrderItem]
    age: Int!
  }
  type OrderItem {
    id: ID
    userID: ID
    productID: ID
    quantity: Int
  }

  # type root
  type Query {
    products: [Product]
    product(id: ID!): Product
    user(id: ID): User
    users: [User]
    orderItems: [OrderItem]
  }
`;

export default typeDefs;
