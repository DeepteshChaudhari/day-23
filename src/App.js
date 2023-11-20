import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Store from './components/Store';
import ProductsContextProvider from './context/Products.context.provider';
import ProductDetails from './components/ProductDetails';
import ReducerContextProvider from './context/Reducer.context.provider';
import Navbar from './components/shared/Navbar';
import ShopCarts from './components/ShopCarts';

function App() {
  return (
    <ProductsContextProvider>
      <ReducerContextProvider>
        <Navbar />
        <Routes>
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<ShopCarts />}/>
          <Route path='/products' element={<Store />} />
          <Route path='/*' element={<Navigate to='/products' />} />
        </Routes>
      </ReducerContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
