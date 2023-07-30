import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "../Redux/cartSlice";
import productReducer from "../Redux/productSlice"

const store = configureStore({
    reducer:{
        cart : cartReducer,
        product : productReducer
    }
})

export default store;