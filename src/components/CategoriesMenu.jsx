import * as React from 'react';
import { Box, Button, Grid, Stack, Typography, useTheme } from '@mui/material';


import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import HomeIcon from '@mui/icons-material/Home';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
export default function CategoriesMenu() {
    const theme = useTheme()
    const [openCategories, setOpenCategories] = React.useState(false)

    function handleOpenCategoriesMenu() {

        setOpenCategories(!openCategories)
        setActiveMenu(null)

    }

    const [activeMenu, setActiveMenu] = React.useState(null)
    function handelSubMenu(title) {
        setActiveMenu(title)
    }
    function resetSubMenu() {
        setActiveMenu(null)
    }


    const categoriesList = [
        { id: '1', title: 'Men', icon: <ManIcon sx={{ fontSize: '20px' }} />, arrow: <KeyboardArrowRightIcon sx={{ color: theme.palette.primary.dark }} />, path: '#' },
        { id: '2', title: 'Womans', icon: <WomanIcon sx={{ fontSize: '20px' }} />, arrow: <KeyboardArrowRightIcon sx={{ color: theme.palette.primary.dark }} />, path: '#' },
        { id: '3', title: 'Electronics', icon: <ElectricBoltIcon sx={{ fontSize: '20px' }} />, arrow: <KeyboardArrowRightIcon sx={{ color: theme.palette.primary.dark }} />, path: '#' },
        { id: '4', title: 'Home & Garden', icon: <HomeIcon sx={{ fontSize: '20px' }} />, path: '#' },
        { id: '5', title: 'Health & Beauty', icon: <AutoAwesomeIcon sx={{ fontSize: '20px' }} />, path: '#' },
    ]
    const categories = categoriesList.map((cat) => {
        return (
            <Box
                key={cat.id}
                component="a"
                href={cat.path}
                sx={{
                    p: '0 13px',
                    color: theme.palette.secondary.main,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textDecoration: 'none',
                    height: '40px',
                    transition: '.3s all',

                    '&:hover ': {
                        bgcolor: theme.palette.primary.main
                    },
                }}
                onMouseEnter={() => {
                    handelSubMenu(cat.id)
                }
                }
            >
                <Typography sx={{ fontSize: '13px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    {cat.icon} {cat.title}
                </Typography>
                {cat.arrow}
            </Box >
        )
    })
    return (
        <Box
            onMouseLeave={() => {
                resetSubMenu()
            }}
            sx={{
                display: { md: 'block', xs: 'none' },
                position: 'absolute',
                minWidth: '900px',
                height: '20px',
                mt: '10px'
            }}>
            <Button variant="contained"
                onClick={() => {
                    handleOpenCategoriesMenu()
                }}
                sx={{
                    width: '300px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    boxShadow: 'none',
                    bgcolor: theme.palette.primary.main,
                    textTransform: 'none',
                    p: '8px 16px',
                    '&:hover': {
                        bgcolor: theme.palette.primary.main,
                        boxShadow: 'none',
                    },
                }}
            >
                <Box sx={{ display: 'flex', gap: '10px' }}>
                    <MenuIcon /> Categories
                </Box>
                <KeyboardArrowDownIcon sx={{ color: theme.palette.primary.dark, transition: 'all .2s', transform: openCategories ? 'rotate(0deg)' : 'rotate(-90deg)', }} />
            </Button>
            <Stack sx={{
                width: '300px',
                position: 'absolute',
                top: '55px',
                left: '0',
                overflowY: 'hidden',
                borderRadius: '5px',
                boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
                transition: 'max-height 0.3s ease',
                maxHeight: openCategories ? '500px' : '0px', // بدل auto
                bgcolor: theme.palette.primary.light
            }}
                direction={'column'}>
                <Stack sx={{ p: '10px 0', }} spacing={.5} >
                    {categories}
                </Stack>
            </Stack>
            {activeMenu && (

                <Box
                    className="submenu"
                    sx={{
                        display: 'block',
                        position: 'absolute',
                        top: '55px',
                        left: '33.4%',
                        bgcolor: 'white',
                        boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
                        borderRadius: '5px',
                        zIndex: '500'

                    }}
                >
                    {activeMenu === '1' ? (
                        <Box sx={{
                            minWidth: '550px',
                            height: 'auto',
                            flexGrow: 1,
                            p: '20px'
                        }}>
                            <Grid container spacing={1}>
                                <Grid size={3}>
                                    <Stack spacing={2}>
                                        <Typography sx={{ fontSize: '18px', fontWeight: '800' }} >
                                            Man Clothes
                                        </Typography>

                                        <a href='#' style={{ color: theme.palette.secondary.main }}>
                                            <Typography >
                                                T-shirts
                                            </Typography>
                                        </a>
                                        <a href='#' style={{ color: theme.palette.secondary.main }}>
                                            <Typography >
                                                Pants
                                            </Typography>
                                        </a>
                                        <a href='#' style={{ color: theme.palette.secondary.main }}>
                                            <Typography >
                                                Under Wear
                                            </Typography>
                                        </a>
                                        <a href='#' style={{ color: theme.palette.secondary.main }}>
                                            <Typography >
                                                Hoodies
                                            </Typography>
                                        </a>
                                    </Stack>
                                </Grid>
                                <Grid size={3}>
                                    <Stack spacing={2}>
                                        <Typography sx={{ fontSize: '18px', fontWeight: '800' }} >
                                            Man Clothes
                                        </Typography>

                                        <a href='#' style={{ color: theme.palette.secondary.main }}>
                                            <Typography >
                                                T-shirts
                                            </Typography>
                                        </a>
                                        <a href='#' style={{ color: theme.palette.secondary.main }}>
                                            <Typography >
                                                Pants
                                            </Typography>
                                        </a>
                                        <a href='#' style={{ color: theme.palette.secondary.main }}>
                                            <Typography >
                                                Under Wear
                                            </Typography>
                                        </a>
                                        <a href='#' style={{ color: theme.palette.secondary.main }}>
                                            <Typography >
                                                Hoodies
                                            </Typography>
                                        </a>
                                    </Stack>
                                </Grid>
                                <Grid size={3}>
                                    <Stack spacing={2}>
                                        <Typography sx={{ fontSize: '18px', fontWeight: '800' }} >
                                            Man Clothes
                                        </Typography>

                                        <a href='#' style={{ color: theme.palette.secondary.main }}>
                                            <Typography >
                                                T-shirts
                                            </Typography>
                                        </a>
                                        <a href='#' style={{ color: theme.palette.secondary.main }}>
                                            <Typography >
                                                Pants
                                            </Typography>
                                        </a>
                                        <a href='#' style={{ color: theme.palette.secondary.main }}>
                                            <Typography >
                                                Under Wear
                                            </Typography>
                                        </a>
                                        <a href='#' style={{ color: theme.palette.secondary.main }}>
                                            <Typography >
                                                Hoodies
                                            </Typography>
                                        </a>
                                    </Stack>
                                </Grid>
                                <Grid size={3}>
                                    <Stack spacing={2}>
                                        <Typography sx={{ fontSize: '18px', fontWeight: '800' }} >
                                            Man Clothes
                                        </Typography>

                                        <a href='#' style={{ color: theme.palette.secondary.main }}>
                                            <Typography >
                                                T-shirts
                                            </Typography>
                                        </a>
                                        <a href='#' style={{ color: theme.palette.secondary.main }}>
                                            <Typography >
                                                Pants
                                            </Typography>
                                        </a>
                                        <a href='#' style={{ color: theme.palette.secondary.main }}>
                                            <Typography >
                                                Under Wear
                                            </Typography>
                                        </a>
                                        <a href='#' style={{ color: theme.palette.secondary.main }}>
                                            <Typography >
                                                Hoodies
                                            </Typography>
                                        </a>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Box>

                    ) : activeMenu === '2' ? (
                        <Box sx={{
                            minWidth: '550px',
                            height: 'auto',
                            flexGrow: 1,
                            p: '20px'
                        }}>
                            <Grid container spacing={1}>
                                <Grid size={4}>
                                    <Stack spacing={2}>
                                        <Typography sx={{ fontSize: '18px', fontWeight: '800' }} >
                                            Woman Clothes
                                        </Typography>

                                        <a href='#' style={{ color: theme.palette.secondary.main }}>
                                            <Typography >
                                                T-shirts
                                            </Typography>
                                        </a>
                                        <a href='#' style={{ color: theme.palette.secondary.main }}>
                                            <Typography >
                                                Pants
                                            </Typography>
                                        </a>
                                        <a href='#' style={{ color: theme.palette.secondary.main }}>
                                            <Typography >
                                                Under Wear
                                            </Typography>
                                        </a>
                                        <a href='#' style={{ color: theme.palette.secondary.main }}>
                                            <Typography >
                                                Hoodies
                                            </Typography>
                                        </a>
                                    </Stack>
                                </Grid>
                                <Grid size={4}>
                                    <Stack spacing={2}>
                                        <Typography sx={{ fontSize: '18px', fontWeight: '800' }} >
                                            Woman Clothes
                                        </Typography>

                                        <a href='#' style={{ color: theme.palette.secondary.main }}>
                                            <Typography >
                                                T-shirts
                                            </Typography>
                                        </a>
                                        <a href='#' style={{ color: theme.palette.secondary.main }}>
                                            <Typography >
                                                Pants
                                            </Typography>
                                        </a>
                                        <a href='#' style={{ color: theme.palette.secondary.main }}>
                                            <Typography >
                                                Under Wear
                                            </Typography>
                                        </a>
                                        <a href='#' style={{ color: theme.palette.secondary.main }}>
                                            <Typography >
                                                Hoodies
                                            </Typography>
                                        </a>
                                    </Stack>
                                </Grid>
                                <Grid size={4}>
                                    <Stack spacing={2}>
                                        <Typography sx={{ fontSize: '18px', fontWeight: '800' }} >
                                            Woman Clothes
                                        </Typography>

                                        <a href='#' style={{ color: theme.palette.secondary.main }}>
                                            <Typography >
                                                T-shirts
                                            </Typography>
                                        </a>
                                        <a href='#' style={{ color: theme.palette.secondary.main }}>
                                            <Typography >
                                                Pants
                                            </Typography>
                                        </a>
                                        <a href='#' style={{ color: theme.palette.secondary.main }}>
                                            <Typography >
                                                Under Wear
                                            </Typography>
                                        </a>
                                        <a href='#' style={{ color: theme.palette.secondary.main }}>
                                            <Typography >
                                                Hoodies
                                            </Typography>
                                        </a>
                                    </Stack>
                                </Grid>

                            </Grid>
                        </Box>
                    ) : (<></>)}
                </Box>
            )
            }

        </Box >
    );
}
