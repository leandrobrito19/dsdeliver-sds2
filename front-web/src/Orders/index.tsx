import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import ProductList from './ProductsList';
import StepsHeader from './StepHeads';
import './Styles.css';
import { product } from './types';
import OrderLocation from './OrderLocation'
function Orders(){
    const[products, setProducts] = useState<product[]>([]);
    
    
    
useEffect (() => {
      fetchProducts().then(response => setProducts(response.data)).catch(error => console.log(error))
}, []);


    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductList products={products} />
            <OrderLocation />
        </div>
    )
}

export default Orders;