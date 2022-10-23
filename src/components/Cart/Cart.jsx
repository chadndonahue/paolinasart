import React from 'react'
import { Container } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import useStyles from './styles'
import CartItem from './CartItem/CartItem'

const Cart = ({cart}) => {
  const classes = useStyles();
  const EmptyCart = () => (
    <Typography variant='subtitle1'>There are no items in your shopping cart.</Typography>
  );

    const FilledCart = () => (
      <>
      <Grid container spacing ={3}>
        {cart.line_items.map((item) =>(
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant='h4'>
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary'>Empty Cart</Button>
          <Button className={classes.checkoutButton} size='large' type='button' variant='contained' color='Primary'>Checkout</Button>
        </div>
      </div>
      </>
    )
    
    if(!cart.line_items) return 'Loading...'
  return (
    <Container>
      <div className={classes.toolbar}/>
      <Typography className={classes.title} variant='h3'>Shopping Cart</Typography>
      { !cart.line_items.length ? <EmptyCart/> : <FilledCart/>}
    </Container>
  )
}

export default Cart
