import mongoose, { Schema } from "mongoose";
import ProductModel from "./Product";
import OrderItemModel from "./OrderItem";
import UserModel from "./User";
import OrderModel from "./Order";

const Product = mongoose.model(
  "Products",
  new Schema(ProductModel, { timestamps: true })
);

const OrderItem = mongoose.model(
  "OrderItem",
  new Schema(OrderItemModel, { timestamps: true })
);

const User = mongoose.model(
  "User",
  new Schema(UserModel, { timestamps: true })
);

const Order = mongoose.model(
  "Order",
  new Schema(OrderModel, { timestamps: true })
);

export { Product, Order, OrderItem, User };
