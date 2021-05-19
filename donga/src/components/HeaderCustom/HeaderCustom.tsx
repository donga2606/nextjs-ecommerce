import {
  StyledHeaderCustom,
  StyledHeaderPromotion,
  StyledHeaderWrapper,
  StyledHeaderBrand,
  StyledHeaderSearchCart,
  StyledHeaderNav,
  StyledNavItem,
} from './HeaderCustom.styled'
import Link from 'next/link'

// TODO: làm responsive

/* TODO: đưa icon giỏ hàng vào */

const HeaderCustom = (props) => (
  <StyledHeaderCustom>
    <StyledHeaderPromotion>Sale Outlet upto 50%</StyledHeaderPromotion>
    <StyledHeaderWrapper>
      <StyledHeaderBrand>
        <Link href="/">
          <a>
            <img src="https://cdn.shopify.com/s/files/1/1236/1344/files/1e2f29-01_140x.png?v=1606900514" />
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

      <StyledHeaderSearchCart>
        <div className="nav-search">Search</div>

        <div>Cart: {props.cartNum}</div>
      </StyledHeaderSearchCart>
    </StyledHeaderWrapper>
  </StyledHeaderCustom>
)

export default HeaderCustom
