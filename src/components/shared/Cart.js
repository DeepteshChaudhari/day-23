import React, { useContext } from 'react'

// Context 
import { CartContext } from '../../context/Reducer.context.provider'

// Functions
import {shorten} from '../../helper/functions'

// Icons
import trashIcon from '../../assets/icons/trash.svg'

// Styles
import styles from '../../Styles/Cart.module.css'

export default function Cart(props) {

    const {image , title , price, quantity} = props.data;
    const {dispatch} = useContext(CartContext);
  return (
    <div className={styles.container}>
        <img className={styles.imageProduct} src={image} alt="Product" />
        <div className={styles.titleContainer}>
            <h3>{shorten(title)}</h3>
            <p>{price} $</p>
        </div>
        <div className={styles.spanContainer}>
            <span>{quantity}</span>
        </div>
        <div className={styles.buttonsContainer}>
            {
                quantity > 1 ?
                    <button onClick={() => dispatch({type : "DECRASE", payload : props.data})}>-</button> :
                    <button onClick={() => dispatch({type : "REMOVE_ITEM", payload : props.data})}><img src={trashIcon} alt='Trash' style={{width : "15px"}}/></button>
            }
            <button onClick={() => dispatch({type : "INCRASE", payload : props.data})}>+</button>
        </div>
    </div>
  )
}
