import { Box, useTheme } from "@mui/material";
import { useEffect, useRef } from "react";


import { IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";




import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../features/products/productApisSlice";
import ProductCard from '../../components/ProductCard';



import { Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function ManualSlider() {
    const items = useSelector((state) => state.items.items);
    const dispatch = useDispatch()
    const theme = useTheme();
    useEffect(() => {
        dispatch(getProduct())
    })
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <Box sx={{ width: "100%", position: "relative" }}>
            <IconButton
                ref={prevRef}
                sx={{
                    borderRadius: '10px',
                    position: "absolute",
                    top: "-50px",
                    right: 45,
                    zIndex: 1,
                    color: theme.palette.secondary.main,
                    bgcolor: theme.palette.primary.light,
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                }}
            >
                <ArrowBackIos sx={{ pl: '5px' }} />
            </IconButton>
            <IconButton
                ref={nextRef}
                sx={{
                    borderRadius: '10px',
                    position: "absolute",
                    top: "-50px",
                    right: 0,
                    zIndex: 1,
                    color: theme.palette.primary.light,
                    bgcolor: theme.palette.secondary.main,
                    "&:hover": { bgcolor: "grey.800" },
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                }}
            >
                <ArrowForwardIos />
            </IconButton>

            <div style={{ height: '100%', }} className="slider-container">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={4}
                    navigation
                    loop={items.slice(0, 8).length > 3}
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    breakpoints={{
                        1300: {
                            slidesPerView: 4,
                        },
                        1060: {
                            slidesPerView: 3,
                        },
                        700: {
                            slidesPerView: 2,
                        },
                        0: {
                            slidesPerView: 1,
                        },
                    }}
                >
                    {items.slice(0, 8).map((p, i) => (
                        <SwiperSlide key={i}>
                            <Box sx={{ flexGrow: 1 }} >
                                <ProductCard item={p} />
                            </Box>
                        </SwiperSlide>
                    ))
                    }
                </Swiper>
            </div >
        </Box >
    );
}