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
  const { id } = useRouter().query
  
  const [product, setProduct] = useState(props.product)

  return (
    <>
      <Head>
        <title>SevenSunday Fashion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderCustom cartNum={0} />
      
        {product ? (
          <DetailCard product={product}></DetailCard>
        ) : (
          <div style={{padding: "30px"}}>This product is not available right now</div>
        )}
      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  let paths = []

  await api.get('http://localhost:4041/api/product/').then((response) => {
    const products = response.data.data
    
    paths = products.map((item) => ({
      params: { id: item._id },
    }))
  })
  
  return ({
    paths,
    fallback: true
  })
}


export async function getStaticProps({ params }) {
  let product = {};
  await api.get(`http://localhost:4041/api/product/${params.id}`).then((response)=>{
    product = response.data.data;
  })
  return {
    props: {product}
  }
}

export default DetailPage;

// TODO: src image, price, description, add to cart
