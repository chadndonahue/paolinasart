import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typohraphy, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';


const Product = ({product}) => {
    const classes = useStyles();
    return (
    <Card className={classes.root}>
        <CardMedia className={classes.media} image='' title={product.name}/>
        <CardContent>
            <div className={classes.cardContent}>
                <Typohraphy variant='h5' gutterbottom>
                    {product.name}
                </Typohraphy>
                <Typohraphy variant='h5'>
                    {product.price}
                </Typohraphy>
            </div>
            <Typohraphy variant='h2' color='textSecondary'>{product.description}</Typohraphy>
        </CardContent>
        <CardActions disableSpacing className={classes.CardActions}>
            <IconButton aria-label='Add to Cart'>
                <AddShoppingCart />
            </IconButton>
        </CardActions>
    </Card>
  )
}

export default Product;
