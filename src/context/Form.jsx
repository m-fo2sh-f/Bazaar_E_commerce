// Form.jsx
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext(); // تصدير CartContext هنا

export const CartProvider = ({ children }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [numberOfItemsInCart, setNumberOfItemsInCart] = useState(0);

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem('cart'));

        if (!cartData || !Array.isArray(cartData)) {
            setNumberOfItemsInCart(0);
            return;
        }

        let sum = 0;
        cartData.forEach((p) => {
            sum += p.quantity || 0;
        });
        setNumberOfItemsInCart(sum);
    }, [])

    return (
        <CartContext.Provider value={{ totalPrice, setTotalPrice, numberOfItemsInCart, setNumberOfItemsInCart }}>
            {children}
        </CartContext.Provider>
    );
};