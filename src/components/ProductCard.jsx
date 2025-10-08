import { Box, Button, Rating, Typography, useTheme } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useCart } from '../context/useCart';
import { getImageUrl } from '../getImageUrl';

export default function ProductCard({ item, view = 'column' }) {
    const theme = useTheme()
    const navigate = useNavigate()
    const { setNumberOfItemsInCart } = useCart();

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

    return (
        <>
            <Box sx={{ flexGrow: 1, minWidth: '328px', minHeight: '100px', position: 'relative', }}>
                <Box
                    sx={{
                        bgcolor: theme.palette.primary.main,
                        borderRadius: "10px",
                        height: view === "column" ? '450px' : '140px',
                        display: "flex",
                        flexDirection: view === "column" ? 'column' : 'row',
                        justifyContent: view === "column" ? 'space-around' : 'start',
                        alignItems: "center",

                        p: view === "column" ? 2 : 0,
                        "&:hover .actions": {
                            scale: "1",
                        }
                    }}
                >

                    <Box
                        component="img"
                        src={getImageUrl(item.img)}
                        loading="lazy"
                        alt={item.name}
                        sx={{
                            margin: view === "column" ? '15px auto 0' : '0 ',
                            maxWidth: '250px',
                            height: view === "column" ? '70%' : '100%',
                            objectFit: "contain",
                            width: view === "column" ? 'auto' : '200px',

                        }}
                    />
                    <Box sx={{ textAlign: view === "column" ? 'center' : 'start', }}>
                        <Typography sx={{ color: theme.palette.primary.dark }}>{item.category}</Typography>
                        <Typography variant="subtitle1" fontWeight="600">
                            {item.description}
                        </Typography>
                        <Rating
                            sx={{ transform: 'translateY(3px)', fontSize: '18px' }}
                            name="read-only"
                            value={item.rate}
                        />
                        <Typography sx={{ fontSize: '20px' }} fontWeight="bold">${item.price}</Typography>
                    </Box>
                    {view === 'column' &&
                        <Box sx={{
                            position: "absolute", top: '10px', left: '10px',
                            p: '2.5px 10px', display: "flex", justifyContent: 'center', alignItems: 'center',
                            borderRadius: '6px',
                            bgcolor: theme.palette.primary.light

                        }}>
                            <Typography sx={{ fontSize: '13px', color: theme.palette.secondary.main }}>20% off</Typography>
                        </Box>}
                    {view === 'column' &&
                        <Box className={'actions'}
                            sx={{
                                position: "absolute", top: '60%', transition: '.2s all',
                                width: '100%', display: "flex", justifyContent: 'space-evenly',
                                scale: '0'
                            }}>
                            <Button sx={{ fontSize: '12px', p: '13px 20px', borderRadius: '10px', boxShadow: 'none', bgcolor: theme.palette.secondary.main, color: theme.palette.primary.light }}
                                onClick={() => { addToCart(item) }}
                                variant="contained">Add To Cart</Button>
                            <Button sx={{ fontSize: '12px', p: '13px 20px', borderRadius: '10px', boxShadow: 'none', color: theme.palette.secondary.main, bgcolor: theme.palette.primary.light }}
                                onClick={() => { navigate(`/products/${item.id}`) }}
                                variant="contained">Quick View</Button>
                        </Box>
                    }
                    {view === 'row' &&
                        <Box className={'actions'}
                            sx={{
                                position: "absolute", bottom: '0px', right: '10px', height: '100%', py: 1,
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column',
                            }}
                        >
                            <Button sx={{
                                minWidth: '35px',
                                height: '35px',
                                minHeight: 0,
                                fontSize: '10px', p: '1px 0px', borderRadius: '10px', boxShadow: 'none', color: theme.palette.secondary.main, bgcolor: theme.palette.primary.light
                            }}
                                onClick={() => { navigate(`/products/${item.id}`) }}
                                variant="contained">
                                <ArrowForwardIcon />
                            </Button>
                            <Button sx={{
                                minWidth: '35px',
                                height: '35px',
                                minHeight: 0,
                                fontSize: '10px', p: '1px 0px', borderRadius: '10px', boxShadow: 'none', bgcolor: theme.palette.secondary.main, color: theme.palette.primary.light
                            }}
                                onClick={() => { addToCart(item) }}
                                variant="contained">
                                <AddIcon />
                            </Button>
                        </Box>
                    }
                </Box>
            </Box >
        </>
    )
}
