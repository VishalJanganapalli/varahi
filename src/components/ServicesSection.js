import { Box, Typography, Grid } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import services from '../data/services'

const ServicesSection = () => {
    const navigate = useNavigate()

    const handleServiceClick = (slug) => {
        navigate(`/service/${slug}`)
    }
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
                {services.map((service) => (
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
                                cursor: 'pointer',
                                '&:hover': {
                                    boxShadow: '0 4px 24px 0 rgba(0,0,0,0.12)',
                                },
                            }}
                            onClick={() => handleServiceClick(service.slug)}
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
