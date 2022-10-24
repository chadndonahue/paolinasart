import React from "react";
import { Grid } from "@material-ui/core";

import Product from './Product/Product';
import useStyles from './styles'


const Products = ({products, addToCart}) => {
    const classes = useStyles();
    return(
        <main className={classes.content}>
            <div className={classes.toolbar}/>
        <Grid container justify="center" spacing={4}>
            {products.map((product)=>(
                <Grid xs={12} sm={6} md={4} lg={3}>
                    <Product item key={product.id} product={product} addToCart={addToCart}/>
                </Grid>
            ))}
        </Grid>
    </main>
    );

}

export default Products;