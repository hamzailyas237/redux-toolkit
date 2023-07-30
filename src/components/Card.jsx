



import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { add } from '../store/CartSlice';
import { useDispatch } from 'react-redux';

const ProductCard = ({ product }) => {

    const dispatch = useDispatch()
    const addToCart = () => {
        dispatch(add(product))
    }

    return (
        <div>
            <Card sx={{ width: 250, m:2 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                    alt="Product Image"
                />
                <CardContent>
                <Typography variant="body2" color="text.secondary">
                        {product.title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant='contained' onClick={addToCart}>Add to cart</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default ProductCard

