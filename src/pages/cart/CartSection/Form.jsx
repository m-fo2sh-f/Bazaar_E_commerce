import { Box, Button, Divider, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { getNames } from "country-list";

const countries = getNames(); // بترجع Array فيها أسماء كل الدول
export default function Form({ totalSalary, handleNext }) {
    const theme = useTheme()
    const [inputs, setInputs] = useState({
        note: "",
        voucher: "",
        country: "",
        zipCode: "",
    })
    function nextStep() {
        handleNext()
    }
    return (
        <>
            <Stack direction={'row'} justifyContent={'space-between'}>
                <Typography sx={{ color: theme.palette.secondary.light, mb: 2, fontWeight: 'bold' }}  >Total:</Typography>
                <Typography sx={{ color: theme.palette.secondary.light, mb: 2, fontWeight: 'bold' }}  >${totalSalary}</Typography>
            </Stack>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ display: 'flex' }}>
                <Typography sx={{ color: theme.palette.secondary.light, fontWeight: 'bold' }}  >Additional Comments:</Typography>
                <Box sx={{ bgcolor: theme.palette.divider, width: 'fit-content', p: '0px 4px', borderRadius: '2px', display: 'flex', alignItems: 'center', ml: 1 }} >
                    <Typography sx={{ color: theme.palette.secondary.light, }}  >Note</Typography>
                </Box>
            </Box>
            <TextField
                multiline
                minRows={4}
                variant="outlined"
                fullWidth
                value={inputs.note}
                onChange={(e) => {
                    setInputs((prev) => ({
                        ...prev,
                        note: e.target.value
                    }));
                }}
                sx={{
                    my: 2,
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '10px',
                        '& fieldset': {
                            borderColor: theme.palette.divider, // اللون العادي
                        },
                        '&:hover fieldset': {
                            borderColor: theme.palette.secondary.light, // لما تعمل hover
                        },
                        '&.Mui-focused fieldset': {
                            border: '2px solid', // لما يبقى focus
                        },
                    },
                }}
            />
            <Box sx={{ display: 'flex', gap: 1 }}>
                <TextField
                    label='Voucher'
                    variant="outlined"
                    value={inputs.voucher}
                    onChange={(e) => {
                        setInputs((prev) => ({
                            ...prev,
                            voucher: e.target.value
                        }));
                    }}
                    sx={{
                        width: '80%',
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '10px',
                            '& fieldset': {
                                borderColor: theme.palette.divider, // اللون العادي
                            },
                            '&:hover fieldset': {
                                borderColor: theme.palette.secondary.light, // hover
                            },
                            '&.Mui-focused fieldset': {
                                border: '2px solid', // focus
                                borderColor: theme.palette.secondary.main,
                            },
                        },

                        // 🎯 تخصيص الlabel
                        '& .MuiInputLabel-root': {
                            color: theme.palette.secondary.light,
                            transform: 'translateY(5px) translateX(20px)  ', // مكانه الطبيعي

                        },
                        '& .MuiInputLabel-shrink': {
                            transform: 'translate(14px, -8px) scale(0.85)', // مكانه بعد ما يطلع فوق
                        },
                    }}
                />

                <Button variant="outlined" sx={{
                    flexGrow: 1,
                    borderRadius: '10px',
                    borderWidth: '1px',
                    borderColor: theme.palette.secondary.light,      // لون البوردر
                    color: theme.palette.secondary.light,
                    height: '90%',
                    '&:hover': {
                        borderColor: 'black',     // لون البوردر عند hover
                        bgcolor: theme.palette.divider,       // تغيير الخلفية عند hover
                    },
                }}
                >Apply
                </Button>
            </Box >
            <Divider sx={{ my: 2 }} />
            <Box>
                <Typography sx={{ color: theme.palette.secondary.light, mb: 2, fontWeight: 'bold' }}  >Shipping Estimates</Typography>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label"
                        sx={{
                            color: theme.palette.text.secondary, // اللون العادي
                            '&.Mui-focused': {
                                color: theme.palette.secondary.light, // لما يبقى Focus
                            },
                            '&.MuiInputLabel-shrink': {
                                color: theme.palette.secondary.main, // لما يعمل shrink (يطلع فوق)
                            },
                        }} >
                        Country</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={inputs.country}
                        label="Country"
                        sx={{
                            borderRadius: '10px', borderColor: theme.palette.divider,
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: theme.palette.divider, // اللون العادي
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: theme.palette.secondary.light, // hover
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: theme.palette.secondary.light, // hover
                                borderWidth: '2px',
                            },
                        }}
                        onChange={(e) => {
                            setInputs((prev) => ({
                                ...prev,
                                country: e.target.value
                            }));
                        }}
                    >
                        {countries.map((country, index) => (
                            <MenuItem key={index} value={country}>{country}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField
                    label="Zip Code"
                    variant="outlined"
                    value={inputs.zipCode}
                    onChange={(e) => setInputs((prev) => ({ ...prev, zipCode: e.target.value }))}
                    InputProps={{
                        sx: {
                            height: 70,                 // ارتفاع الخانة
                            alignItems: "center",       // يخلي النص يتوسط عمودياً
                            padding: "0 14px",          // مسافة من الجنبين
                        },
                    }}
                    InputLabelProps={{
                        sx: {
                            fontSize: "16px",           // حجم الليبل
                            transform: "translate(14px, 14px) scale(1)", // مكانه الطبيعي
                            "&.MuiInputLabel-shrink": {
                                transform: "translate(14px, -9px) scale(0.85)", // مكانه بعد ما يطلع فوق
                            },
                        },
                    }}
                    sx={{
                        width: '100%',
                        my: 2,
                        height: '50px',              // الارتفاع اللي انت عايزه
                        minHeight: '50px',           // يضمن إن مفيش حاجة تغيّره
                        lineHeight: '50px',
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '10px',
                            '& fieldset': {
                                borderColor: theme.palette.divider,
                            },
                            '&:hover fieldset': {
                                borderColor: theme.palette.secondary.light,
                            },
                            '&.Mui-focused fieldset': {
                                border: '2px solid',
                                borderColor: theme.palette.secondary.main,
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: theme.palette.text.secondary,
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: theme.palette.secondary.light,
                        },
                        '& .MuiInputLabel-root.MuiInputLabel-shrink': {
                            color: theme.palette.secondary.main,
                        },
                    }}
                />
                <Stack direction={'column'} gap={2}>
                    <Button variant="contained"

                        sx={{
                            height: '50px',              // الارتفاع اللي انت عايزه
                            minHeight: '50px',           // يضمن إن مفيش حاجة تغيّره
                            lineHeight: '50px',
                            boxShadow: 'none',
                            color: theme.palette.secondary.light,
                            borderRadius: '10px',
                            border: '1px solid',
                            borderColor: theme.palette.primary.dark,
                            '&:hover': {
                                boxShadow: 'none',
                                bgcolor: theme.palette.divider,
                            },
                        }}
                    >Calculate Shipping</Button>
                    <Button variant="outlined"
                        onClick={() => {
                            nextStep()
                        }}
                        sx={{
                            height: '50px',              // الارتفاع اللي انت عايزه
                            minHeight: '50px',           // يضمن إن مفيش حاجة تغيّره
                            lineHeight: '50px',
                            boxShadow: 'none', // شيل أي شادو
                            bgcolor: theme.palette.secondary.main, // لون الخلفية
                            color: '#fff', // لون الخط
                            borderRadius: '10px', // حواف دائرية
                            '&:hover': {
                                boxShadow: 'none', // حتى في الهوفر مفيش شادو
                                bgcolor: theme.palette.secondary.dark, // لون مختلف في الهوفر
                            },
                        }}
                    >Checkout Now</Button>
                </Stack>
            </Box >
        </>
    )
}
