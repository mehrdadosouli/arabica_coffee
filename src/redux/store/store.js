import { configureStore } from "@reduxjs/toolkit"
import ProductsReducer from "../features/products/ProductsSlice"

export const store =configureStore({
    reducer:{
        products:ProductsReducer
    }
})
