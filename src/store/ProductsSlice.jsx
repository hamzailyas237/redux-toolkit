
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const STATUSES = {
    IDLE: 'idle',
    LOADING: 'loading',
    ERROR: 'error'
}
// // OR 
// const STATUSES = {
//     SUCCESS: 'success',
//     LOADING: 'loading',
//     FAIL: 'fail'
// }



const productsSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state, action) => {
            // console.log(action, state)
            state.status = STATUSES.LOADING
        })
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            console.log(action, state)
            state.status = STATUSES.IDLE
            state.data = action.payload
        })
        builder.addCase(fetchProduct.rejected, (state, action) => {
            // console.log(action, state)
            state.status = STATUSES.ERROR
        })
    }
})

export const fetchProduct = createAsyncThunk('products/fetch', async () => { // products/fetch or any name
    const productsData = await fetch('https://fakestoreapi.com/products')
    // console.log('productsData ==> ', productsData);
    const products = await productsData.json()
    console.log('products ==> ', products);
    return products
})

const { reducer } = productsSlice
export default reducer

