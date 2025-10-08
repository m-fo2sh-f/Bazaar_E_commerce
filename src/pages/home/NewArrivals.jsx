import React, { useEffect } from 'react'
import { alpha, Box, Button, Container, Stack, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { newArrivals } from '../../features/products/productApisSlice';
import ProductCard from '../../components/productCard';


import shop1 from '../../assets/propic4.webp'
import shop2 from '../../assets/propic5.webp'
import shop3 from '../../assets/propic6.webp'
import shop4 from '../../assets/propic7.webp'

export default function NewArrivals() {
    const theme = useTheme();

    const dispatch = useDispatch()
    const newArrival = useSelector((state) => state.items.newArrivals)
    const products = useSelector((state) => state.items.items)



    useEffect(() => {
        dispatch(newArrivals())

    }, [dispatch])


    return (

        <Box sx={{ width: '100%', overflow: 'scorll' }}>
            <Box sx={{
                width: '100%', display: 'flex', justifyContent: 'start', alignItems: "center", overflowX: 'scroll',
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                    display: "none",
                },
                gap: 2
            }}>
                {newArrival.map((p, i) => (
                    <Box key={i}>
                        <ProductCard item={p} />
                    </Box>
                ))
                }
            </Box>
            <Stack
                direction={"row"}
                spacing={{ md: 2, xs: 0 }}
                sx={{
                    width: '100%',
                    minHeight: "900px",
                    mt: "30px",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Box sx={{ minHeight: "100%", minWidth: '270px', display: { md: 'block', xs: 'none' } }}>
                    <Box
                        sx={{
                            width: "100%",
                            height: "auto",
                            position: "sticky",
                            top: '100px',
                            borderRadius: '10px'
                        }}
                    >
                        <Box sx={{ bgcolor: theme.palette.primary.main, borderRadius: '10px', width: '100%', p: 2 }} >
                            <Box>
                                <Typography variant="h6" color="initial">Shops</Typography>
                                <Box mt={2}>
                                    <Container sx={{ cursor: 'pointer', bgcolor: alpha(theme.palette.primary.dark, .2), mb: 2, height: '50px', width: '100%', p: '10px 0', borderRadius: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                        <img src={shop1} alt="" style={{ width: '28px', height: '28px' }} />
                                        <Typography sx={{ fontWeight: 'bold', width: '100%' }} >Lorem, ipsum dolor.</Typography>
                                    </Container>
                                    <Container sx={{ cursor: 'pointer', bgcolor: alpha(theme.palette.primary.dark, .2), mb: 2, height: '50px', width: '100%', p: '10px 0', borderRadius: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                        <img src={shop2} alt="" style={{ width: '28px', height: '28px' }} />
                                        <Typography sx={{ fontWeight: 'bold', width: '100%' }} >Lorem, ipsum dolor.</Typography>
                                    </Container>
                                    <Container sx={{ cursor: 'pointer', bgcolor: alpha(theme.palette.primary.dark, .2), mb: 2, height: '50px', width: '100%', p: '10px 0', borderRadius: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                        <img src={shop3} alt="" style={{ width: '28px', height: '28px' }} />
                                        <Typography sx={{ fontWeight: 'bold', width: '100%' }} >Lorem, ipsum dolor.</Typography>
                                    </Container>
                                    <Container sx={{ cursor: 'pointer', bgcolor: alpha(theme.palette.primary.dark, .2), mb: 2, height: '50px', width: '100%', p: '10px 0', borderRadius: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                        <img src={shop4} alt="" style={{ width: '28px', height: '28px' }} />
                                        <Typography sx={{ fontWeight: 'bold', width: '100%' }} >Lorem, ipsum dolor.</Typography>
                                    </Container>

                                </Box>
                                <Container sx={{ fontWeight: 'bold', cursor: 'pointer', mt: '100px', borderRadius: '15px', bgcolor: theme.palette.primary.light, py: '10px', textAlign: 'center' }}>View All Shops</Container>
                            </Box>
                            <Box></Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: "100%", flexGrow: 1, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'space-between' }}>
                        {products.slice(0, 6).map((p, i) => (
                            <Box sx={{ flexGrow: 1 }} key={i}>
                                <ProductCard item={p} />
                            </Box>
                        ))
                        }
                    </Box>

                </Box>
            </Stack >

        </Box >
    )
}
