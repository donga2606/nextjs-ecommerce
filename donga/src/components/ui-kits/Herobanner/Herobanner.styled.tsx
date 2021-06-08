import styled from 'styled-components'

export const StyledHeroBanner = styled.div`
  background-image: linear-gradient(to top,rgba(4,4,4,.65),rgba(54,54,54,.2)),
 url('https://cdn.shopify.com/s/files/1/1236/1344/collections/leon3_1600x.jpg?v=1565863346');

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const StyledHeroText = styled.div`
  text-align: center;
  color: white;
  >h1{
    padding: 10px;
  }
  >div{
    max-width: 500px;
    line-height: 20px;
    word-spacing: 0.1rem;
    color: #fff;
  }
`
