let new_user_id: number = 1;
export let users_DB: IUser[] = [];



export interface IUser{
    readonly id: number,
    name: string,
    age: number,
    cart: IOrderItem[],
    add_to_cart: (product_id: number) => void;
    minus_to_cart: (product_id: number) => void;
    remove_item_from_cart: (product_id: number) => void
    checkout: () => boolean
  }



  class User implements IUser {
    id: number;
    name: string;
    age: number;
    cart: IOrderItem[]=[];
    constructor (id:number, name:string, age: number){
        this.id = id;
        this.name = name;
        this.age = age;
    }

    add_to_cart(product_id: number) {
        let filter_item_arr = this.cart.filter((item) => item.product_id === product_id)
        
        if (filter_item_arr.length <= 0){
            let new_order_item = new OrderItem(product_id)
            this.cart.push(new_order_item)
        } else {
            let filter_item = filter_item_arr[0];
            this.cart[this.cart.indexOf(filter_item)].quantity++
        }
    }

    minus_to_cart(product_id: number) {
        let filter_item_arr = this.cart.filter((item) => item.product_id === product_id);
        let filter_item = filter_item_arr[0];
        filter_item.quantity--;
        if (filter_item.quantity <=0 ){
            this.remove_item_from_cart(product_id);
        }      
    }

    remove_item_from_cart(product_id: number){
        let item_index: number = this.cart.indexOf(this.cart.filter((item) => item.product_id === product_id)[0]);
        this.cart = this.cart.slice(0, item_index).concat(this.cart.slice(item_index+1));
    }

    checkout(){
        return true
    }
}

const createNewUser = (name: string, age: number) => {
    let user: IUser = new User(new_user_id, name, age);
    new_user_id ++;
    users_DB.push(user)
    return user;
}
  
export interface IOrderItem {
    product_id: number,
    quantity: number,
    // total_money: () => number, 
  }


class OrderItem implements IOrderItem{
    product_id: number;
    quantity: number = 1;
    constructor(product_id: number, ){
        this.product_id = product_id
    }
    // total_money(){
    //     const price = products_DB.filter((item) => this.product_id === item.id)[0].price
    //     return this.quantity*price
    // }
}

let user1 = createNewUser('donga', 29)
let user2 = createNewUser('naruto', 27)