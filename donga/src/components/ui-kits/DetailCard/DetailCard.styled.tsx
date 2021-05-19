import styled from 'styled-components'

// wrapper of detail
export const StyledDetailCard = styled.div`
height: 420px;
width: 654px;
margin: 50px auto;
border-radius: 7px 7px 7px 7px;
/* VIA CSS MATIC https://goo.gl/cIbnS */
-webkit-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
-moz-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
`

// div wrap the image
export const StyledDetailCardImageWrapper = styled.div`
float: left;
height: 420px;
width: 327px;
`
// image of product
export const StyledDetailCardImage = styled.img`
border-radius: 7px 0 0 7px;
`

// product info 
export const StyledDetailCardBody = styled.div`
float: left;
height: 420px;
width: 327px;
border-radius: 0 7px 10px 7px;
background-color: #ffffff;
`

export const StyledDetailCardText = styled.div`
height: 300px;
width: 327px;
>h1{
    margin: 0 0 0 38px;
    padding-top: 52px;
    font-size: 34px;
    color: #474747;
}
>h2{
    margin: 0 0 47px 38px;
    font-size: 13px;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    color: #d2d2d2;
    letter-spacing: 0.2em;
}
>p{
    height: 125px;
    margin: 0 0 0 38px;
    font-family: 'Playfair Display', serif;
    color: #8d8d8d;
    line-height: 1.7em;
    font-size: 15px;
    font-weight: lighter;
    overflow: hidden;
}
`
export const StyledDetailCardPriceButton = styled.div`
  height: 103px;
  width: 327px;
  margin-top: 17px;
  position: relative;
  >p{
    display: inline-block;
    position: absolute;
    top: -13px;
    height: 50px;
    font-family: 'Trocchi', serif;
    margin: 0 0 0 38px;
    font-size: 28px;
    font-weight: lighter;
    color: #474747;
    >span{
        display: inline-block;
        height: 50px;
        font-family: 'Suranna', serif;
        font-size: 34px;
    }
  }
`
export const StyledCardButtonGroup = styled.div`
  
`
