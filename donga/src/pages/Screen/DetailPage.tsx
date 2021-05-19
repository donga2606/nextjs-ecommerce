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
  // useEffect(() => {
  //   api.get('http://localhost:3031/api/product/6096b8cff8086e2588f5aaca').then((response): any => {
  //     const data = response.data.data
  //     setProduct({
  //       name: data.name,
  //       imageArr: data.imageArr,
  //       description: data.description,
  //       price: data.price,
  //       id: data._id,
  //     })
  //   })
  // }, [])

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

// export async function getStaticPaths() {
//   let paths = []

//   await api.get('http://localhost:3031/api/product/').then((response) => {
//     const products = response.data.data
    
//     paths = products.map((item) => ({
//       params: { id: item._id },
//     }))
//   })
//   console.log(paths)
//   return ({
//     paths,
//     fallback: true
//   })
// }

// export async function getStaticProps({ params }) {
//   let product = {};
//   console.log(params)
//   await api.get(`http://localhost:3031/api/product/${params.id}`).then((response)=>{
//     product = response.data.data;
//   })
//   return {
//     props: {product}
//   }
// }
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
