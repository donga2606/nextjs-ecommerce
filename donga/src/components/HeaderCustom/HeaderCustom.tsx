
import {
  StyledHeaderCustom,
  StyledHeaderPromotion,
  StyledHeaderWrapper,
  StyledHeaderBrand,
  StyledHeaderNav,
  StyledNavItem,
  StyledHeaderUser,
  StyledHeaderUserCart,
  StyledHeaderUserInfo,
  StyledHeaderUserLogin,
  StyledHeaderUserLogout,
} from './HeaderCustom.styled'
import Link from 'next/link'
import { useContext } from 'react'
import { DataContext } from '../../../controller/store/GlobalState'
import Cookie from 'js-cookie'
import { useRouter } from 'next/router'



// TODO: làm responsive

/* TODO: đưa icon giỏ hàng vào */

const HeaderCustom = (props) => {
  const { state, dispatch } = useContext(DataContext)
  const { auth, cart } = state
  
  const router = useRouter()
  const handleLogout = () => {
    // Cookie.remove('refreshtoken', { path: 'api/auth/accessToken' })
    localStorage.removeItem('Logged')
    localStorage.removeItem('refreshtoken')
    dispatch({ type: 'AUTH', payload: {} })
    dispatch({ type: 'NOTIFY', payload: { success: 'Logged out!' } })
    return router.push('/')
  }
  return (
    <StyledHeaderCustom>
      <StyledHeaderPromotion>Sale Outlet upto 50%</StyledHeaderPromotion>
      <StyledHeaderWrapper>
        <StyledHeaderBrand>
          <Link href="/">
            <a>
              <img src="/images/logo.png" />
            </a>
          </Link>
        </StyledHeaderBrand>
        <StyledHeaderNav>
          <li>
            <StyledNavItem href="#">New Arrivals</StyledNavItem>
          </li>
          <li>
            <StyledNavItem href="#">Men</StyledNavItem>
          </li>
          <li>
            <StyledNavItem href="#">Women</StyledNavItem>
          </li>
          <li>
            <StyledNavItem href="#">Blog</StyledNavItem>
          </li>
        </StyledHeaderNav>
        <StyledHeaderUser>
          <StyledHeaderUserCart>
            <Link href="/cart">
              <a><i className="fas fa-luggage-cart"> {cart.length}</i></a>
            </Link>
          </StyledHeaderUserCart>
          {auth.user ? (
            <>
            <StyledHeaderUserInfo><i className="far fa-user-circle"></i> <span>{auth.user.username}</span></StyledHeaderUserInfo>
            <StyledHeaderUserLogout onClick={handleLogout}>Logout</StyledHeaderUserLogout>
            </>
          ) : (
            <StyledHeaderUserLogin>
              <Link href="/login"><a>Login</a></Link>
            </StyledHeaderUserLogin>
          )}

        </StyledHeaderUser>
      </StyledHeaderWrapper>
    </StyledHeaderCustom>
  )
}
export default HeaderCustom
