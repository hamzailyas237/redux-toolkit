

import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/Card'
import ResponsiveAppBar from '../components/Navbar'
import { fetchProduct } from '../store/ProductsSlice'

const Home = () => {

  const dispatch = useDispatch()
  const { data, status } = useSelector(state => state.product)
  useEffect(() => {
    dispatch(fetchProduct())
  }, [])

  console.log(data);
  console.log(status);

  if (status == 'loading') {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      <ResponsiveAppBar />
      <Grid container spacing={4} sx={{ justifyContent: 'center', mt: 4 }}>
        {data && data.map((product) => {
          return <Grid item key={product.id}>
            < ProductCard product={product} />
          </Grid>
        })}
      </Grid>

    </div>
  )
}

export default Home