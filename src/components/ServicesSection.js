import { Box, Typography, Grid, useTheme } from '@mui/material'
import React from 'react'

import icon1 from '../assets/renovation.svg';
import icon2 from '../assets/demolition.svg';
import icon3 from '../assets/construction.svg';
import icon4 from '../assets/excavator.svg';
import icon5 from '../assets/painting.svg';
import icon6 from '../assets/protection.svg';
import icon7 from '../assets/rocks.svg';
import icon8 from '../assets/civil.svg';
import icon9 from '../assets/interior-design.svg';

const ServicesSection = () => {

    const servicesData = [
        {
            "name": "Renovation",
            "icon": icon1
        },
        {
            "name": "Demolition",
            "icon": icon2
        },
        {
            "name": "Construction",
            "icon": icon3
        },
        {
            "name": "Earth Excavation",
            "icon": icon4
        },
        {
            "name": "Painting",
            "icon": icon5
        },
        {
            "name": "Waterproofing",
            "icon": icon6
        },
        {
            "name": "Rock Cutting",
            "icon": icon7
        },
        {
            "name": "Civil",
            "icon": icon8
        },
        {
            "name": "Interior",
            "icon": icon9
        }
    ]


    const theme = useTheme();
    return (
        <Box sx={{
            width: '100%',
            py: 4,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // background: 'linear-gradient(90deg, #fff 60%, #f8fafc 100%)',
        }}>
            <Grid
                container
                spacing={{ xs: 2, sm: 3, md: 4 }}
                justifyContent="center"
                alignItems="stretch"
              
            >
                {servicesData.map((service, idx) => (
                    <Grid
                        size={{ xs: 4, sm: 4, md: 4, lg: 1.33 }}

                        key={service.name}
                        sx={{ display: 'flex', justifyContent: 'space-between' }}
                    >
                        <Box
                            sx={{
                                background: '#fff',
                                borderRadius: 3,
                                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.07)',
                                p: 3,
                                minWidth: 120,
                                minHeight: 140,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'box-shadow 0.2s',
                                '&:hover': {
                                    boxShadow: '0 4px 24px 0 rgba(0,0,0,0.12)',
                                },
                            }}
                        >
                            <Box
                                component="img"
                                src={service.icon}
                                alt={service.name}
                                sx={{
                                    width: 56,
                                    height: 56,
                                    mb: 2,
                                    objectFit: 'contain',
                                }}
                            />
                            <Typography
                                variant="subtitle2"
                                color="black"
                                align="center"
                                sx={{ fontWeight: 500 }}
                            >
                                {service.name}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default ServicesSection
