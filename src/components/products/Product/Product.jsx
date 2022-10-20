import React from 'react';
import Typohraphy from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
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
