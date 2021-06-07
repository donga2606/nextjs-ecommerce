import Head from 'next/head'
import { useContext, useState, useEffect } from 'react'

// import CartItem from '../components/CartItem'
import Link from 'next/link'

import { useRouter } from 'next/router'
import { DataContext } from '../../controller/store/GlobalState'
import { getData, postData } from '../../controller/TokenApi'
import CartItem from '../components/ui-kits/CartItem/CartItem'
import numbro from 'numbro'


const Cart = () => {
  const { state, dispatch } = useContext(DataContext)
  const { cart, auth } = state

  const [total, setTotal] = useState(0)

  const [address, setAddress] = useState('')
  const [mobile, setMobile] = useState('')

  const [callback, setCallback] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item:any) => {
        return prev + (item.price * item.quantity)
      },0)
      setTotal(res)
    }
    getTotal()
  },[cart])

  useEffect(() => {
    const cartLocal = JSON.parse(localStorage.getItem('items_in_cart'))
    if(cartLocal && cartLocal.length > 0){
      let newArr = []
      const updateCart = async () => {
        for (const item of cartLocal){
          const res = await getData(`product/${item._id}`)
          const { _id, title, images, price, inStock, sold } = res.product
          if(inStock > 0){
            newArr.push({ 
              _id, title, images, price, inStock, sold,
              quantity: item.quantity > inStock ? 1 : item.quantity
            })
          }
        }

        dispatch({ type: 'ADD_CART', payload: newArr })
      }

      updateCart()
    } 
  },[callback])

    return(
    <div className="container">
      <div className="row mx-auto my-5">
        <Head>
          <title>Cart Page</title>
        </Head>
        <div className="col-md-8 text-secondary table-responsive my-3">
          <h2 className="text-uppercase">Shopping Cart</h2>
        <div className="my-3">{cart.length===0&&"No item in cart"}</div>
          <table className="table my-3">
            <tbody>
              {
                cart.map((item:any) => (
                  <CartItem key={item.id} item={item} dispatch={dispatch} cart={cart} />
                ))
              }
            </tbody>
          </table>
        </div>

        <div className="col-md-4 my-3 text-right text-uppercpase text-secondary">
            <form>
              <h2 className="mb-3">Shipping</h2>

              <label htmlFor="address">Address</label>
              <input type="text" name="address" id="address"
              className="form-control mb-2" value={address}
              onChange={e => setAddress(e.target.value)} />

              <label htmlFor="mobile">Mobile</label>
              <input type="text" name="mobile" id="mobile"
              className="form-control mb-2" value={mobile}
              onChange={e => setMobile(e.target.value)} />
            </form>

            <h3 className="mt-3">Total: <span className="text-danger">{numbro(total).format({ thousandSeparated: true })} đ</span></h3>

            
            <Link href={auth.user ? '#!' : '/login'}>
              <a className="btn btn-dark my-2" >Proceed with payment</a>
            </Link>
            
        </div>
      </div>
      </div>
    )
  }
  
export default Cart