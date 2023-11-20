import React, { createContext, useEffect, useState } from 'react'

//API
import { getProducts } from '../services/ApiService';

export const ProductsContext = createContext();

export default function ProductsContextProvider({children}) {
    const [products , setProducts] = useState([]);
    useEffect(() => {
        const fetchApi = async() => {
            setProducts(await getProducts('/products'))
        }
        fetchApi();
    } , [])
  return (
    <ProductsContext.Provider value={products}>
        {children}
    </ProductsContext.Provider>
  )
}
