import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, useTheme, Typography, Divider } from '@mui/material'
import React from 'react'
import ReactDOM from "react-dom"
import { useForm, } from "react-hook-form"
import { getNames } from "country-list";
import { useCart } from "../../../context/useCart";


const countries = getNames();
export default function DetailsSection({ handleNext, handleBack }) {
    const theme = useTheme()
    const { totalPrice } = useCart();
    function nextStep() {
        handleNext()
    }
    function backStep() {
        handleBack()
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            fullName: "",
            phone: "",
            email: "",
            company: "",
            address1: "",
            address2: "",
            country: "",
            zipCode: "",
            voucher: ""
        },
    });

    const onSubmit = (data) => console.log(data)
    return (
        <>
            <Stack direction={{ md: 'row', xs: 'column', }} gap={3} sx={{ zIndex: 55, mt: '50px', width: { lg: '90%', md: '100%', xs: '100%', }, px: 2, mx: 'auto', }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, flexGrow: 1, width: { md: '65%', xs: '100%', } }}>
                    <Box sx={{ flexGrow: 1, bgcolor: theme.palette.primary.main, borderRadius: '10px', p: 3, border: '1px solid', borderColor: theme.palette.divider }}>
                        <Typography sx={{ color: theme.palette.secondary.light, mb: 2, fontWeight: 'bold' }} >Shipping Address</Typography>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container spacing={2}>

                                <Grid size={{ sm: 6, xs: 12 }}>
                                    <TextField
                                        {...register("fullName", {
                                            required: "Full Name is required",
                                            minLength: {
                                                value: 3,
                                                message: "Full Name must be at least 3 characters",
                                            },
                                        })}
                                        error={!!errors.fullName}
                                        helperText={errors.fullName?.message}
                                        label="Full Name"
                                        variant="outlined"
                                        sx={{
                                            width: "100%",
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "10px",
                                                "& input": { padding: "25px 16px" },
                                            },
                                        }}
                                    />
                                </Grid>

                                {/* 📞 Phone */}
                                <Grid size={{ sm: 6, xs: 12 }}>
                                    <TextField
                                        {...register("phone", {
                                            required: "Phone number is required",
                                            pattern: {
                                                value: /^[0-9]{11}$/,
                                                message: "Phone must be 11 digits",
                                            },
                                        })}
                                        error={!!errors.phone}
                                        helperText={errors.phone?.message}
                                        label="Phone Number"
                                        variant="outlined"
                                        sx={{
                                            width: "100%",
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "10px",
                                                "& input": { padding: "25px 16px" },
                                            },
                                        }}
                                    />
                                </Grid>

                                {/* 📧 Email */}
                                <Grid size={{ sm: 6, xs: 12 }}>
                                    <TextField
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                // ✅ Regex خاص بالإيميل
                                                value:
                                                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                message: "Invalid email address",
                                            },
                                        })}
                                        error={!!errors.email}
                                        helperText={errors.email?.message}
                                        label="Email Address"
                                        variant="outlined"
                                        sx={{
                                            width: "100%",
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "10px",
                                                "& input": { padding: "25px 16px" },
                                            },
                                        }}
                                    />
                                </Grid>

                                {/* 🏢 Company */}
                                <Grid size={{ sm: 6, xs: 12 }}>
                                    <TextField
                                        {...register("company")}
                                        label="Company"
                                        variant="outlined"
                                        sx={{
                                            width: "100%",
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "10px",
                                                "& input": { padding: "25px 16px" },
                                            },
                                        }}
                                    />
                                </Grid>

                                {/* 🏠 Address 1 */}
                                <Grid size={{ sm: 6, xs: 12 }}>
                                    <TextField
                                        {...register("address1", { required: "Address is required" })}
                                        error={!!errors.address1}
                                        helperText={errors.address1?.message}
                                        label="Address 1"
                                        variant="outlined"
                                        sx={{
                                            width: "100%",
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "10px",
                                                "& input": { padding: "25px 16px" },
                                            },
                                        }}
                                    />
                                </Grid>

                                {/* 🏠 Address 2 */}
                                <Grid size={{ sm: 6, xs: 12 }}>
                                    <TextField
                                        {...register("address2")}
                                        label="Address 2"
                                        variant="outlined"
                                        sx={{
                                            width: "100%",
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "10px",
                                                "& input": { padding: "25px 16px" },
                                            },
                                        }}
                                    />
                                </Grid>

                                {/* 🌍 Country */}
                                <Grid size={{ sm: 6, xs: 12 }}>
                                    <FormControl
                                        sx={{ width: "100%" }}
                                        error={!!errors.country}
                                        variant="outlined"
                                    >
                                        <InputLabel>Country</InputLabel>
                                        <Select
                                            {...register("country", { required: "Country is required" })}
                                            label="Country"
                                            defaultValue=""
                                            sx={{
                                                borderRadius: "10px",
                                                "& .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: theme.palette.divider,
                                                },
                                                width: "100%",
                                                height: '50px'
                                            }}
                                        >
                                            {countries.map((country, index) => (
                                                <MenuItem key={index} value={country}>
                                                    {country}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                        {errors.country && (
                                            <Box
                                                sx={{
                                                    color: theme.palette.error.main,
                                                    fontSize: "0.8rem",
                                                    mt: 0.5,
                                                    ml: 2,
                                                }}
                                            >
                                                {errors.country.message}
                                            </Box>
                                        )}
                                    </FormControl>
                                </Grid>
                                {/* 🏠 Address 2 */}
                                <Grid size={{ sm: 6, xs: 12 }}>
                                    <TextField
                                        {...register("zipCode")}
                                        label="Zip Code"
                                        variant="outlined"
                                        sx={{
                                            width: "100%",
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "10px",
                                                "& input": { padding: "25px 16px" },
                                            },
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                    <Box sx={{ flexGrow: 1, bgcolor: theme.palette.primary.main, borderRadius: '10px', p: 3, border: '1px solid', borderColor: theme.palette.divider }}>
                        <Typography sx={{ color: theme.palette.secondary.light, mb: 2, fontWeight: 'bold' }} >Billing Address</Typography>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container spacing={2}>

                                <Grid size={{ sm: 6, xs: 12 }}>
                                    <TextField
                                        {...register("fullName", {
                                            required: "Full Name is required",
                                            minLength: {
                                                value: 3,
                                                message: "Full Name must be at least 3 characters",
                                            },
                                        })}
                                        error={!!errors.fullName}
                                        helperText={errors.fullName?.message}
                                        label="Full Name"
                                        variant="outlined"
                                        sx={{
                                            width: "100%",
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "10px",
                                                "& input": { padding: "25px 16px" },
                                            },
                                        }}
                                    />
                                </Grid>

                                {/* 📞 Phone */}
                                <Grid size={{ sm: 6, xs: 12 }}>
                                    <TextField
                                        {...register("phone", {
                                            required: "Phone number is required",
                                            pattern: {
                                                value: /^[0-9]{11}$/,
                                                message: "Phone must be 11 digits",
                                            },
                                        })}
                                        error={!!errors.phone}
                                        helperText={errors.phone?.message}
                                        label="Phone Number"
                                        variant="outlined"
                                        sx={{
                                            width: "100%",
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "10px",
                                                "& input": { padding: "25px 16px" },
                                            },
                                        }}
                                    />
                                </Grid>

                                {/* 📧 Email */}
                                <Grid size={{ sm: 6, xs: 12 }}>
                                    <TextField
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                // ✅ Regex خاص بالإيميل
                                                value:
                                                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                message: "Invalid email address",
                                            },
                                        })}
                                        error={!!errors.email}
                                        helperText={errors.email?.message}
                                        label="Email Address"
                                        variant="outlined"
                                        sx={{
                                            width: "100%",
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "10px",
                                                "& input": { padding: "25px 16px" },
                                            },
                                        }}
                                    />
                                </Grid>

                                {/* 🏢 Company */}
                                <Grid size={{ sm: 6, xs: 12 }}>
                                    <TextField
                                        {...register("company")}
                                        label="Company"
                                        variant="outlined"
                                        sx={{
                                            width: "100%",
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "10px",
                                                "& input": { padding: "25px 16px" },
                                            },
                                        }}
                                    />
                                </Grid>

                                {/* 🏠 Address 1 */}
                                <Grid size={{ sm: 6, xs: 12 }}>
                                    <TextField
                                        {...register("address1", { required: "Address is required" })}
                                        error={!!errors.address1}
                                        helperText={errors.address1?.message}
                                        label="Address 1"
                                        variant="outlined"
                                        sx={{
                                            width: "100%",
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "10px",
                                                "& input": { padding: "25px 16px" },
                                            },
                                        }}
                                    />
                                </Grid>

                                {/* 🏠 Address 2 */}
                                <Grid size={{ sm: 6, xs: 12 }}>
                                    <TextField
                                        {...register("address2")}
                                        label="Address 2"
                                        variant="outlined"
                                        sx={{
                                            width: "100%",
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "10px",
                                                "& input": { padding: "25px 16px" },
                                            },
                                        }}
                                    />
                                </Grid>

                                {/* 🌍 Country */}
                                <Grid size={{ sm: 6, xs: 12 }}>
                                    <FormControl
                                        sx={{ width: "100%" }}
                                        error={!!errors.country}
                                        variant="outlined"
                                    >
                                        <InputLabel>Country</InputLabel>
                                        <Select
                                            {...register("country", { required: "Country is required" })}
                                            label="Country"
                                            defaultValue=""
                                            sx={{
                                                borderRadius: "10px",
                                                "& .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: theme.palette.divider,
                                                },
                                                height: '50px'
                                            }}
                                        >
                                            {countries.map((country, index) => (
                                                <MenuItem key={index} value={country}>
                                                    {country}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                        {errors.country && (
                                            <Box
                                                sx={{
                                                    color: theme.palette.error.main,
                                                    fontSize: "0.8rem",
                                                    mt: 0.5,
                                                    ml: 2,
                                                }}
                                            >
                                                {errors.country.message}
                                            </Box>
                                        )}
                                    </FormControl>
                                </Grid>
                                {/* 🏠 Address 2 */}
                                <Grid size={{ sm: 6, xs: 12 }}>
                                    <TextField
                                        {...register("zipCode")}
                                        label="Zip Code"
                                        variant="outlined"
                                        sx={{
                                            width: "100%",
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "10px",
                                                "& input": { padding: "25px 16px" },
                                            },
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Box>

                <Box sx={{ height: 'fit-content', minWidth: '35%', flexGrow: 1, bgcolor: theme.palette.primary.main, borderRadius: '10px', p: 3, border: '1px solid', borderColor: theme.palette.divider }}>
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <Typography sx={{ color: theme.palette.secondary.light, mb: 2, }}  >Subtotal:</Typography>
                        <Typography sx={{ color: theme.palette.secondary.main, mb: 2, fontWeight: 'bold' }}  >${totalPrice}</Typography>
                    </Stack>
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <Typography sx={{ color: theme.palette.secondary.light, mb: 2, }}  >Shipping:</Typography>
                        <Typography sx={{ color: theme.palette.secondary.light, mb: 2, }}  >-</Typography>
                    </Stack>
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <Typography sx={{ color: theme.palette.secondary.light, mb: 2, }}  >Tax:</Typography>
                        <Typography sx={{ color: theme.palette.secondary.light, mb: 2, }}  >-</Typography>
                    </Stack>
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <Typography sx={{ color: theme.palette.secondary.light, mb: 2, }}  >Discount:</Typography>
                        <Typography sx={{ color: theme.palette.secondary.light, mb: 2, }}  >-</Typography>
                    </Stack>
                    <Divider sx={{ my: 2 }} />

                    <Typography sx={{ fontSize: '30px', color: theme.palette.secondary.main, mb: 2, fontWeight: 'bold' }}  >${totalPrice}</Typography>
                    <Stack direction={'row'} gap={2}>
                        <TextField
                            {...register("voucher", {
                            })}

                            label="Voucher"
                            variant="outlined"
                            sx={{
                                width: "60%",
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "10px",
                                    "& input": { padding: "25px 16px" },
                                },
                            }}
                        />
                        <Button variant="contained"

                            sx={{
                                width: '40%%',
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
                        >Back To Cart</Button>
                    </Stack >
                </Box>
            </Stack >
            <Stack sx={{ zIndex: 55, mt: 3, width: { lg: '90%', md: '100%', xs: '100%', }, px: 2, mx: 'auto', }}>
                <Box sx={{ display: 'flex', flexDirection: { md: 'row', xs: 'column', }, gap: 2, pr: { md: 3, xs: 0, }, width: { md: '65%', xs: '100%', } }}>

                    <Button variant="contained"
                        onClick={() => {
                            backStep()
                            handleSubmit(onSubmit)
                        }}
                        sx={{
                            width: { md: '50%', xs: '100%', },
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
                    >Back To Cart</Button>
                    <Button variant="outlined"
                        onClick={() => {
                            nextStep()
                            handleSubmit(onSubmit)
                        }}
                        sx={{
                            width: { md: '50%', xs: '100%', },

                            flexGrow: '1',
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
                    >Proceed To Payment</Button>
                </Box>
            </Stack>
        </>
    )
}
