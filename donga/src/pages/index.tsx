import React, { useEffect, useState, ReactChild } from 'react'
import Head from 'next/head'
import { HeaderCustom } from '../components/HeaderCustom'
import { HeroBanner } from '../components/ui-kits/Herobanner'
import GlobalLayout from '../components/GlobalLayout/GlobalLayout'
import Layout from '../components/Layout/Layout'
import styled from 'styled-components'
import Button from '../components/ui-kits/Button/Button'
import withApollo from '../utils/withApollo'
import { useQuery } from '@apollo/react-hooks'
// import { GET_PRODUCTS } from '../graphql/product/product.query'
// import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Card } from '../components/ui-kits/Card'
import { useRouter } from 'next/router'
import api from '../../controller/BaseApi'
import { users_DB, IUser } from '../interfaces/user'

interface IProduct {
  id: number
  name: string
  imageArr: string
  description: string
  price: number
}

export const HomeContainer = styled.div``

export const StyledHomeBody = styled.div`
  display: grid;
  justify-content: center;
  position: relative;
  grid-template-columns: repeat(auto-fill, 320px);
  grid-gap: 20px;
  min-height: 80vh;
`
const user: IUser = users_DB[0]

function Home() {
  const [product, setProduct] = useState<IProduct[]>([])

  const [cartNum, setCartNum] = useState<number>(0)

  const router = useRouter()

  const handleCartNum = (): void => {
    const cartNumber = user.cart.reduce((total, item) => {
      total += item.quantity
      return total
    }, 0)

    setCartNum(cartNumber)
  }

  useEffect(() => {
    api.get('http://localhost:4041/api/product').then((response): any => {
      const data: any = response.data.data

      const products: IProduct[] = data.map((item) => {
        return {
          name: item.name,
          imageArr: item.imageArr,
          description: item.description,
          price: item.price,
          id: item._id,
        }
      })
      setProduct(products)
      console.log(data)
    })
    handleCartNum()
  }, [])

  return (
    <GlobalLayout>
      <Head>
        <title>SevenSunday</title>
        <link rel="icon" href="/favicon.ico" />
        <link
            rel="preload"
            href="/fonts/Garamond-Premier-Pro-Medium Caption.otf"
            as="font"
            crossOrigin=""
          />
      </Head>
      <HeaderCustom cartNum={cartNum} />
      <HeroBanner></HeroBanner>
      <Layout>
        <StyledHomeBody>
          {/* Link to each product ID */}
          {product.map((data) => (
            <Card
              key={data.id}
              imageURL={data.imageArr[0]}
              buttonGroups={
                <>
                  <Button
                    onClick={() => {
                      router.push(`/details/${data.id}`)
                      localStorage.setItem(`product_data_${data.id}`, JSON.stringify(data))
                    }}
                  >
                    View
                  </Button>
                  <Button
                    onClick={() => {
                      user.add_to_cart(data.id)
                      handleCartNum()
                    }}
                  >
                    Add to Cart
                  </Button>
                </>
              }
            >
              {data.name}
            </Card>
          ))}
        </StyledHomeBody>
      </Layout>

      <Footer />
    </GlobalLayout>
  )
}

export default withApollo({ ssr: true })(Home)

// Mang 3 cai interface bai 1 va bai 2 de vao thu muc interface
// Sua lai trang home cua project demo, product card co thiet ke
// goi lai api, lam 1 file, tao 1 thu muc controller, tao 1 interface class cho api

// class BaseAPI(){
//     get(url){
//         this.postTxs()
//     }
//     postTxs(url):void{
//         return axios.get(url)
//     }
// }

// Goi va hien thi api product
// Hien thi va show cart, lam function thay doi cart
// hien thi con bao nhieu cart, bao nhieu trong gio hang
