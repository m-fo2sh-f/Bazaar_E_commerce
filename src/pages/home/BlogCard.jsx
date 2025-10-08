import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

import blog1 from '../../assets/blog-1.webp'
import blog2 from '../../assets/blog-2.webp'
import blog3 from '../../assets/blog-3.webp'
import EastIcon from '@mui/icons-material/East';
import { Box, useTheme } from "@mui/material";

export default function MultiActionAreaCard() {
    const theme = useTheme()
    const blogsList = [
        { id: 1, title: '30% Off Coupon for Black Friday', description: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.…', img: blog1 },
        { id: 2, title: '10% Discount for Cosmatics', description: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.…', img: blog2 },
        { id: 3, title: 'Buy 2 get 1 free Offer', description: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.…', img: blog3 },
    ]
    return (
        <>
            {blogsList.map((b) => (
                <Box key={b.id}
                    sx={{

                        minWidth: '248px', boxShadow: 'none',
                        borderRadius: '10px', borderColor: theme.palette.primary.dark, border: `2px solid ${theme.palette.primary.main}`,
                        '&:hover': {
                            boxShadow: '1'
                        }

                    }}>
                    <CardActionArea
                        disableRipple
                        sx={{
                            cursor: 'default',
                            p: '12px',
                            overflow: 'hidden',
                            '&:hover': { bgcolor: 'white' },
                            '&:hover .MuiCardActionArea-focusHighlight': {
                                opacity: 0, // يخفي الطبقة الرمادية

                            },
                        }}>
                        <Box sx={{ overflow: 'hidden', borderRadius: '13px' }}>
                            <CardMedia
                                component="img"
                                height="250"
                                image={b.img}
                                alt="green iguana"
                                sx={{
                                    transition: '.3s all',
                                    cursor: 'pointer',
                                    borderRadius: '13px'
                                    , '&:hover': { scale: '1.05', bgcolor: 'red' }
                                }}
                            />
                        </Box>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {b.title}
                            </Typography>
                            <Typography variant="body1" sx={{ color: theme.palette.secondary.main }}>
                                {b.description}
                            </Typography>
                            <Box sx={{
                                display: 'flex', alignItems: 'center', width: 'fit-content', gap: 1.5,
                                mt: "10px", cursor: 'pointer', position: 'relative',
                                '&::after': {
                                    content: "''",
                                    bgcolor: theme.palette.secondary.dark,
                                    height: '2px',
                                    width: '0%',
                                    position: 'absolute',
                                    left: '0',
                                    bottom: '0',
                                    transition: '.3s all'
                                }, '&:hover::after': {
                                    width: '100%' // في hover يبقى مليان
                                }
                            }}>
                                <Typography variant="h6" sx={{ color: theme.palette.secondary.dark }}>
                                    Read More
                                </Typography>
                                <EastIcon sx={{ fontSize: '17px' }}></EastIcon>
                            </Box>
                        </CardContent>
                    </CardActionArea>
                </Box>
            ))}
        </>
    );
}