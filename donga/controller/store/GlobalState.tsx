import { createContext, useReducer, useEffect } from 'react'
import { getData } from '../TokenApi'
import { ICartItem, IUser } from './Interfaces'
import { reducers } from './Reducers'

interface IContextProps {
  state: IState
  dispatch: ({ type, payload }) => void
}

interface IState {
  notify: { error: string; success: string }
  auth: { user: IUser; token: string }
  cart: Array<ICartItem>
}

const initialState = {
  notify: {},
  auth: {},
  cart: [],
}

export const DataContext = createContext({} as IContextProps)

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState)

  const { cart } = state

  useEffect(() => {
    const logged = localStorage.getItem('logged')
    if (logged) {
      getData('auth/accessToken').then((res) => {
        if (res.err) return localStorage.removeItem('logged')
        dispatch({
          type: 'AUTH',
          payload: {
            token: res.access_token,
            user: res.user,
          },
        })
      })
    }
  }, [])

  useEffect(() => {
    const items_in_cart = JSON.parse(localStorage.getItem('items_in_cart'))

    if (items_in_cart) dispatch({ type: 'ADD_CART', payload: items_in_cart })
  }, [])

  
  useEffect(() => {
    console.log('add cart: ', cart)
    localStorage.setItem('items_in_cart', JSON.stringify(cart))
  }, [cart])

  return <DataContext.Provider value={{ state, dispatch }}>{children}</DataContext.Provider>
}
