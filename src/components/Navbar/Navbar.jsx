import React from 'react';
import { AppBar, Icon } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/navbar.jpg';

import useStyles from './styles'

const Navbar = ({totalItems}) => {
    const classes = useStyles();
  return (
    <div>
        <AppBar position='fixed' className={classes.AppBar} color='inherit'>
            <Toolbar>
                <Typography variant ='h6' className={classes.title} color='inherit'>
                    <img src={logo} alt='Paolinas Place' height='25px' className={classes.image} />
                    Paolina's Place
                </Typography>
                <div className={classes.grow} />
                <div className={classes.button}>
                    <IconButton aria-label='Show cart items' color='inherit'>
                        <Badge badgeContent={totalItems} color='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar
