import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
// Component
import Cart from './shared/Cart'

// Context 
import { CartContext } from '../context/Reducer.context.provider'

// Styles
import styles from '../Styles/Shopcart.module.css';

export default function ShopCarts() {
  const {state , dispatch} = useContext(CartContext);
  return (
    <div className={styles.container}>
      <div>
        {state.selectedItem.map((item) => <Cart key={item.id} data={item}/>)}
      </div>
      {
        state.itemCounter > 0 && <div className={styles.buyYes}>
          <div>
            <p><span>Total Items :</span> {state.itemCounter}</p>
            <p><span>Total Payments :</span> {state.total} $</p>
          </div>
          <div className={styles.buttonContainer}>
            <button onClick={() => dispatch({type : "CHECKOUT"})}>Check Out</button>
            <button onClick={() => dispatch({type : "CLEAR"})}>Clear</button>
          </div>
        </div>
      }
      
      {
        state.checkout && <div className={styles.checkout}>
          <h3>Checked Out Successfully</h3>
          <Link to='/product'>Buy More</Link>
        </div>
      }

      {
        !state.checkout && state.itemCounter === 0 && <div className={styles.buyNo}>
          <h3>Want to Buy?</h3>
          <Link to='/product'>Go To Shop</Link>
        </div>
      }
    </div>
    )
}
