import { Box, Grid, useTheme, Typography, Stack, Divider, alpha } from "@mui/material";
import logo from '../assets/logo.svg'

import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

const socialMediaIcons = [
    { id: 1, icon: <FacebookIcon sx={{ fontSize: '17px' }} />, path: '#' },
    { id: 2, icon: <InstagramIcon sx={{ fontSize: '17px' }} />, path: '#' },
    { id: 3, icon: <XIcon sx={{ fontSize: '17px' }} />, path: '#' },
    { id: 4, icon: <YouTubeIcon sx={{ fontSize: '17px' }} />, path: '#' },
]

export default function Footer() {
    const theme = useTheme()

    const Icons = socialMediaIcons.map((i) => (
        <a key={i.id} href={i.path}>
            <Box sx={{
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                cursor: 'pointer',
                color: theme.palette.primary.light, transition: '.4s all', width: '30px', height: '30px', borderRadius: '5px',
                '&:hover': {
                    color: theme.palette.secondary.dark,
                    bgcolor: theme.palette.primary.light,
                }
            }} >
                {i.icon}
            </Box>
        </a>
    ))
    return (
        <Box sx={{ width: '100%', p: '50px 0 30px', bgcolor: theme.palette.secondary.dark }}>
            <Box sx={{ width: '97%', mx: 'auto' }}>
                <Grid container spacing={2}>
                    <Grid size={{ lg: 3, md: 6, xs: 12 }} >
                        <img src={logo} alt="" />
                        <Typography mt={1} sx={{ color: theme.palette.primary.light }} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eius corporis rerum sunt. Obcaecati vel, id </Typography>
                        <Stack mt={2} direction={'row'} gap={2}>
                            <a href="#" style={{ width: '50%', maxWidth: '144px' }}>
                                <Stack sx={{ height: '60px', bgcolor: 'rgb(12, 42, 77);', borderRadius: '10px' }} direction={'row'} justifyContent={'center'} alignItems={'center'} gap={1}>
                                    <AndroidIcon sx={{ fontSize: '30px', color: 'green' }} />
                                    <Box>
                                        <Typography sx={{ fontSize: '9px', color: theme.palette.primary.light }} >Get it in</Typography>
                                        <Typography sx={{ fontSize: '12px', color: theme.palette.primary.light }} >Google Play</Typography>
                                    </Box>
                                </Stack>
                            </a>
                            <a href="#" style={{ width: '50%', maxWidth: '144px' }}>

                                <Stack sx={{ height: '60px', bgcolor: 'rgb(12, 42, 77);', borderRadius: '10px' }} direction={'row'} justifyContent={'center'} alignItems={'center'} gap={1}>
                                    <AppleIcon sx={{ fontSize: '30px', color: theme.palette.secondary.light }} />
                                    <Box>
                                        <Typography sx={{ fontSize: '9px', color: theme.palette.primary.light }} >Download on the</Typography>
                                        <Typography sx={{ fontSize: '12px', color: theme.palette.primary.light }} >App Store</Typography>
                                    </Box>
                                </Stack>
                            </a>
                        </Stack>
                    </Grid>
                    <Grid size={{ lg: 3, md: 6, xs: 12 }} >
                        <Stack gap={1.2}>
                            <Typography sx={{ fontSize: "20px", color: theme.palette.primary.light }}>About Us</Typography>
                            <a href="#">
                                <Typography sx={{
                                    fontSize: "14px", color: theme.palette.primary.light,
                                    '&:hover': {
                                        textDecoration: 'underLine'
                                    }
                                }}>Careers</Typography>
                            </a>
                            <a href="#">
                                <Typography sx={{
                                    fontSize: "14px", color: theme.palette.primary.light,
                                    '&:hover': {
                                        textDecoration: 'underLine'
                                    }
                                }}>Our Stores</Typography>
                            </a>
                            <a href="#">
                                <Typography sx={{
                                    fontSize: "14px", color: theme.palette.primary.light,
                                    '&:hover': {
                                        textDecoration: 'underLine'
                                    }
                                }}>Our Cares</Typography>
                            </a>
                            <a href="#">
                                <Typography sx={{
                                    fontSize: "14px", color: theme.palette.primary.light,
                                    '&:hover': {
                                        textDecoration: 'underLine'
                                    }
                                }}>Terms & Conditions</Typography>
                            </a>
                            <a href="#">
                                <Typography sx={{
                                    fontSize: "14px", color: theme.palette.primary.light,
                                    '&:hover': {
                                        textDecoration: 'underLine'
                                    }
                                }}>Privacy Policy</Typography>
                            </a>
                        </Stack>
                    </Grid>
                    <Grid size={{ lg: 3, md: 6, xs: 12 }} >
                        <Stack gap={1.2}>
                            <Typography sx={{ fontSize: "20px", color: theme.palette.primary.light }}>Customer Care</Typography>
                            <a href="#">
                                <Typography sx={{
                                    fontSize: "14px", color: theme.palette.primary.light,
                                    '&:hover': {
                                        textDecoration: 'underLine'
                                    }
                                }}>Help Center</Typography>
                            </a>
                            <a href="#">
                                <Typography sx={{
                                    fontSize: "14px", color: theme.palette.primary.light,
                                    '&:hover': {
                                        textDecoration: 'underLine'
                                    }
                                }}>Track Your Order</Typography>
                            </a>
                            <a href="#">
                                <Typography sx={{
                                    fontSize: "14px", color: theme.palette.primary.light,
                                    '&:hover': {
                                        textDecoration: 'underLine'
                                    }
                                }}>Corporate & Bulk Purchasing</Typography>
                            </a>
                            <a href="#">
                                <Typography sx={{
                                    fontSize: "14px", color: theme.palette.primary.light,
                                    '&:hover': {
                                        textDecoration: 'underLine'
                                    }
                                }}>Returns & Refunds
                                </Typography>
                            </a>

                        </Stack>
                    </Grid>
                    <Grid size={{ lg: 3, md: 6, xs: 12 }} >
                        <Stack gap={1.2}>
                            <Typography sx={{ fontSize: "20px", color: theme.palette.primary.light }}>Contact Us</Typography>


                            <Typography sx={{
                                fontSize: "14px", color: theme.palette.primary.light,

                            }}>70 Washington Square South, New York, NY 10012, United States</Typography>
                            <Typography sx={{
                                fontSize: "14px", color: theme.palette.primary.light,

                            }}>Email: EmailTest@gmail.com</Typography>
                            <Typography sx={{
                                fontSize: "14px", color: theme.palette.primary.light,

                            }}>Phone: +20 103 430 773</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '60%' }}>
                                {Icons}
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
                <Divider sx={{ width: '100%', my: 2, bgcolor: alpha(theme.palette.primary.main, .2) }} />

            </Box>
            <Box sx={{ color: 'white', textAlign: 'center' }}>
                <Typography variant="body2" >© Copyright 2025 fo2sh, All rights reserved.</Typography>
            </Box>
        </Box >
    )
}