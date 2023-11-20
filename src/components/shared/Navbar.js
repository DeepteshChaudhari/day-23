import React, { useContext } from 'react'

// Icons
import shopIcon from '../../assets/icons/shop.svg'

// Styles
import styles from '../../Styles/Navbar.module.css'
import { CartContext } from '../../context/Reducer.context.provider'
import { Link } from 'react-router-dom';

export default function Navbar() {
    const {state} = useContext(CartContext);

  return (
    <div className={styles.container}>
        <Link className={styles.linkProduct} to='/product'>Product</Link>
        <div className={styles.divCart}>
            <Link to='/cart'><img className={styles.icon} src={shopIcon} alt="Shop Icon"  /></Link>
            <span className={styles.span}>{state.itemCounter}</span>
        </div>
    </div>
  )
}
