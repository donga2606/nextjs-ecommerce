export interface IUser {
  username: string
  email: string
  password: string
  avatar: string
}

export interface IProduct {
  id: number
  name: string
  imageArr: { url: string }[]
  description: string
  price: number
}

export interface ICartItem extends IProduct {
  quantity: number
}
