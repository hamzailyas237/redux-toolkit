import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./CartSlice";
import productSlice from './ProductsSlice'


const store = configureStore({
    reducer: {
        // cart is name of you reducer object and reducer is the initial state you defined in create slice 
        cart: reducer,
        product: productSlice
    }
})
export { store }