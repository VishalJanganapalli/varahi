import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import avaliableBg from '../assets/bg.png'

const Avaliable = () => {
    const openConsultationForm = () => {
        window.dispatchEvent(
            new CustomEvent('open-consultation-form', {
                detail: { source: 'avaliable' }
            })
        )
    }

    return (
        <Box>
            <Box
                sx={{
                    height: { xs: 300, md: 350 },
                    backgroundImage: `url(${avaliableBg}) `,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    color: "#fff",
                    px: 2
                }}
            >
                <Box maxWidth={700}>
                    <Typography
                        // variant="h5"
                        fontSize={'30px'}
                        fontWeight="600"
                        gutterBottom
                    >
                        Yes, we are available in Hyderabad
                        <br />
                        and surrounding areas.
                    </Typography>

                    <Typography maxWidth={600}
                        fontSize={'16px'}
                        fontWeight="400"
                        sx={{ opacity: 0.9, mb: 3 }}
                    >
                        Independent houses, residential villas, and commercial
                        buildings start from ₹1,999 per square foot
                    </Typography>

                    <Button
                        variant="contained"
                        onClick={openConsultationForm}
                        sx={{
                            backgroundColor: "#ff6a00ff",
                            px: 3,
                            py: 1.2,
                            fontWeight: "500",
                            borderRadius: '5px'

                        }}
                    >
                        Book free consultation
                    </Button>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', py: 6 }}>
                <Typography
                    fontSize={'30px'}
                    fontWeight="600"
                    color="black"
                    mb={2}
                >
                    Professionals Wanted
                </Typography>
                <Typography
                    fontSize={'16px'}
                    fontWeight="400"
                    color="grey"
                    mb={2}
                    maxWidth={700}
                >
                    Home Triangle helps you highlight your expertise and connect with verified homeowners. Boost your visibility and scale your business effortlessly.
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#ff6a00ff",
                        px: 3,
                        py: 1.2,
                        mt: 1.5,
                        fontWeight: "500",
                        borderRadius: '5px'

                    }}
                >
                    Join Our Network
                </Button>
            </Box>
        </Box>
    )
}

export default Avaliable
