import React, { useEffect } from 'react'
import { getProduct } from "../../features/products/productApisSlice";
import { useDispatch, useSelector } from 'react-redux';
import { Box, Paper, Typography, useTheme } from '@mui/material';
import ProductCard from '../../components/ProductCard';
import propic1 from '../../assets/propic.webp';
import propic2 from '../../assets/propic1.webp';
import propic3 from '../../assets/propic4.webp';

export default function Description({ product }) {
    const theme = useTheme()
    const products = useSelector((state) => state.items.items);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProduct())
    }, [])
    return (
        <Box>
            <Box >
                <Typography sx={{ my: 2, fontSize: '20px', fontWeight: 'bold' }}>Specification</Typography>
                <Box>
                    <Typography sx={{ fontSize: '13px', color: theme.palette.secondary.light }}>Brand: {product.category}</Typography>
                    <Typography sx={{ fontSize: '13px', color: theme.palette.secondary.light }}>Model: {product.id}</Typography>
                    <Typography sx={{ fontSize: '13px', color: theme.palette.secondary.light }}>{product.description}</Typography>
                    <Typography sx={{ fontSize: '13px', color: theme.palette.secondary.light }}>Made In China</Typography>
                </Box>
            </Box>
            <Box>
                <Typography sx={{ my: 2, fontSize: '20px', fontWeight: 'bold' }}>Also Available At</Typography>
                <Box sx={{ display: 'flex', gap: 3, my: 3 }}>
                    <Paper sx={{ bgcolor: theme.palette.primary.main, width: '200px', height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', borderRadius: '10px', boxShadow: 0 }}>
                        <Box
                            component="img"
                            src={propic1}
                            loading="lazy"
                            alt={product.name}
                            sx={{

                                objectFit: "contain",
                                width: '50px'
                                , height: '50px'
                            }}
                        />
                        <Typography sx={{ mb: 1, fontSize: '14px', }}>Tech Freind</Typography>
                    </Paper>
                    <Paper sx={{ bgcolor: theme.palette.primary.main, width: '200px', height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', borderRadius: '10px', boxShadow: 0 }}>
                        <Box
                            component="img"
                            src={propic2}
                            loading="lazy"
                            alt={product.name}
                            sx={{

                                objectFit: "contain",
                                width: '50px'
                                , height: '50px'
                            }}
                        />
                        <Typography sx={{ mb: 1, fontSize: '14px', }}>Tech Freind</Typography>
                    </Paper>
                    <Paper sx={{ bgcolor: theme.palette.primary.main, width: '200px', height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', borderRadius: '10px', boxShadow: 0 }}>
                        <Box
                            component="img"
                            src={propic3}
                            loading="lazy"
                            alt={product.name}
                            sx={{

                                objectFit: "contain",
                                width: '50px'
                                , height: '50px'
                            }}
                        />
                        <Typography sx={{ mb: 1, fontSize: '14px', }}>Tech Freind</Typography>
                    </Paper>
                </Box>


            </Box>
            <Box >
                <Typography sx={{ my: 2, fontSize: '20px', fontWeight: 'bold' }}>Realted Products</Typography>

                <Box sx={{ mx: 'auto', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'start', gap: 2 }}>
                    {products.slice(0, 4).map((p, i) => (
                        <Box sx={{ flexGrow: 1 }} key={i}>
                            <ProductCard item={p} />
                        </Box>
                    ))
                    }
                </Box>
            </Box>
        </Box >
    )
}
