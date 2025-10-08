import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useTheme } from '@mui/material/styles';
import modalImg from '../../assets/bg-1.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import CloseIcon from '@mui/icons-material/Close';



export default function SignUpModal({ modalState }) {
    const [modalOpen, setModalOpen] = React.useState(null)

    React.useEffect(() => {
        if (modalState) {
            setTimeout(() => {
                setModalOpen(true)
            }, 5000);
        }
    }, [modalState])

    const theme = useTheme()
    const handleClose = () => setModalOpen(false);

    return (
        <div style={{ zIndex: 6000 }} >
            <Modal
                open={modalOpen}
                onClose={handleClose}
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '75%',
                    height: { xs: '60vh', md: '70vh' },
                    p: { xs: '20px 0', md: 0 },
                    bgcolor: 'background.paper',
                    borderRadius: '10px',
                    boxShadow: 24,
                    outline: 'none',
                    '&:hover': {
                        border: 'none'
                    },
                    display: 'flex', justifyContent: 'center', alignItems: 'center'
                }}>
                    <Box sx={{ height: '100%', width: '50%', float: 'left', display: { xs: 'none', md: 'block' } }}>
                        <Box
                            component="img"
                            src={modalImg}
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                borderRadius: '10px',

                            }}
                        />
                    </Box>
                    <Box sx={{
                        height: '100%',
                        textAlign: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        justifyContent: 'center',

                    }}>
                        <Typography id="modal-modal-title" variant="h6">
                            UP TO 30% OFF
                        </Typography>
                        <Typography id="modal-modal-description" variant="h4" >
                            Sign up to BAZAAR
                        </Typography>
                        <Typography id="modal-modal-description" variant="body1" sx={{ mt: 1, color: theme.palette.secondary.light, }}>
                            Subscribe to the BAZAR eCommerce newsletter to receive timely updates from your favorite products.
                        </Typography>
                        <Box component="form" sx={{ width: '100%', mt: { xs: 3, md: 4 }, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                            <input type="email" placeholder='Enter your email' style={{
                                textAlign: 'center',
                                width: '70%', padding: '10px 0', borderRadius: '5px', border: `1px solid gray`,
                                '&:focus': { outline: `2px solid ${theme.palette.primary.dark}` }
                            }} />
                            <Button variant="contained" sx={{
                                bgcolor: theme.palette.secondary.main, color: 'white', width: '70%', p: '10px 15px', borderRadius: '5px',
                                boxShadow: 'none',
                            }}>
                                Sign Up
                            </Button>
                        </Box>
                        <Box sx={{ mt: { xs: 3, md: 4 }, }}>
                            <a href='#'><FacebookIcon sx={{
                                cursor: 'pointer', color: theme.palette.secondary.dark, borderRadius: '5px', transition: '.3s all',
                                '&:hover': {
                                    bgcolor: 'lightgray'
                                }
                            }} /></a>
                            <a href='#'><InstagramIcon sx={{
                                cursor: 'pointer', color: theme.palette.secondary.dark, mx: 2, borderRadius: '5px', transition: '.3s all',
                                '&:hover': {
                                    bgcolor: 'lightgray'
                                }
                            }} /></a>
                            <a href='#'><XIcon sx={{
                                cursor: 'pointer', color: theme.palette.secondary.dark, borderRadius: '5px', transition: '.3s all',
                                '&:hover': {
                                    bgcolor: 'lightgray'
                                }
                            }} /></a>

                        </Box>

                    </Box>
                    <CloseIcon onClick={handleClose} sx={{ position: 'absolute', top: '10px', right: '10px', cursor: "pointer" }} />
                </Box>
            </Modal>
        </div>
    );
}