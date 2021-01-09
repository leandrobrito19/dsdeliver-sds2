import { useEffect, useState } from 'react';
import { fetchProducts, saveOrder } from '../api';
import ProductList from './ProductsList';
import StepsHeader from './StepHeads';
import './Styles.css';
import { OrderLocationData, product } from './types';
import OrderLocation from './OrderLocation'
import OrderSumamry from './OrderSummary';
import Footer from '../Footer';
import { checkIsSelected } from './Helpres';
import {toast } from 'react-toastify';
function Orders(){
    const[products, setProducts] = useState<product[]>([]);
    const[selectedProducts, setSelectedProducts] = useState<product[]>([])
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>(); 
    const totalPrice = selectedProducts.reduce((sum, item)=> {
      return sum + item.price;
    }, 0); 
    
useEffect (() => {
      fetchProducts().then(response => setProducts(response.data)).catch(error => console.log(error))
}, []);


const handleSelectProduct = (product: product) => {
  const isAlreadySelected = checkIsSelected(selectedProducts, product);

  if (isAlreadySelected) {
    const selected = selectedProducts.filter(item => item.id !== product.id);
    setSelectedProducts(selected);
  } else {
    setSelectedProducts(previous => [...previous, product]);
  }
}
const handleSubmit = () => {
  const productsIds = selectedProducts.map(({ id }) => ({ id }));
  const payload = {
    ...orderLocation!,
    products: productsIds
  }

  saveOrder(payload).then((response) => {
    toast.error(`Pedido enviado com sucesso! Nº ${response.data.id}`);
    setSelectedProducts([]);
  })
    .catch(() => {
      toast.warning('Erro ao enviar pedido');
    })
}



    return (
       <>
        <div className="orders-container">
            <StepsHeader />
            <ProductList 
            products={products}
            onSelectProduct={handleSelectProduct}
            selectedProducts={selectedProducts}
            />
            <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
            <OrderSumamry  amount={selectedProducts.length} 
            totalPrice={totalPrice}
            onSubmit={handleSubmit}
            />
        </div>
        <Footer />
       </>
    )
}

export default Orders;