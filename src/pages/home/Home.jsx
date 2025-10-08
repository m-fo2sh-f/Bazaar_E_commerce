import { Box, Button, Container, Grid, Stack, Typography, useTheme } from "@mui/material";

import cover1 from '../../assets/accessories.webp'
import cover2 from '../../assets/earphones-1.webp'
import cover3 from '../../assets/headphone-4.webp'
import cover4 from '../../assets/turn-tables.webp'
import cover5 from '../../assets/speaker-6.webp'
import promo1 from '../../assets/promo-1.webp'
import promo2 from '../../assets/promo-2.webp'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import GppGoodIcon from '@mui/icons-material/GppGood';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

import ForYou from './ForYou'
import NewArrivals from "./NewArrivals";
import ManualSlider from "./ManualSlider";
import AutoSlider from './AutoSlider';
import BlogCard from "./BlogCard";
import SignUpModal from "./SignUpModal";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const theme = useTheme()
    const navigate = useNavigate()
    return (
        <Box >
            <Box>
                <SignUpModal modalState={true} />
            </Box>
            <Box sx={{ bgcolor: theme.palette.primary.main, width: '97%', height: '75vh', m: ' 30px auto', borderRadius: '10px', overflow: 'hidden' }}>
                <AutoSlider />

            </Box>

            <Box sx={{ borderRadius: '10px', overflow: 'hidden', width: '97%', m: ' 30px auto', }}>
                <Typography sx={{ fontSize: '40px', fontWeight: 'bold' }} >Flash Deals</Typography>
                <ManualSlider />
            </Box>

            <Box sx={{ width: '97%', m: { lg: ' 30px auto', xs: ' 30px auto 100px' }, borderRadius: '10px' }}>
                <Grid container spacing={2} sx={{ height: '100%', width: '100%' }}>
                    <Grid size={{ lg: 4, xs: 12 }} sx={{ height: { xl: '120vh', lg: '124vh', xs: '50vh' }, bgcolor: 'red', borderRadius: '10px' }} >
                        <Box sx={{
                            overflow: 'hidden',
                            borderRadius: '10px',
                            cursor: 'pointer',
                            height: '100%', position: 'relative'
                            , '&:hover .title-cover': {
                                textDecoration: 'underLine',
                            },
                            '&:hover img': {
                                scale: 1.05,
                            }
                        }}>
                            <img loading="lazy" style={{ objectPosition: 'center', objectFit: 'cover', width: '100%', height: '100%', borderRadius: '10px', transition: '.4s all' }} src={cover1} alt="" />
                            <Box sx={{
                                position: 'absolute', bottom: 20, left: 0, width: '100%',
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                px: '30px'
                            }}>
                                <Typography className="title-cover" sx={{ fontSize: '35px', color: theme.palette.primary.light }}>Accessories</Typography>
                                <Box sx={{ p: '10px', bgcolor: theme.palette.primary.light, borderRadius: '10px' }}><ArrowForwardIcon /></Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={{ lg: 8, xs: 12 }} sx={{ height: { lg: '120vh', xs: '200vh' }, borderRadius: '10px' }}>
                        <Grid container spacing={2} sx={{ height: '100%', width: '100%' }}>
                            <Grid size={12} sx={{ mb: { lg: 0, xs: 2 }, width: '100%' }} >
                                <Grid container spacing={2} sx={{ height: '100%', width: '100%' }}>
                                    <Grid size={{ lg: 6, xs: 12 }} sx={{ MaxHeight: { lg: '100%', xs: '50%' } }} >

                                        <Box sx={{
                                            overflow: 'hidden',
                                            borderRadius: '10px',
                                            cursor: 'pointer',
                                            width: '100%', position: 'relative'
                                            , '&:hover .title-cover': {
                                                textDecoration: 'underLine',
                                            },
                                            '&:hover img': {
                                                scale: 1.05,
                                            }
                                        }}>
                                            <img loading="lazy" className="cover" style={{ objectPosition: 'center', objectFit: 'cover', width: '100%', borderRadius: '10px', transition: '.4s all' }} src={cover2} alt="" />
                                            <Box sx={{
                                                position: 'absolute', bottom: 20, left: 0, width: '100%',
                                                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                                px: '30px'
                                            }}>
                                                <Typography className="title-cover" sx={{ fontSize: '35px', color: theme.palette.primary.light }}>Accessories</Typography>
                                                <Box sx={{ p: '10px', bgcolor: theme.palette.primary.light, borderRadius: '10px' }}><ArrowForwardIcon /></Box>
                                            </Box>
                                        </Box>


                                    </Grid>
                                    <Grid size={{ lg: 6, xs: 12 }} sx={{ height: { lg: '100%', xs: '50%' } }}>
                                        <Box sx={{
                                            overflow: 'hidden',
                                            borderRadius: '10px',
                                            cursor: 'pointer',
                                            width: '100%', position: 'relative'
                                            , '&:hover .title-cover': {
                                                textDecoration: 'underLine',
                                            },
                                            '&:hover img': {
                                                scale: 1.05,
                                            }
                                        }}>
                                            <img loading="lazy" className="cover" style={{ objectPosition: 'center', objectFit: 'cover', width: '100%', borderRadius: '10px', transition: '.4s all' }} src={cover3} alt="" />
                                            <Box sx={{
                                                position: 'absolute', bottom: 20, left: 0, width: '100%',
                                                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                                px: '30px'
                                            }}>
                                                <Typography className="title-cover" sx={{ fontSize: '35px', color: theme.palette.primary.light }}>Accessories</Typography>
                                                <Box sx={{ p: '10px', bgcolor: theme.palette.primary.light, borderRadius: '10px' }}><ArrowForwardIcon /></Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid size={12} sx={{ width: '100%', }}>
                                <Grid container spacing={2} sx={{ height: '100%', width: '100%' }}>
                                    <Grid size={{ lg: 6, xs: 12 }} sx={{ height: { lg: '100%', xs: '50%' } }} >
                                        <Box sx={{
                                            overflow: 'hidden',
                                            borderRadius: '10px',
                                            cursor: 'pointer',
                                            width: '100%', position: 'relative'
                                            , '&:hover .title-cover': {
                                                textDecoration: 'underLine',
                                            },
                                            '&:hover img': {
                                                scale: 1.05,
                                            }
                                        }}>
                                            <img loading="lazy" className="cover" style={{ objectPosition: 'center', objectFit: 'cover', width: '100%', borderRadius: '10px', transition: '.4s all' }} src={cover4} alt="" />
                                            <Box sx={{
                                                position: 'absolute', bottom: 20, left: 0, width: '100%',
                                                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                                px: '30px'
                                            }}>
                                                <Typography className="title-cover" sx={{ fontSize: '35px', color: theme.palette.primary.light }}>Accessories</Typography>
                                                <Box sx={{ p: '10px', bgcolor: theme.palette.primary.light, borderRadius: '10px' }}><ArrowForwardIcon /></Box>
                                            </Box>
                                        </Box>

                                    </Grid>
                                    <Grid size={{ lg: 6, xs: 12 }} sx={{ height: { lg: '100%', xs: '50%' } }}>
                                        <Box sx={{
                                            overflow: 'hidden',
                                            borderRadius: '10px',
                                            cursor: 'pointer',
                                            width: '100%', position: 'relative'
                                            , '&:hover .title-cover': {
                                                textDecoration: 'underLine',
                                            },
                                            '&:hover img': {
                                                scale: 1.05,
                                            }
                                        }}>
                                            <img loading="lazy" className="cover" style={{ objectPosition: 'center', objectFit: 'cover', width: '100%', borderRadius: '10px', transition: '.4s all' }} src={cover5} alt="" />
                                            <Box sx={{
                                                position: 'absolute', bottom: 20, left: 0, width: '100%',
                                                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                                px: '30px'
                                            }}>
                                                <Typography className="title-cover" sx={{ fontSize: '35px', color: theme.palette.primary.light }}>Accessories</Typography>
                                                <Box sx={{ p: '10px', bgcolor: theme.palette.primary.light, borderRadius: '10px' }}><ArrowForwardIcon /></Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>


            <Box sx={{ borderRadius: '10px', overflow: 'hidden', width: '97%', m: ' 30px auto 50px', }} >
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Typography sx={{ fontSize: '40px', fontWeight: 'bold' }}>Just For You</Typography>
                    <Typography onClick={() => { navigate(`/search/foryou`) }} sx={{ cursor: 'pointer', fontSize: '20px', display: 'flex', alignItems: 'center', gap: 1 }}>Show More <ArrowForwardIcon /> </Typography>
                </Stack>
                <ForYou />
            </Box>


            <Stack spacing={2} justifyContent={'space-between'} direction={{ md: 'row', xs: 'column' }} sx={{ width: '97%', mx: 'auto' }}>
                <Box sx={{
                    cursor: 'pointer',
                    borderRadius: '10px',
                    position: 'relative',
                    overflow: 'hidden',
                    maxHeight: { xl: '350px', lg: '320px', md: '300px', xs: '300px' },
                    flexGrow: 1,
                    minWidth: "49%",
                    '&:hover .img-cover': {
                        scale: 1.05
                    }
                }}>
                    <Box
                        className={'img-cover'}
                        component="img"
                        src={promo1}
                        alt="example"
                        sx={{
                            cursor: 'pointer',
                            objectPosition: 'center',
                            objectFit: 'cover',
                            width: '100%',
                            maxHeight: { xl: '350px', lg: '320px', md: '300px', xs: '300px' },
                            borderRadius: "10px",
                            position: 'relative',

                        }}
                    />
                    <Box
                        sx={{
                            height: '80%',
                            position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '20px'
                            , transition: '.4s all',
                            display: 'flex', justifyContent: 'space-between', flexDirection: 'column'
                        }}>
                        <Box>
                            <Typography variant="h5" color="initial">Summer Collection</Typography>
                            <Typography variant="body2" color="initial">save up to 50% on summer essentials including <br></br> swimwear, dresses, sandals and accessories</Typography>
                        </Box>
                        <Box sx={{ borderRadius: '10px', width: "fit-content", p: '12px 40px', bgcolor: theme.palette.secondary.dark, color: theme.palette.primary.light, fontWeight: 'bold', whiteSpace: 'nowrap' }}>Shop Now</Box>

                    </Box>
                </Box>
                <Box sx={{
                    cursor: 'pointer',

                    borderRadius: '10px',
                    position: 'relative',
                    overflow: 'hidden',
                    maxHeight: { xl: '350px', lg: '320px', md: '300px', xs: '300px' },
                    flexGrow: 1,
                    minWidth: "49%",
                    '&:hover .img-cover': {
                        scale: 1.05
                    }
                }}>
                    <Box
                        className={'img-cover'}
                        component="img"
                        src={promo2}
                        alt="example"
                        sx={{
                            cursor: 'pointer',
                            objectPosition: 'center',
                            objectFit: 'cover',
                            width: '100%',
                            maxHeight: { xl: '350px', lg: '320px', md: '300px', xs: '300px' },
                            borderRadius: "10px",
                            position: 'relative',
                        }}
                    />
                    <Box
                        sx={{
                            height: '80%',
                            position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '20px'
                            , transition: '.4s all',
                            display: 'flex', justifyContent: 'space-between', flexDirection: 'column'
                        }}>
                        <Box>
                            <Typography variant="h5" color="initial">Spring Collection</Typography>
                            <Typography variant="body2" color="initial">save up to 50% on summer essentials including <br></br> swimwear, dresses, sandals and accessories</Typography>
                        </Box>
                        <Box sx={{ borderRadius: '10px', width: "fit-content", p: '12px 40px', bgcolor: theme.palette.secondary.dark, color: theme.palette.primary.light, fontWeight: 'bold', whiteSpace: 'nowrap' }}>Shop Now</Box>
                    </Box>
                </Box>
            </Stack >

            <Box sx={{ width: '97%', m: ' 30px auto' }}>
                <Typography sx={{ fontSize: '40px', fontWeight: 'bold' }}>New Arrivals</Typography>
                <NewArrivals />
            </Box>

            <Stack spacing={2} justifyContent={'space-between'} direction={'column'} sx={{ width: '97%', mx: 'auto', mb: '50px' }}>
                <Typography sx={{ fontSize: '40px', fontWeight: 'bold' }}>Read our blogs</Typography>
                <Stack direction={{ md: 'row', xs: 'column' }} >
                    <BlogCard />
                </Stack>
            </Stack>

            <Box sx={{ width: '100%', p: '20px', bgcolor: theme.palette.primary.main, mx: 'auto' }}>
                <Box sx={{ width: '97%', mx: 'auto', display: 'flex', justifyContent: { md: 'space-between', xs: 'center' }, flexDirection: { md: 'row', xs: 'column' }, gap: '15px' }}>
                    <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} gap={2}>
                        <LocalShippingIcon sx={{ fontSize: '25px' }} />
                        <Typography sx={{ fontSize: { xl: '25px' } }}>Worldwide Delivery</Typography>
                    </Stack>
                    <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} gap={2} >
                        <CreditScoreIcon sx={{ fontSize: '25px' }} />
                        <Typography sx={{ fontSize: { xl: '25px' } }}>Safe Payment</Typography>
                    </Stack>
                    <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} gap={2}>
                        <GppGoodIcon sx={{ fontSize: '25px' }} />
                        <Typography sx={{ fontSize: { xl: '25px' } }}>Shop With Confidence</Typography>
                    </Stack>
                    <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} gap={2}>
                        <SupportAgentIcon sx={{ fontSize: '25px' }} />
                        <Typography sx={{ fontSize: { xl: '25px' } }}>24/7 Support</Typography>
                    </Stack>
                </Box>
            </Box>
        </Box >
    )

}





