import React, { useState, useEffect } from 'react'

import Head from 'next/head'

import { DetailCard } from '../../components/ui-kits/DetailCard'

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
        <title>Sản phẩm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {product ? (
        <DetailCard product={product}></DetailCard>
      ) : (
        <div style={{ padding: '30px' }}>This product is not available right now</div>
      )}
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

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  let product: IProduct 
  await api.get(`http://localhost:4041/api/product/${params.id}`).then((response:any) => {
    const result = response.data.data
    product = {
      name: result.name,
      id: result._id,
      description: result.description,
      imageArr: result.imageArr,
      price: result.price,
    }
  })
  return {
    props: {
      product
    },
  }
}

export default DetailPage
