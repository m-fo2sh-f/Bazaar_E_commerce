import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../products";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        newArrivals: [],
        forYou: [],
        selectedProduct: {}

    },
    reducers: {
        getProduct: (state) => {
            state.items = products
        },
        addProduct: (state, action) => {
            state.items.push(action.payload);
        },
        updateProduct: (state, action) => {
            const { id, updatedData } = action.payload;
            const index = state.items.findIndex((p) => p.id === id);
            if (index !== -1) {
                state.items[index] = { ...state.items[index], ...updatedData };
            }
        },
        deleteProduct: (state, action) => {
            state.items = state.items.filter((p) => p.id !== action.payload);
        },
        searchProducts: (state, action) => {
            console.log(action.payload);
            state.items = products;

        },
        newArrivals: (state) => {
            state.newArrivals = products.slice(0, 5);
        },
        forYou: (state) => {
            state.forYou = products.slice(0, 8);
        },
        cartProducts: (state, action) => {
            const payload = action.payload;
            state.items = products.filter(product => payload.some(item => item.id === product.id)).map(product => {
                const found = payload.find(item => item.id === product.id);
                return { ...product, quantity: found ? found.quantity : 1 };
            });
        },
        productById: (state, action) => {
            const payload = parseInt(action.payload);
            const selectedProduct = products.find(product => {
                return product.id === payload;
            });
            state.selectedProduct = selectedProduct || {};
        }

    },
});

export const {
    addProduct,
    updateProduct,
    deleteProduct,
    searchProducts,
    getProduct,
    newArrivals,
    forYou,
    cartProducts,
    productById
} = productsSlice.actions;

export default productsSlice.reducer;