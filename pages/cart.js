import React from 'react'
import Button from '../components/base/Button'
import styles from '../styles/Card.module.css'

const Cart = () => {
  return (
    <div className={styles.container}>
        <h1>
            page card
        </h1>
        <Button title='simpan'/>
    </div>
  )
}

export default Cart