import React from 'react'
import {useRouter} from 'next/router'
import Product from './index'

const ProductDetail = () => {
    const router = useRouter()

  return (
    <Product>
        <h1>
            product detail
        </h1>
        <p>dengan id : {router.query.id} </p>
        <p>filter : {router.query.filter}</p>
        <p>{JSON.stringify(router.query)}</p>
    </Product>
    
  )
}

export default ProductDetail