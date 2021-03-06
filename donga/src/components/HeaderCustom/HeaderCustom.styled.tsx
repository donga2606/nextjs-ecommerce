import styled from 'styled-components'

export const StyledHeaderCustom = styled.div`
  height: 102px;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 9;
`

export const StyledHeaderPromotion = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #eaeaea;
  height: 42px;
  font-size: 0.9rem;
`
export const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 60px;
  text-transform: uppercase;
  font-size: 0.9rem;
  border-bottom: 2px solid #eaeaea;
  /* margin-top: 42px; */
`

export const StyledHeaderNav = styled.ul`
  display: flex;
  list-style-type: none;
  align-items: center;
  justify-content: center;
  width: 65vw;
  @media (max-width: 768px) {
    display: none;
  }
`
export const StyledNavItem = styled.a`
  color: #333;
  text-decoration: none;
  display: inline-block;
  padding: 22px 0px;
  margin: 0px 21px;
  &:hover {
    border-bottom: 2px solid;
  }
`

export const StyledHeaderBrand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 24px;
`

export const StyledHeaderUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    margin: 0 12px;
  }
`
export const StyledHeaderUserCart = styled.div`
  cursor: pointer;
`
export const StyledHeaderUserInfo = styled.div`
  font-size: 1.3rem;
  text-transform: capitalize;
`

export const StyledHeaderUserLogin = styled.div`
  font-size: 1.3rem;
  border: none;
  background-color: burlywood;
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
`

export const StyledHeaderUserLogout = styled.button`
  font-size: 1.3rem;
  border: none;
  background-color: burlywood;
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
  
`


