import React from 'react'
import styles from './Button.module.css'
const Button = ({title}) => {
  return (
    <button className={`${styles.btn} ${styles['btn-custom']}`}>{title} <span> - tokoku</span></button>
  )
}

export default Button