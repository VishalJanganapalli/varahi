import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import logo from '../assets/logo.svg'

const Footer = () => {
  const quickLinks = [
    'About Us',
    'Professionals',
    'Terms Of Use',
    'Privacy Policy',
    'Refund Policy',
    'Career'
  ]

  const servicesLeft = [
    'Renovation',
    'Demolition',
    'Construction',
    'Earth Excavation',
    'Painting'
  ]

  const servicesRight = [
    'Waterproofing',
    'Rock Cutting',
    'Civil',
    'Interior Design'
  ]

  const needHelp = [
    'Contact Us',
    'My Bookings',
    'Reviews',
    'Stories'
  ]

  return (
    <Box sx={{ backgroundColor: '#3A2F27', color: '#FFFFFF' }}>
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }}>
          <Grid size={{ xs: 12, sm: 6, md: 3.5 }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
              <Box
                component="img"
                src={logo}
                alt="Varahi"
                sx={{ height: 60, width: 'auto' }}
              />
            </Box>

            <Typography
              sx={{
                mt: 2,
                maxWidth: 340,
                fontSize: 12,
                lineHeight: 1.6,
                color: 'rgba(255,255,255,0.7)'
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2.5 }}>
            <Typography sx={{ fontWeight: 600, fontSize: 14, mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
              {quickLinks.map((item) => (
                <Typography
                  key={item}
                  sx={{
                    fontSize: 12,
                    color: 'rgba(255,255,255,0.7)',
                    cursor: 'pointer',
                    width: 'fit-content',
                    '&:hover': { color: '#ff6a00' }
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography sx={{ fontWeight: 600, fontSize: 14, mb: 2 }}>
              Our Services
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }}>
              <Grid size={{ xs: 6 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
                  {servicesLeft.map((item) => (
                    <Typography
                      key={item}
                      sx={{
                        fontSize: 12,
                        color: 'rgba(255,255,255,0.7)',
                        cursor: 'pointer',
                        width: 'fit-content',
                        '&:hover': { color: '#ff6a00' }
                      }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>
              </Grid>

              <Grid size={{ xs: 6 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
                  {servicesRight.map((item) => (
                    <Typography
                      key={item}
                      sx={{
                        fontSize: 12,
                        color: 'rgba(255,255,255,0.7)',
                        cursor: 'pointer',
                        width: 'fit-content',
                        '&:hover': { color: '#ff6a00' }
                      }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography sx={{ fontWeight: 600, fontSize: 14, mb: 2 }}>
              Need Help?
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
              {needHelp.map((item) => (
                <Typography
                  key={item}
                  sx={{
                    fontSize: 12,
                    color: 'rgba(255,255,255,0.7)',
                    cursor: 'pointer',
                    width: 'fit-content',
                    '&:hover': { color: '#ff6a00' }
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ backgroundColor: '#2D241E', py: 2 }}>
        <Container maxWidth="xl">
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: 11,
              color: 'rgba(255,255,255,0.55)'
            }}
          >
            ©2025 Varahi Building Future. All rights reserved
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}

export default Footer;
