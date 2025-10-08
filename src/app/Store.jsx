import { configureStore } from '@reduxjs/toolkit'
import Products from '../features/products/productApisSlice'
export const Store = configureStore({
    reducer: {
        items: Products
    },
})