import React, { useEffect, useState } from 'react';
import { commerce } from './lib/commerce';
import { Products, Navbar, Cart } from './components'


const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    useEffect(() => {
      console.log(cart)
    
    }, [cart])
    

  
    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        
        setProducts(data);
    }

    const fetchCart = async () => {
      setCart(await commerce.cart.retrieve());
    };


    const addToCart =  async (productId, quantity) => {
      setCart(await commerce.cart.add(productId, quantity));
}
    

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);


  return (
    <div>
        <Navbar totalItems={cart.total_items}/>
        <Products products={products} addToCart={addToCart}/>
        <Cart cart={cart}/>
    </div>
  )
}

export default App;


// cart && cart.line_items && cart.line_items.total_items
// // OR, if using ES2020 (optional chaining)
// cart?.line_items?.total_items