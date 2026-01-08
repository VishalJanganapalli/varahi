import { Box, Typography, Grid, Button } from '@mui/material'
import React from 'react'

import icon from '../assets/black-white-underconstruction-building-transparent-background 1.svg'
import siteInspection from '../assets/site-inspection.png';
import modularKitchen from '../assets/modular-kitchen.png';
import cleaning from '../assets/cleaning.png';
import handtool from '../assets/handtool.png'


const trustedData = [
    {
        label: '100% on time Delivery',
        highlight: true,
        icon: icon // Replace with actual icon if available
    },
    {
        label: 'Quality Building Materials',
        highlight: false,
        icon: icon
    },
    {
        label: 'Dedicated Project Managers',
        highlight: false,
        icon: icon
    },
    {
        label: 'Certified Civil Engineers',
        highlight: false,
        icon: icon
    }
];

const choosenServices = [
    {
        image: siteInspection,
        title: 'Site inspection & measurement',
        startFrom: 1500,
        button: 'Consult Now'
    },
    {
        image: modularKitchen,
        title: 'Modular kitchen installation',
        startFrom: 2500,
        button: 'Consult Now'
    },
    {
        image: cleaning,
        title: 'Cleaning & crack filling',
        startFrom: 1800,
        button: 'Consult Now'
    },
    {
        image: handtool,
        title: 'Hand tool cutting',
        startFrom: 2200,
        button: 'Consult Now'
    },
    {
        image: siteInspection,
        title: 'Site inspection & measurement',
        startFrom: 1500,
        button: 'Consult Now'
    },
    {
        image: modularKitchen,
        title: 'Modular kitchen installation',
        startFrom: 2500,
        button: 'Consult Now'
    },
    {
        image: cleaning,
        title: 'Cleaning & crack filling',
        startFrom: 1800,
        button: 'Consult Now'
    },
    {
        image: handtool,
        title: 'Hand tool cutting',
        startFrom: 2200,
        button: 'Consult Now'
    }
]

const Trusted = () => {
    return (
        <Box>
            <Box sx={{ py: 6, textAlign: "center", backgroundColor: "#fff" }}>
                <Typography
                    variant="h5"
                    color='black'
                    sx={{ fontWeight: 600, mb: 5 }}
                >
                    Why We’re a Trusted Building <br /> Contractor in Hyderabad
                </Typography>

                <Grid container spacing={3} >
                    {trustedData.map((item, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <Box
                                sx={{
                                    border: "1px solid #eee",
                                    borderRadius: "12px",
                                    padding: 3,
                                    height: "100%",
                                    display: "flex",
                                    // flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "space-evenly",
                                    gap: '25px',
                                    backgroundColor: "#F9F9F9",
                                    color: "#000",
                                    transition: "all 0.1s ease-in-out",
                                    cursor: 'pointer',
                                    "&:hover": {
                                        backgroundColor: "#ff6a00",
                                        color: "#fff",
                                        boxShadow: "0 6px 20px rgba(0,0,0,0.08)"
                                    }
                                }}
                            >

                                <img
                                    src={item.icon}
                                    // alt={item.label}

                                    style={{ width: 65, height: 65, borderRadius: '50%', border: '1px solid lightgrey' }}
                                />
                                <Typography
                                    variant="body1"
                                    sx={{ fontWeight: 500 }}
                                >
                                    {item.label}
                                </Typography>
                            </Box>


                        </Grid>
                    ))}
                </Grid>

                <Box sx={{ mt: 5 }}>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#ff6a00",
                            borderRadius: "8px",
                            px: 4,
                            py: 1.2,
                            textTransform: "none",
                            fontWeight: 500,
                            "&:hover": {
                                backgroundColor: "#e85f00"
                            }
                        }}
                    >
                        Book free consultation
                    </Button>
                </Box>
            </Box>

            <Box sx={{py:4, pb:8}}>
                <Typography
                    variant="h5"
                    fontWeight={600}
                    sx={{ color: '#ff6a00', mb: 2, textAlign: 'left', fontSize: { xs: 18, sm: 20 } }}
                >
                    Our Most Choosen Services
                </Typography>

                <Grid
                    container
                    spacing={2}
                    sx={{
                        flexWrap: 'nowrap',
                        overflowX: 'auto',
                        pb: 1,
                        WebkitOverflowScrolling: 'touch',
                        '&::-webkit-scrollbar': { display: 'none' },
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    }}
                >
                    {choosenServices.map((service) => (
                        <Grid
                            key={service.title}
                            sx={{
                                flex: '0 0 auto'
                            }}
                        >
                            <Box
                                sx={{
                                    width: { xs: 300, sm: 350, md: 355 },
                                    borderRadius: '12px',
                                    backgroundColor: '#fff',
                                    border: '1px solid #f0f0f0',
                                    overflow: 'hidden'
                                }}
                            >
                                <Box
                                    component="img"
                                    src={service.image}
                                    alt={service.title}
                                    sx={{
                                        width: '100%',
                                        height: { xs: 110, sm: 165 },
                                        objectFit: 'cover'
                                    }}
                                />
                                <Box
                                    sx={{
                                        px: 1.25,
                                        py: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        gap: 1
                                    }}
                                >
                                    <Box sx={{ minWidth: 0 }}>
                                        <Typography
                                            sx={{
                                                fontSize:'13px',
                                                fontWeight: 500,
                                                color: '#000',
                                                lineHeight: 1.2,
                                                display: '-webkit-box',
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden'
                                            }}
                                        
                                        >
                                            {service.title}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontWeight: 600,
                                                color: '#ff6a00',
                                                mt: 0.5
                                            }}
                                            variant='body1'
                                        >
                                            Start from {service.startFrom}
                                        </Typography>
                                    </Box>

                                    <Button
                                        variant="outlined"
                                        size="small"
                                        sx={{
                                            flexShrink: 0,
                                            borderColor: '#ff6a00',
                                            color: '#ff6a00',
                                            textTransform: 'none',
                                            fontSize: 11,
                                            fontWeight: 600,
                                            borderRadius: '8px',
                                            px: 1.5,
                                            py: 0.8,
                                            minWidth: 'auto',
                                            '&:hover': {
                                                color:'white',
                                                backgroundColor: '#ff6a00'
                                            }
                                        }}
                                    >
                                        {service.button}
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

        </Box>

    );
}

export default Trusted
