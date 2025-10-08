import React, { Component } from "react";
import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import speaker from '../../assets/products/speaker-5.webp'
import airpod from '../../assets/products/airpod-1.webp'
import bag from '../../assets/products/bag-1.webp'








import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function PauseOnHover() {
    const theme = useTheme()

    const slidesList = [
        { id: 1, img: speaker },
        { id: 2, img: bag },
        { id: 3, img: airpod },
    ]


    const slides = slidesList.map((s) => {
        return (
            <SwiperSlide key={s.id}>
                <Box sx={{ height: '75vh' }}>
                    <Grid container spacing={0}>
                        <Grid
                            sx={{
                                height: { md: '75vh', xs: '35.5vh' },
                                display: 'flex', justifyContent: 'center', alignItems: { xs: 'center', md: 'start' },
                                flexDirection: 'column', gap: '20px',
                                pl: { xs: '0', md: '50px' }
                            }}
                            size={{ xl: 7, md: 6, xs: 12 }}
                            order={{ xs: 2, md: 1 }}>

                            <Typography sx={{ textAlign: { xs: 'center', md: 'start' }, lineHeight: 1, fontSize: { xl: '50px', md: '40px', sm: '35px', xs: '25px' }, fontWeight: 'bold' }}>
                                50% Off For Your<br></br> First Shopping
                            </Typography>
                            <Typography sx={{ lineHeight: 1, color: theme.palette.secondary.light }} >
                                Get Free Shipping on all orders over $99.00
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{ width: '150px', fontSize: '18px', bgcolor: theme.palette.secondary.main, color: theme.palette.primary.light }}
                            >Shop Now</Button>
                        </Grid>
                        <Grid sx={{
                            height: { md: '75vh', xs: '40.5vh' },
                            display: 'flex', justifyContent: { xs: 'center', md: 'start' }, alignItems: 'center'
                        }}
                            size={{ xl: 5, md: 6, xs: 12 }}
                            order={{ xs: 1, md: 2 }}
                        >
                            <img loading="lazy" className="slider-image" src={s.img} alt="" />
                        </Grid>
                    </Grid>
                </Box>
            </SwiperSlide>
        )
    })
    return (
        <div style={{ height: '100%', }} className="slider-container">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={false}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2500,  // كل قد إيه يتغير (ms)
                    disableOnInteraction: false, // يفضل شغال حتى لو المستخدم لمس السلايدر
                }}
                loop={true} // يخلي السلايدر infinite
            >
                {slides}

            </Swiper>

        </div >
    );
}

export default PauseOnHover;