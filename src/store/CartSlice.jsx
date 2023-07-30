import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: 'cart', // used for idendifying slice, as toolkit automatically make type property using this name, when we dispatch from UI i.e name/add or any action
    initialState: [],
    reducers: {
        add(state, action) {
            console.log(state, action);
            state.push(action.payload)
        },
        remove(state, action) {

        }
    }
})

const { actions, reducer } = cartSlice
const { add, remove } = actions
export { add, remove, reducer }

