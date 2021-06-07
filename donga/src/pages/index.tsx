import React, { useEffect, useState, ReactChild, useContext } from 'react'
import Head from 'next/head'
import { HeroBanner } from '../components/ui-kits/Herobanner'
import GlobalLayout from '../components/GlobalLayout/GlobalLayout'
import Layout from '../components/Layout/Layout'
import styled from 'styled-components'
import Button from '../components/ui-kits/Button/Button'
import withApollo from '../utils/withApollo'
import { useQuery } from '@apollo/react-hooks'

import { Card } from '../components/ui-kits/Card'
import { useRouter } from 'next/router'
import api from '../../controller/BaseApi'

import { DataContext } from '../../controller/store/GlobalState'
import { addToCart } from '../../controller/store/Actions'
import { IProduct } from '../../controller/store/Interfaces'
import Link from 'next/link'

export const StyledHomeBody = styled.div`
  display: grid;
  justify-content: center;
  position: relative;
  grid-template-columns: repeat(auto-fill, 320px);
  grid-gap: 20px;
  min-height: 80vh;
`

function Home() {
  const [product, setProduct] = useState<IProduct[]>([])

  const { state, dispatch } = useContext(DataContext)

  const { cart } = state

  const router = useRouter()

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
    })
  }, [])

  return (
    <>
      <Head>
        <title>Leonardo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroBanner />
      <Layout>
        <StyledHomeBody>
          {/* Link to each product ID */}
          {product.map((data) => (
            <Card
              key={data.id}
              imageURL={data.imageArr[0].url}
              buttonGroups={
                <>
                  <Button
                    onClick={() => {
                      router.push(`/details/${data.id}`)
                    }}
                  >
                    View
                  </Button>
                  <Button
                    onClick={() => {
                      dispatch(addToCart(data, cart))
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
    </>
  )
}

export default withApollo({ ssr: true })(Home)
