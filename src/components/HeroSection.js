

import React from 'react';
import { Box, Grid, Typography, Button, Stack } from '@mui/material';

function HeroSection() {
  const openConsultationForm = () => {
    window.dispatchEvent(
      new CustomEvent('open-consultation-form', {
        detail: { source: 'hero' }
      })
    )
  }

  return (
    <Box sx={{
      width: '100%',
      minHeight: { xs: 400, md: 420 },
      background: 'linear-gradient(90deg, #fff 60%, #FFF3E6 100%)',
      py: { xs: 4, md: 8 },
     
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Grid container spacing={{ xs: 2, md: 4 }} alignItems="center" justifyContent="center">
        {/* Left: Image */}
        <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
          <img
            src={require('../assets/hero-sec-img.png')}
            alt="Hero Section"
            style={{ width: '100%', height: 'auto', borderRadius: 12 }}
          />
        </Grid>
        {/* Right: Content */}
        <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' }, justifyContent: 'center', height: '100%' }}>
          <Typography variant="h3" fontWeight={700} fontStyle={'italic'} color="initial">Complete <span style={{ color: '#FF6600' }}>Home Construction</span> Solutions</Typography>
          <Typography
            sx={{
              color: '#222',
              fontSize: { xs: 15, md: 18 },
              mb: 3,
              mt: 1,
              textAlign: { xs: 'center', md: 'left' },
              fontWeight: 400,
            }}
          >
            Design, build, and deliver — everything under one roof.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 2, width: { xs: '100%', sm: 'auto' }, alignItems: { xs: 'center', sm: 'flex-start' } }}>
            <Button
              variant="contained"
              onClick={openConsultationForm}
              sx={{
                background: '#FF6600',
                color: '#fff',
                fontWeight: 600,
                px: 3,
                borderRadius: 2,
                fontSize: 16,
                boxShadow: 'none',
                '&:hover': { background: '#e65c00' },
                textTransform: 'none',
              }}
            >
              Book free consultation
            </Button>
            <Button
              variant="contained"
              sx={{
                background: '#000',
                color: '#fff',
                fontWeight: 600,
                px: 3,
                borderRadius: 2,
                fontSize: 16,
                boxShadow: 'none',
                '&:hover': { background: '#222' },
                textTransform: 'none',
              }}
            >
              See our services
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HeroSection;

