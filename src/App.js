import React, { useEffect, useState } from 'react';
import { commerce } from './lib/commerce';
import { Products, Navbar, Cart } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


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
    <Router>
    <div>
        <Navbar totalItems={cart.total_items}/>
        <Switch>
          <Route exact path={"/"} component={Link}>
            <Products products={products} addToCart={addToCart}/>
          </Route>
          <Route exact path={"/cart"} component={Link}>
            <Cart cart={cart}/>
          </Route>
        </Switch>
    </div>
    </Router>
  )
}

export default App;


// cart && cart.line_items && cart.line_items.total_items
// // OR, if using ES2020 (optional chaining)
// cart?.line_items?.total_items