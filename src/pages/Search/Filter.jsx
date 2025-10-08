import { AccordionActions, Box, Button, Checkbox, Container, Divider, FormControlLabel, Rating, Slider, TextField, useTheme } from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { searchProducts } from '../../features/products/productApisSlice';


function valuetext(value) {
    return `${value}°C`;
}

export default function Filter() {
    const dispatch = useDispatch()
    const theme = useTheme()

    const minValue = 0
    const maxValue = 200
    const [selectedFilters, setSelectedFilters] = React.useState({
        brands: [],
        rating: [],
        state: [],
        price: [minValue, maxValue],
    });

    const handleChangeSelectedBrands = (event, title) => {
        if (event) {
            var name = event.target.name
            var isChecked = event.target.checked;
        }
        setSelectedFilters((prev) => {
            if (title === "brands") {
                return {
                    ...prev,
                    brands: isChecked
                        ? [...prev.brands, name]
                        : prev.brands.filter((brand) => brand !== name),
                };
            } else if (title === "state") {
                return {
                    ...prev,
                    state: isChecked
                        ? [...prev.state, name]
                        : prev.state.filter((state) => state !== name),
                };
            } else if (title === 'rating') {
                return {
                    ...prev,
                    rating: isChecked
                        ? [...prev.rating, name]
                        : prev.rating.filter((r) => r !== name),
                }
            } else if (title === 'price') {
                return {
                    ...prev,
                    price: event.target.value,
                }
            }
            return prev;
        });
    };

    const CheckBoxComponent = (label, title, name = label) => {
        return (
            <FormControlLabel
                control={
                    <Checkbox
                        name={name}
                        sx={{
                            color: theme.palette.secondary.light,
                            '&.Mui-checked': {
                                color: theme.palette.secondary.main,
                            },
                            '&.Mui-focusVisible': {
                                outline: '2px solid blue',
                            },
                        }}
                        onChange={(e) => handleChangeSelectedBrands(e, title)}
                    />
                }
                label={label}
                sx={{
                    '& .MuiFormControlLabel-label': {
                        color: theme.palette.secondary.light,
                        fontSize: '14px',
                    },
                }}
            />
        );
    };
    const RatingComponent = (value) => {
        const title = 'rating'
        return (
            <FormControlLabel
                id={value}
                control={
                    <Checkbox
                        name={value}
                        sx={{
                            color: theme.palette.secondary.light,
                            '&.Mui-checked': {
                                color: theme.palette.secondary.main,
                            },
                            '&.Mui-focusVisible': {
                                outline: '2px solid blue',
                            },
                        }}
                        onChange={(e) => handleChangeSelectedBrands(e, title)}
                    />
                }
                label={
                    <Rating
                        sx={{ transform: 'translateY(3px)', fontSize: '18px' }}
                        name="read-only"
                        value={value}
                    />
                }
                sx={{
                    '& .MuiFormControlLabel-label': {
                        color: theme.palette.secondary.light,
                        fontSize: '14px',
                    },
                }}
            />
        );
    };
    const hendleSearchButton = () => {
        dispatch(searchProducts(selectedFilters))
    }





    return (
        <Box sx={{ minWidth: "15%", }}>
            <Box sx={{ width: "100%" }}>
                <Typography
                    sx={{ fontSize: '16px', my: 2, color: theme.palette.secondary.main }}
                    noWrap
                >Categories</Typography>
                <Typography sx={{ fontSize: '12px', mb: 1, color: theme.palette.secondary.light }}>Eye Makeup Preparations</Typography>
                <Typography sx={{ fontSize: '12px', mb: 1, color: theme.palette.secondary.light }}>Fragrance</Typography>
                <Typography sx={{ fontSize: '12px', mb: 1, color: theme.palette.secondary.light }}>Hair Preparations</Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box>
                <Typography sx={{ fontSize: '16px', mb: 1, color: theme.palette.secondary.main }}>Price Range</Typography>
                <Slider
                    sx={{
                        color: theme.palette.secondary.dark,
                        height: '3px',
                        '& .MuiSlider-thumb': {
                            width: 10,
                            height: 10,
                            bgcolor: theme.palette.secondary.dark,
                            border: '2px solid currentColor',
                        },
                        '& .MuiSlider-rail': {
                            opacity: 0.5,
                            bgcolor: theme.palette.secondary.dark,
                        },
                        '& .MuiSlider-track': {
                            border: 'none',
                            bgcolor: theme.palette.secondary.main
                        },
                    }}
                    min={minValue}
                    max={maxValue}
                    step={5}
                    value={selectedFilters.price}
                    onChange={(e) => handleChangeSelectedBrands(e, 'price')}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                />

                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'left' }}>
                    <Typography sx={{ fontSize: '16px', mb: 1, color: theme.palette.secondary.main }}>Brands</Typography>
                    {CheckBoxComponent("Mac", 'brands')}
                    {CheckBoxComponent("Karts", 'brands')}
                    {CheckBoxComponent("Baals", 'brands')}
                    {CheckBoxComponent("Bukks", 'brands')}
                    {CheckBoxComponent("Luasis", 'brands')}
                </Box>
                <Divider sx={{ my: 2 }} />

                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'left' }}>
                    {CheckBoxComponent("OnSale", 'state')}
                    {CheckBoxComponent("inStock", 'state')}
                    {CheckBoxComponent("featured", 'state')}
                </Box>
                <Divider sx={{ my: 2 }} />

                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    {RatingComponent(5)}
                    {RatingComponent(4)}
                    {RatingComponent(3)}
                    {RatingComponent(2)}
                    {RatingComponent(1)}
                </Box>
                <Divider sx={{ my: 2 }} />
                <Container sx={{ my: 2, textAlign: 'center' }}>
                    <Button
                        sx={{ fontSize: '14px', width: '100%', p: '10px 0', borderRadius: '10px', boxShadow: 'none', bgcolor: theme.palette.secondary.main, color: theme.palette.primary.light }}
                        variant="contained"
                        onClick={hendleSearchButton}
                    >Search</Button>
                </Container>
            </Box>
        </Box >
    )
}
