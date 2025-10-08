import { alpha, Box, MenuItem, Stack, useTheme, Typography, IconButton, Divider, Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartProducts } from '../../../features/products/productApisSlice'



import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import Form from './Form';

import { useCart } from "../../../context/useCart";
export default function CartSection({ handleNext }) {
    const { totalPrice, setTotalPrice, setNumberOfItemsInCart } = useCart();
    const [dataLocalStorage, setDataLocalStorage] = React.useState(JSON.parse(localStorage.getItem('cart')) || []);
    const productsList = useSelector((state) => state.items.items)
    const theme = useTheme()
    const dispatch = useDispatch()


    useEffect(() => {
        if (dataLocalStorage && dataLocalStorage.length > 0) {
            dispatch(cartProducts(dataLocalStorage));
        } else {
            dispatch(cartProducts([]));
        }
    }, [dataLocalStorage, dispatch])
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(dataLocalStorage));
    }, [dataLocalStorage]);
    useEffect(() => {
        if (productsList && productsList.length > 0) {
            const salary = productsList.reduce((acc, item) => {
                return acc + (item.price * item.quantity);
            }, 0);
            setTotalPrice(salary);
        }

    }, [productsList, dataLocalStorage]);

    const removeProduct = (id) => {
        const updatedList = dataLocalStorage.filter(p => p.id !== id);
        setDataLocalStorage(updatedList);
        localStorage.setItem('cart', JSON.stringify(updatedList));
    };


    const increaseQty = (id, amount, price) => {
        let cart = dataLocalStorage.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setDataLocalStorage(cart);
        localStorage.setItem("cart", JSON.stringify(cart));
        const sum = amount * price;
        setTotalPrice(totalPrice + sum);
        setNumberOfItemsInCart(prev => prev + 1)
    };

    const decreaseQty = (id, price) => {
        let cart = dataLocalStorage.map(item =>
            item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );

        setDataLocalStorage(cart);
        localStorage.setItem("cart", JSON.stringify(cart));
        setTotalPrice(totalPrice - price);
        setNumberOfItemsInCart(prev => prev - 1)

    };
    function clearCart() {
        localStorage.removeItem("cart");
        setTotalPrice(0);
        setDataLocalStorage([]);
        dispatch(cartProducts([]));
        setNumberOfItemsInCart(0)

    }


    const items = () => {
        return productsList.map((p) => {
            return (
                <Stack
                    alignItems={'center'}
                    direction={'row'}
                    key={p.id}
                    sx={{ height: '100px', maxHeight: '100px', flexGrow: 1, bgcolor: theme.palette.primary.main, borderRadius: '20px' }}
                >
                    <Box sx={{
                        bgcolor: alpha(theme.palette.primary.dark, 0.05), width: '20%', height: '100%',
                        borderTopLeftRadius: '20px',
                        borderBottomLeftRadius: '20px',
                        p: '10px',
                        textAlign: 'center',
                    }}>
                        <Box
                            component="img"
                            src={p.img}
                            loading="lazy"
                            alt={p.name}
                            sx={{
                                borderRadius: '20px',
                                width: '85%',
                                height: '100%'
                            }}
                        />
                    </Box>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{ flexGrow: 1, px: '10px' }}>
                        <Box sx={{ width: '25%', textAlign: 'left', display: 'flex', alignContent: 'end', flexDirection: 'column', height: '80%' }}>
                            <Typography sx={{ color: theme.palette.secondary.main, mb: '5px' }} >{p.name}</Typography>
                            <Typography sx={{ color: theme.palette.secondary.main, mb: '5px', fontWeight: 'bold' }} >${p.price}</Typography>
                        </Box>
                        <Box sx={{ width: '25%', display: 'flex', justifyContent: 'end', alignContent: 'end', height: '80%', alignItems: 'center', gap: 2 }}>
                            <Box onClick={() => {
                                const updatedCart = increaseQty(p.id, p.quantity, p.price);
                                dispatch(productById(updatedCart));
                            }} sx={{ zIndex: '50', cursor: 'pointer', bgcolor: alpha(theme.palette.primary.dark, 0.05), borderRadius: '10px' }}>
                                <IconButton aria-label="delete" disabled color="primary">
                                    <AddIcon sx={{ color: theme.palette.secondary.main }} />
                                </IconButton>
                            </Box>
                            <Typography> {p.quantity}</Typography>
                            <Box onClick={() => {
                                const updatedCart = decreaseQty(p.id, p.price);
                                dispatch(productById(updatedCart));
                            }} sx={{ zIndex: '55', cursor: 'pointer', bgcolor: alpha(theme.palette.primary.dark, 0.05), borderRadius: '10px' }}>
                                <IconButton aria-label="delete" disabled color="primary">
                                    <RemoveIcon sx={{ color: theme.palette.secondary.main }} />
                                </IconButton>
                            </Box>
                        </Box>
                        <Box sx={{ width: '25%', textAlign: 'right', display: 'flex', alignContent: 'end', flexDirection: 'column', height: '80%' }}>
                            <Typography sx={{ color: theme.palette.secondary.main, mb: '5px', fontWeight: 'bold' }} >${p.price * p.quantity}</Typography>
                        </Box>
                        <Box sx={{ width: '25%', textAlign: 'right', display: 'flex', alignContent: 'end', flexDirection: 'column', height: '80%' }}>

                            <Box onClick={() => { removeProduct(p.id) }} sx={{ zIndex: '55', cursor: 'pointer', borderRadius: '10px' }}>
                                <IconButton >
                                    <DeleteForeverOutlinedIcon sx={{ color: 'red' }} />
                                </IconButton>
                            </Box>

                        </Box>
                    </Stack>
                </Stack >
            );
        });
    }

    return (
        <Stack direction={{ md: 'row', xs: 'column', }} gap={2} sx={{ mt: '50px', width: { lg: '90%', md: '100%', xs: '100%', }, px: 2, mx: 'auto', }}>
            {productsList.length === 0 || dataLocalStorage.length === 0 ? (
                <>
                    <Stack justifyItems={'center'} alignItems={'center'} gap={2} width={'100%'} mt={5} >
                        <Typography sx={{
                            p: '20px',
                            width: 'fit-content',
                            display: 'flex', justifyContent: 'center', alignItems: 'center',
                            bgcolor: theme.palette.primary.main, color: theme.palette.primary.dark,
                            borderRadius: '10px'
                        }} ><DeleteForeverOutlinedIcon sx={{ fontSize: '50px' }} /></Typography>
                        <Stack justifyItems={'center'} alignItems={'center'} >
                            <Typography sx={{ fontSize: '20px', fontWeight: 'bold', color: theme.palette.secondary.main }} >Your cart is empty</Typography>
                            <Typography sx={{ fontSize: '', fontWeight: '', color: theme.palette.primary.dark }} >Looks like you haven't added anything to your cart yet.</Typography>
                        </Stack>
                        <Button onClick={() => {
                            clearCart()
                        }} variant="contained" sx={{ color: theme.palette.primary.light, boxShadow: '0', bgcolor: theme.palette.secondary.main, width: 'fit-content', textWrap: 'nowrap', borderRadius: '10px' }}>
                            Start Shopping
                        </Button>
                    </Stack>
                </>
            ) : (
                <>
                    <Stack sx={{ width: { md: '60%', xs: '100%', }, gap: 2, flexGrow: 1, }}>
                        {items()}

                        <Box sx={{ textAlign: 'right', zIndex: '55' }}>
                            <Button onClick={() => {
                                clearCart()
                            }} variant="outlined" color="error" sx={{ width: 'fit-content', textWrap: 'nowrap', borderRadius: '10px' }}>
                                <DeleteForeverOutlinedIcon />Clear Cart
                            </Button>
                        </Box>
                    </Stack>
                    <Stack sx={{ width: { md: '25%', xs: '100%', }, flexGrow: 1, bgcolor: theme.palette.primary.main, borderRadius: '20px', p: 3 }}>
                        <Form totalSalary={totalPrice} handleNext={handleNext} />
                    </Stack>
                </>
            )
            }

        </Stack >
    )
}
