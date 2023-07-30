

import { Grid } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/Card'
import ResponsiveAppBar from '../components/Navbar'


const CartItems = () => {

    const { cart } = useSelector((state) => {
        return state
    })
    console.log(cart);

    return (
        <div>
            <ResponsiveAppBar />
            <Grid container spacing={4} sx={{ justifyContent: 'center', mt: 4 }}>
                {cart && cart.map((product) => {
                    return <Grid item key={product.id}>
                        < ProductCard product={product} />
                    </Grid>
                })}
            </Grid>
        </div>
    )
}

export default CartItems

