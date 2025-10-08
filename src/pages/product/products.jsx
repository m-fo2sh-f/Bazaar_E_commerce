import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProduct, productById } from "../../features/products/productApisSlice";
import { Box, Stack, useTheme, Typography, Rating, Checkbox, styled, Button } from '@mui/material';
import ProductCard from '../../components/ProductCard'
import Description from './Description';
import { useCart } from '../../context/useCart';


export default function Product() {
    const theme = useTheme()
    const dispatch = useDispatch()
    const [option, setOption] = useState('option1')
    const [type, setType] = useState('type1')
    const product = useSelector((state) => state.items.selectedProduct);
    const { setNumberOfItemsInCart } = useCart();


    const { id } = useParams();
    useEffect(() => {
        dispatch(productById(id))
    }, [])

    const addToCart = (product) => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        const productExists = storedCart.find(item => item.id === product.id);
        if (productExists) {
            productExists.quantity += 1;
        } else {
            storedCart.push({ id: product.id, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(storedCart));
        setNumberOfItemsInCart(prev => prev + 1)
    };
    const optionButton = (value) => {
        return (
            <Button variant="contained"
                sx={{
                    borderRadius: '7px',
                    boxShadow: '0',
                    bgcolor: option == value ? theme.palette.secondary.main : theme.palette.primary.main,
                    color: option == value ? theme.palette.primary.main : theme.palette.secondary.main,
                    border: '1px solid ',
                    borderColor: theme.palette.secondary.main
                }}
                onClick={() => {
                    setOption(value)
                }}
            >
                {value}
            </Button>

        )
    }
    const typeButton = (value) => {
        return (
            <Button variant="contained"
                sx={{
                    borderRadius: '7px',
                    boxShadow: '0',
                    bgcolor: type == value ? theme.palette.secondary.main : theme.palette.primary.main,
                    color: type == value ? theme.palette.primary.main : theme.palette.secondary.main,
                    border: '1px solid ',
                    borderColor: theme.palette.secondary.main
                }}
                onClick={() => {
                    setType(value)
                }}
            >
                {value}
            </Button>

        )
    }


    return (
        <Box >
            <Box sx={{ width: '97%', bgcolor: theme.palette.primary.main, mx: 'auto', mt: 5, borderRadius: '10px' }}>


                <Stack direction={'row'} alignItems={'center'} gap={3}>
                    <Box sx={{ flexGrow: 1, width: '50%', textAlign: 'center' }}>
                        <Box
                            component="img"
                            src={product.img}
                            loading="lazy"
                            alt={product.name}
                            sx={{

                                objectFit: "contain",
                                width: '500px'
                                , height: '500px'
                            }}
                        />
                    </Box>
                    <Box sx={{ flexGrow: 1, width: '50%', ml: 5, pl: 5 }}>
                        <Typography sx={{ fontSize: '30px', fontWeight: 'bold', color: theme.palette.secondary.main }}>{product.name} </Typography>
                        <Box>
                            <Typography>Category: <b>{product.category}</b> </Typography>
                            <Typography>Product Code: <b>{product.id}</b> </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                            <Typography sx={{ fontSize: '30px', fontWeight: 'bold', color: theme.palette.secondary.main }}>${product.price}</Typography>
                            <Typography sx={{ fontSize: '20px', fontWeight: 'bold', color: theme.palette.secondary.light, textDecoration: ' line-through' }}>${product.price - 100}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Typography>Rated: </Typography>
                            <Rating name="read-only" value={parseInt(product.rate)} readOnly />
                        </Box>
                        <Typography mt={2} >Option</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: 2, my: 1 }}>
                            {optionButton('option1')}
                            {optionButton('option2')}
                            {optionButton('option3')}
                            {optionButton('option4')}
                        </Box>
                        <Typography mt={2}>Type</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: 2, my: 1 }}>
                            {typeButton('type1')}
                            {typeButton('type2')}
                            {typeButton('type3')}
                        </Box>
                        <Button variant="contained"
                            sx={{
                                my: 2,
                                width: '80%',
                                borderRadius: '7px',
                                boxShadow: '0',
                                bgcolor: theme.palette.secondary.main,
                                color: theme.palette.primary.main,
                                border: '1px solid ',
                                borderColor: theme.palette.secondary.main
                            }}
                            onClick={() => {
                                addToCart()
                            }}
                        >
                            Add To Cart
                        </Button>
                        <Typography sx={{ fontSize: '15px', color: theme.palette.secondary.main }}>Sold By : {product.soldby}</Typography>


                    </Box>
                </Stack>


            </Box>
            <Box sx={{ width: '97%', mx: 'auto', my: 2 }}>
                <Description product={product} />
            </Box>


        </Box >
    )
}
