import { Box } from '@mui/material'
import ProductCard from '../../components/ProductCard'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { forYou } from '../../features/products/productApisSlice'

export default function ForYou() {
    const forYouItems = useSelector((state) => state.items.forYou)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(forYou())
    }, [forYou])
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'start', gap: 2 }}>
            {forYouItems.map((p, i) => (
                <Box sx={{ flexGrow: 1 }} key={i}>
                    <ProductCard item={p} />
                </Box>
            ))
            }
        </Box >
    )
}
