import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Fade from '@mui/material/Fade';
import { alpha, useTheme } from "@mui/material/styles";


// @ts-ignore
import logo from "../assets/logo2.svg";
import { Divider, Drawer, InputAdornment, InputBase, List, ListItem, ListItemButton, ListItemText, Paper, Stack, TextField } from "@mui/material";

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import XIcon from '@mui/icons-material/X';


import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CategoriesMenu from "./CategoriesMenu";

import { useCart } from "../context/useCart";
function Navigation() {
    const theme = useTheme();
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openMenu, setOpenMenu] = React.useState(null);
    const { numberOfItemsInCart, setNumberOfItemsInCart } = useCart();

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalItems = storedCart.reduce((sum, item) => sum + (item.quantity || 1), 0);
        setNumberOfItemsInCart(totalItems);
    }, []);
    const handleClick = (event, menuName) => {
        setAnchorEl(event.currentTarget);
        setOpenMenu(menuName);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setOpenMenu(null);
    };

    const [SearchValue, setSearchValue] = useState('')
    const [openMenuPhone, setOpenMenuPhone] = useState(false);
    const [openSearchBar, setOpenSearchBar] = useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpenMenuPhone(newOpen);
    };
    const navigationLinks = [
        { 'title': 'Home', 'path': '/' },
        { 'title': 'Best Seller', 'path': '/search/bestSeller' },
        { 'title': 'New', 'path': '/search/new' },
        { 'title': 'Contact Us', 'path': '/newest' },
        { 'title': 'FAQ', 'path': '/newest' },
        { 'title': 'Admin Dashboard', 'path': '/newest' },
    ]
    const drawerList = (
        <Box sx={{ minWidth: '80vw', mr: '20vw' }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {navigationLinks.map((text) => (
                    <ListItem onClick={() => { navigate(text.path) }} key={text.title} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={text.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const navigationLinksList = (
        navigationLinks.map((link) => {
            return (
                <Typography key={link.title} sx={{ height: '100%', p: '5px 10px', color: theme.palette.secondary.main, transition: 'all .4s', fontWeight: '400', fontSize: '16px', cursor: 'pointer', '&:hover': { color: alpha(theme.palette.secondary.light, .6) } }} onClick={() => { navigate(link.path) }} >{link.title}</Typography>
            )
        })
    )
    const searchBarMenuHandle = (newOpen) => () => {
        setOpenSearchBar(newOpen);
    };
    const handleSearchInput = (e) => {
        console.log(e.target.value);
        setSearchValue(e.target.value)
    }
    return (
        <>
            <Drawer sx={{}} anchor={'top'} open={openSearchBar} onClose={searchBarMenuHandle(false)}>
                <Box sx={{ position: 'relative', height: '100vh', p: '25px' }}>
                    <CloseIcon sx={{ position: 'absolute', right: '25px', top: '25px', cursor: 'pointer', fontSize: '30px' }} onClick={
                        searchBarMenuHandle(false)
                    } />
                    <Box
                    >
                        <Typography sx={{ fontSize: '18px', color: theme.palette.secondary.light }} >Search to Bazaar</Typography>
                        <Box
                            sx={{
                                mt: '30px', height: '40px', width: '100%',
                                display: 'flex', justifyContent: 'center'
                            }}>
                            <Box

                                component="form"
                                sx={{

                                    border: '2px solid', borderColor: theme.palette.secondary.main, borderRadius: '10px',
                                    display: 'flex', alignItems: 'center',
                                    width: '100%'
                                }}
                            >
                                <Box sx={{ p: '10px' }} aria-label="menu">
                                    <SearchOutlinedIcon />
                                </Box>
                                <InputBase
                                    value={SearchValue}
                                    onChange={(e) => { handleSearchInput(e) }}
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder="Search for...."
                                    inputProps={{ 'aria-label': 'search google maps' }}
                                />
                                <Box
                                    sx={{
                                        bgcolor: theme.palette.secondary.main,
                                        width: '20%',
                                        height: '102%',
                                        borderTopRightRadius: '5px',
                                        borderBottomRightRadius: '5px',
                                        color: theme.palette.primary.light,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => { SearchValue === '' ? '' : navigate(`/search/${SearchValue}`); setOpenSearchBar(false) }} >
                                    Search
                                </Box>
                            </Box>


                        </Box>
                    </Box>
                </Box>
            </Drawer>
            <Drawer sx={{ position: 'relative', width: '100vw' }} open={openMenuPhone} onClose={toggleDrawer(false)}>
                <CloseIcon sx={{ position: 'absolute', right: '3vw', top: '3vh', cursor: 'pointer', fontSize: '30px' }} onClick={
                    toggleDrawer(false)
                } />
                {drawerList}
            </Drawer>
            <Box sx={{ bgcolor: theme.palette.secondary.main, minHeight: '44px' }} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Stack sx={{ width: '97%' }} justifyContent={'space-between'} flexDirection={'row'}>
                    <Box sx={{ display: 'flex' }} display={'flex'} justifyContent={'start'} alignItems={'center'} >
                        <Box sx={{ mr: '5px', p: '4px 15px', borderRadius: '20px', bgcolor: theme.palette.secondary.dark, }}>
                            <Typography sx={{ fontSize: '12px', color: theme.palette.primary.main, fontWeight: 'bold' }}>HOT</Typography>
                        </Box>
                        <Typography sx={{ fontSize: '12px', color: theme.palette.primary.main }} color="initial">Free Express Shipping</Typography>
                    </Box>
                    <Box sx={{ color: theme.palette.primary.main, display: 'flex', gap: '5px' }} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <Button
                            id="lang-menu"
                            aria-haspopup="true"
                            onClick={(e) => handleClick(e, "lang")}
                            sx={{
                                "&:hover": {
                                    backgroundColor: "transparent",
                                }
                            }}
                        >
                            EN <KeyboardArrowDownIcon />
                        </Button>
                        <Menu
                            id="lang-menu"
                            slotProps={{
                                list: {
                                    'aria-labelledby': 'lang-button',
                                },
                            }}
                            slots={{ transition: Fade }}
                            anchorEl={anchorEl}
                            open={openMenu === "lang"}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>English</MenuItem>
                            <MenuItem onClick={handleClose}>Arabic</MenuItem>
                        </Menu>
                        <XIcon sx={{ fontSize: '18px', cursor: 'pointer' }} />
                        <FacebookIcon sx={{ fontSize: '18px', cursor: 'pointer' }} />
                        <InstagramIcon sx={{ fontSize: '18px', cursor: 'pointer' }} />
                    </Box>
                </Stack >
            </Box >
            <AppBar
                position="sticky"
                sx={{
                    zIndex: 60,
                    py: 1,
                    transition: "transform .4s ease-in-out",
                    willChange: "transform",
                    backgroundColor: theme.palette.primary.light,
                    boxShadow: 0

                }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ display: 'flex', justifyContent: "space-between" }}>
                        {/* logo desktop  */}
                        <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1, cursor: 'pointer' }}
                            onClick={() => { navigate(`/`) }}>
                            <img src={logo} alt="logo" />
                        </Box>
                        {/*************************** logo desktop **************************/}
                        {/* phone links menu icon */}
                        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                            <Box onClick={toggleDrawer(true)}
                                sx={{
                                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                                    height: '45px', minWidth: '40px',
                                    cursor: 'pointer', transition: 'all .4s',
                                    borderRadius: '7px',

                                    '&:hover': {
                                        bgcolor: alpha(theme.palette.secondary.light, .08),
                                        color: theme.palette.secondary.light
                                    }
                                }}><MenuIcon /></Box>


                        </Box>
                        {/*************************** phone links menu icon **************************/}


                        {/* logo phone  */}
                        <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1, justifyContent: "left", flexGrow: 1 }}>
                            <img src={logo} alt="logo" />
                        </Box>
                        {/*************************** logo phone **************************/}

                        {/* navigation links */}
                        <Box sx={{ display: { xs: "none", md: "flex" }, gap: "2%", justifyContent: 'center', width: '69%', height: '100%' }}>
                            {navigationLinksList}
                        </Box>
                        {/*************************** navigation links **************************/}
                        <Box sx={{ display: { width: '8%', xs: "none", md: "flex" }, justifyContent: 'end', gap: "10px", color: alpha(theme.palette.secondary.light, .6) }}>
                            <Box
                                onClick={() => { navigate(`/login`) }}
                                sx={{
                                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                                    height: '45px', minWidth: '40px',
                                    cursor: 'pointer', transition: 'all .4s',
                                    borderRadius: '7px',
                                    '&:hover': {
                                        bgcolor: alpha(theme.palette.secondary.light, .08),
                                        color: theme.palette.secondary.light
                                    }
                                }}><AccountCircleOutlinedIcon /></Box>
                            <Box
                                onClick={() => { navigate(`/cart`) }}
                                sx={{
                                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                                    height: '45px', minWidth: '40px',
                                    cursor: 'pointer', transition: 'all .4s',
                                    borderRadius: '7px',
                                    '&:hover': {
                                        bgcolor: alpha(theme.palette.secondary.light, .08),
                                        color: theme.palette.secondary.light
                                    },

                                }}>
                                <Box
                                    onClick={() => { navigate(`/cart`) }}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: '18px',
                                        width: '18px',
                                        position: 'absolute',
                                        top: '5px',
                                        right: '0',
                                        borderRadius: '50%',
                                        bgcolor: theme.palette.secondary.main,
                                        color: theme.palette.primary.main,
                                        fontSize: '13px',
                                    }}>
                                    {numberOfItemsInCart}
                                </Box>
                                <ShoppingCartOutlinedIcon /></Box>
                        </Box>
                        <Box sx={{ display: { width: '8%', xs: "flex", md: "none" }, transition: 'all .4s', justifyContent: 'end', gap: "10px", color: alpha(theme.palette.secondary.light, .6), '&:hover': { color: theme.palette.secondary.light } }}>
                            <Box
                                onClick={searchBarMenuHandle(true)}
                                sx={{
                                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                                    height: '45px', minWidth: '40px',
                                    cursor: 'pointer', transition: 'all .4s',
                                    borderRadius: '7px',
                                    '&:hover': {
                                        bgcolor: alpha(theme.palette.secondary.light, .08),
                                        color: theme.palette.secondary.light
                                    }
                                }}><SearchOutlinedIcon /></Box>
                            <Box
                                onClick={() => { navigate(`/login`) }}
                                sx={{
                                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                                    height: '45px', minWidth: '40px',
                                    cursor: 'pointer', transition: 'all .4s',
                                    borderRadius: '7px',
                                    '&:hover': {
                                        bgcolor: alpha(theme.palette.secondary.light, .08),
                                        color: theme.palette.secondary.light
                                    }
                                }}
                            ><AccountCircleOutlinedIcon /></Box>
                            <Box
                                onClick={() => { navigate(`/cart`) }}

                                sx={{
                                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                                    height: '45px', minWidth: '40px',
                                    cursor: 'pointer', transition: 'all .4s',
                                    borderRadius: '7px',
                                    '&:hover': {
                                        bgcolor: alpha(theme.palette.secondary.light, .08),
                                        color: theme.palette.secondary.light
                                    }
                                }}><ShoppingCartOutlinedIcon /></Box>
                        </Box>


                    </Toolbar>
                </Container >
            </AppBar >
            <Box sx={{ zIndex: 50, height: { md: '55px', xs: '0' }, width: '97%', m: '0 auto ', position: 'relative' }}>
                {<CategoriesMenu />}
                <Box sx={{

                    display: { md: 'block', xs: 'none' },
                    position: 'absolute', right: '0', bottom: '4px',
                    width: { xl: '78%', lg: '70%', md: '65%' }, height: '41px'
                }}>
                    <Paper
                        component="form"
                        sx={{
                            bgcolor: theme.palette.primary.main,
                            height: '41px', width: '100%', boxShadow: 'none',
                            display: 'flex', alignItems: 'center',

                            '&:hover': {
                                border: '2px solid',
                                borderColor: theme.palette.secondary.main
                            }
                        }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1, }}
                            placeholder="Search for...."
                            value={SearchValue}
                            onChange={(e) => { handleSearchInput(e) }}
                        />

                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchOutlinedIcon sx={{ color: theme.palette.primary.dark }} onClick={() => { SearchValue === '' ? '' : navigate(`/search/${SearchValue}`) }} />
                        </IconButton>
                    </Paper>
                </Box>

            </Box >

        </>
    );
}
export default Navigation;
