import { alpha, Box, FormControl, InputLabel, MenuItem, Select, Stack, Typography, useTheme } from '@mui/material'
import { useEffect, useState } from 'react';
import Filter from './Filter';
// import React, { use } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProduct } from "../../features/products/productApisSlice";

import AppsIcon from '@mui/icons-material/Apps';
import TableRowsIcon from '@mui/icons-material/TableRows';
import Results from './Results';

export default function Search() {
    const theme = useTheme()
    const { search } = useParams();
    const [view, setView] = useState('column')


    const products = useSelector((state) => state.items.items);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProduct())
    }, [])

    const [sort, setSort] = useState('');

    const handleChange = (event) => {
        setSort(event.target.value);
    };
    return (
        <Box>
            <Box sx={{ mt: 5, mx: 'auto', width: "97%" }} >
                <Stack justifyContent={'space-between'} direction={'row'} >
                    <Box>
                        <Typography sx={{ fontSize: '18px' }}>Searching for "{search}"</Typography>
                        <Typography sx={{ fontSize: '14px', color: theme.palette.secondary.light }}>{products.length} Results found </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography sx={{ fontSize: '16px', display: 'inline', mr: 1, color: theme.palette.secondary.light }}>Sort by:</Typography>
                        <FormControl sx={{ m: 1, minWidth: 100, }} size="small">
                            <Select
                                value={sort}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}

                                sx={{

                                    backgroundColor: "white",
                                    borderRadius: "10px",
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: theme.palette.secondary.light
                                    },

                                    "&:hover .MuiOutlinedInput-notchedOutline": {
                                        borderColor: theme.palette.secondary.main,
                                    },


                                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                        borderColor: theme.palette.secondary.dark,

                                    },


                                    "& .MuiSelect-select": {
                                        color: theme.palette.secondary.light
                                    },
                                }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={'date'}>Date</MenuItem>
                                <MenuItem value={'llow'}>Price Low To High</MenuItem>
                                <MenuItem value={'high'}>Price High To Low</MenuItem>
                            </Select>
                        </FormControl>
                        <Typography sx={{ fontSize: '16px', display: 'inline', mr: 1, color: theme.palette.secondary.light }}>View:</Typography>
                        <AppsIcon sx={{
                            mr: 1, cursor: 'pointer', color: view === 'column' ? theme.palette.secondary.dark : alpha(theme.palette.secondary.light, .7)
                        }} onClick={() => setView('column')} />
                        <TableRowsIcon sx={{
                            cursor: 'pointer', color: view === 'row' ? theme.palette.secondary.dark : alpha(theme.palette.secondary.light, .7)
                        }} onClick={() => setView('row')} />
                    </Box>
                </Stack>
                <Box sx={{ display: 'flex', mt: 3, mb: 5, gap: 2 }}>

                    <Filter />

                    <Results view={view} />
                </Box>
            </Box>

            {/* <Filter />
            <Results /> */}
        </Box>
    )
}
