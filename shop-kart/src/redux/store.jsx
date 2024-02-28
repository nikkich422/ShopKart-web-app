import {configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice.jsx";
import CartReducer from "./slices/CartSlice.js";

export default configureStore({
    reducer: {
        productReducer,
        CartReducer
    }
})