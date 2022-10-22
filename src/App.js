import React, { useEffect, useState } from 'react';
import { commerce } from './lib/commerce';
import Products from './components/products/Products';
import Navbar from './components/Navbar/Navbar';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

  
    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        
        setProducts(data);
    }

    const fetchCart = async () => {
        const cart = await commerce.cart.retrieve();

        setCart(cart);
    }

    const addToCart = async (productId, quantity) => {
      const item = await commerce.cart.add(productId, quantity);

      setCart(item.cart);
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    console.log(cart);

  return (
    <div>
        <Navbar />
        <Products products={products} onAddToCart={addToCart}/>
    </div>
  )
}

export default App;
