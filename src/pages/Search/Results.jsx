import { Box } from '@mui/material';
import ProductCard from '../../components/ProductCard';
import React from 'react'
import { useSelector } from 'react-redux'

export default function Results({ view }) {
    const targetProducts = useSelector((state) => state.items.items)
    return (
        <>
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: view === 'row' ? 'column' : 'row', flexWrap: 'wrap', justifyContent: 'start', gap: 2 }}>
                {targetProducts.map((p, i) => (
                    <Box sx={{ flexGrow: 1 }} key={i}>
                        <ProductCard item={p} view={view} />
                    </Box>
                ))
                }
            </Box >
        </>
    )
}
