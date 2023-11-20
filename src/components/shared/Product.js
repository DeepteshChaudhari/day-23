import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

// icons
import trashIcon from "../../assets/icons/trash.svg"

// Helper Function
import { shorten , isInCart , quantityCount} from '../../helper/functions'

// Context
import {CartContext} from '../../context/Reducer.context.provider';

// Styles
import styles from '../../Styles/Product.module.css'

export default function Product({productData}) {
  const {state , dispatch} = useContext(CartContext);

  return (
    <div className={styles.container}>
        <img src={productData.image} alt="Product" style={{width: "200px" , height: "200px"}} />

        <h3>{shorten(productData.title)}</h3>
        <p>{productData.price} $</p>
        <div className={styles.buttonContainer}>
            <Link to={`/products/${productData.id}`}>Details</Link>
            <div className={styles.buttonCotainerChild}>
                {
                  isInCart(state , productData.id) ? 
                    <button className={styles.buttonShort} onClick={() => dispatch({type: "INCRASE" , payload : productData})}>+</button> :
                    <button onClick={() => dispatch({type: "ADD_ITEM" , payload : productData})}>add To Cart</button>
                }
                {
                  quantityCount(state , productData.id) > 0 && <span>{quantityCount(state , productData.id)}</span>
                }
                {
                  quantityCount(state , productData.id) === 1 && <button className={styles.buttonShort} onClick={() => dispatch({type: "REMOVE_ITEM" , payload : productData})}><img className={styles.imgIcon} src={trashIcon} alt='Trash Icon' /></button>
                }
                {
                quantityCount(state , productData.id) > 1 && <button className={styles.buttonShort} onClick={() => dispatch({type: "DECRASE" , payload : productData})}>-</button>
                }
            </div>
        </div>
    </div>
  )
}
