import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { HeaderCustom } from '../../components/HeaderCustom'
import { Footer } from '../../components/Footer'
import Layout from '../../components/Layout/Layout'
import { useRouter } from 'next/router'
import { DetailCard } from '../../components/ui-kits/DetailCard'
import styled from 'styled-components'
import api from '../../../controller/BaseApi'



interface IProduct {
  id: number
  name: string
  imageArr: string
  description: string
  price: number
}

const DetailPage = (props) => {
  
  const [product, setProduct] = useState(props.product)

  return (
    <>
      <Head>
        <title>SevenSunday Fashion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderCustom cartNum={0} />
      <Layout>
        {product ? (
          <DetailCard product={product}></DetailCard>
        ) : (
          <div>This product is not available right now</div>
        )}
      </Layout>
      <Footer />
    </>
  )
}
export const getServerSideProps = async (context) => {
  const id = context.query.id;
  await api.get(`http://localhost:3031/api/product/${id}`).then(
    (response)=>{
      const product = response.data.data
      console.log(product)
      return {
        props: { product }
      }
    }
  );
} 

export default DetailPage;

// todo: src image, price, description, add to cart
