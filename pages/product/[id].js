import React from 'react'
import {useRouter} from 'next/router'
import Product from './index'
import axios from 'axios'

const ProductDetail = ({product}) => {
    const router = useRouter()

  return (
    <Product>
        <h1>
            product detail
        </h1>
        <ul>
          <li>name: {product.name}</li>
          <li>description: {product.description}</li>
          <li>price: {product.price}</li>
        </ul>
        {/* <p>dengan id : {router.query.id} </p>
        <p>filter : {router.query.filter}</p>
        <p>{JSON.stringify(router.query)}</p> */}
    </Product>
    
  )
}

export const getServerSideProps=async(context)=>{
  try {
    const {id} = context.params
    const {data: RespData} = await axios.get(`http://localhost:4000/v1/products/${id}`)
    const result = RespData.data
    console.log(result);
    return {
      props: {product: RespData.data}
    }
  } catch (error) {
    
  }
}

export default ProductDetail