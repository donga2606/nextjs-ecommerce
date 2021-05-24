import { Product, OrderItem, Order, User } from "../model/index";

// TODO: add databse

export const resolvers = {
  Query: {
    // all product
    products: () => Product.find(),

    // product
    product: (parent: any, args: { id: string }) => Product.findById(args.id),

    // user
    user: (parent: any, args: { id: string }) => User.findById(args.id),

    // all user
    users: () => User.find(),

    // all order item even finish or not, this is not nessesary but need for admin to check.
    orderItems: () => OrderItem.find(),
  },
  
  OrderItem: {},

  User: {
    orderItems: (parent: any, agrs: any) => {
      parent.cart.map((itemID: string) => OrderItem.findById(itemID));
    },
  },
};
