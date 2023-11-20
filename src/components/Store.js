import React , {useContext} from 'react'
// Context
import {ProductsContext} from '../context/Products.context.provider';

// Styles
import styles from '../Styles/Store.module.css'
import Product from './shared/Product';

export default function Store() {
  
    const products = useContext(ProductsContext);
    return (
    <div className={styles.container}>
        {
            products.map(product => <Product key={product.id} productData={product} />)
        }
    </div>
  )
}
