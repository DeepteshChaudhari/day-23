import React, { useContext } from 'react'
import { ProductsContext } from '../context/Products.context.provider'
import { Link, useParams } from 'react-router-dom';

// Styles 
import styles from '../Styles/ProductDetails.module.css';

export default function ProductDetails() {
    const params = useParams();
    const data = useContext(ProductsContext);
    const product = data[params.id - 1];
    

  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <img src={product && product.image} alt="Product" style={{width: "200px"}} />
        <div className={styles.container3}>
            <h3>{product && product.title}</h3>
            <p className={styles.des}>{product && product.description}</p>
            <p><span>Category :</span> {product && product.category}</p>
            <div className={styles.buttons}>
                <span>{product && product.price} $</span>
                <Link to='products'>Back</Link>
            </div>
        </div>
      </div>
    </div>
  )
}
