import React from 'react'
import { Text } from '../ui-kits/Text'


import {
  StyledHeader,
  StyledHeaderMenu,
  StyledHeaderLogo,
  StyledHeaderButton,
  StyledHeaderMenuItem,
} from './Header.styled'

interface headerProps {
  cartNum: number
}

const Header: React.FC<headerProps> = (props) => {
  return (
    <>
      <StyledHeader>
        <StyledHeaderLogo>LOGO</StyledHeaderLogo>
        <StyledHeaderMenu>
          <StyledHeaderMenuItem>
            <Text>Home</Text>
          </StyledHeaderMenuItem>
          <StyledHeaderMenuItem>
            <Text>Products</Text>
          </StyledHeaderMenuItem>
          <StyledHeaderMenuItem>
            <Text>{`Cart: ${props.cartNum.toString()}`}</Text>
          </StyledHeaderMenuItem>
        </StyledHeaderMenu>
        <StyledHeaderButton>Login</StyledHeaderButton>
      </StyledHeader>
    </>
  )
}

export default Header
