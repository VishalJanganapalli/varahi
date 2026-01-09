import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import services from '../data/services'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import check from '../assets/check-circle.svg'

const ServiceDetails = () => {
  const { slug } = useParams()

  const openConsultationForm = (serviceName) => {
    window.dispatchEvent(
      new CustomEvent('open-consultation-form', {
        detail: { source: 'service-details', service: serviceName }
      })
    )
  }

  const service = React.useMemo(() => {
    return services.find((s) => s.slug === slug)
  }, [slug])

  const [selectedPackage, setSelectedPackage] = React.useState(null)
  const [selectedTier, setSelectedTier] = React.useState(null)

  React.useEffect(() => {
    setSelectedPackage(service?.packages?.[0]?.id ?? null)
    setSelectedTier(service?.tiers?.[0] ?? null)
  }, [service])

  if (!service) {
    return (
      <Box sx={{ py: { xs: 3, md: 6 } }}>
        <Typography variant="h6" fontWeight={600}>
          Service not found
        </Typography>
      </Box>
    )
  }

  return (
    <Box sx={{ py: { xs: 3, md: 6 } }}>
      <Grid container spacing={{ xs: 3, md: 4 }}>
        <Grid size={{ xs: 12, md: 4.5 }}>
          <Box
            sx={{
              width: '100%',
              height: { xs: 280, md: 430 },
              borderRadius: '12px',
              overflow: 'hidden',
              position: 'relative',
              backgroundImage: `url(${service.heroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(180deg, rgba(0,0,0,0.15) 45%, rgba(0,0,0,0.75) 100%)'
              }}
            />
            <Typography
              sx={{
                position: 'absolute',
                left: 16,
                bottom: 18,
                color: '#fff',
                fontWeight: 800,
                fontSize: { xs: 22, md: 26 },
                maxWidth: '90%'
              }}
            >
              {service.heroTitle ?? service.name}
            </Typography>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 7.5 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: { xs: 'flex-start', md: 'center' },
              justifyContent: 'space-between',
              gap: 2,
              flexWrap: 'wrap'
            }}
          >
            <Box sx={{ minWidth: 0 }}>
              <Typography
                sx={{
                  fontSize: { xs: 20, md: 22 },
                  fontWeight: 700,
                  color: '#000'
                }}
              >
                {service.name}
              </Typography>

              <Box
                sx={{
                  mt: 1,
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: '#FFE9DD',
                  px: 2,
                  py: 0.8,
                  borderRadius: '6px'
                }}
              >
                <Typography
                  sx={{
                    color: '#ff6a00',
                    fontSize: 12,
                    fontWeight: 600,
                    fontStyle: 'italic'
                  }}
                >
                  {service.priceStartText}
                </Typography>
              </Box>
            </Box>

            <Button
              variant="contained"
              onClick={() => openConsultationForm(service.name)}
              sx={{
                backgroundColor: '#ff6a00',
                borderRadius: '6px',
                textTransform: 'none',
                fontWeight: 600,
                px: 3,
                boxShadow: 'none',
                '&:hover': { backgroundColor: '#e85f00', boxShadow: 'none' }
              }}
            >
              Book free consultation
            </Button>
          </Box>

          {service.packages?.length ? (
            <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {service.packages.map((p) => (
                <Box
                  key={p.id}
                  onClick={() => setSelectedPackage(p.id)}
                  sx={{
                    px: 1.5,
                    py: 0.6,
                    borderRadius: '6px',
                    border: '1px solid #E5E5E5',
                    backgroundColor: selectedPackage === p.id ? '#FFF3E6' : '#fff',
                    cursor: 'pointer'
                  }}
                >
                  <Typography sx={{ fontSize: 12, fontWeight: 600, color: '#000' }}>
                    {p.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          ) : null}

          {service.tiers?.length ? (
            <Box sx={{ mt: 1.5, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              {service.tiers.map((tier) => (
                <Box
                  key={tier}
                  onClick={() => setSelectedTier(tier)}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.75,
                    cursor: 'pointer'
                  }}
                >
                  <RadioButtonCheckedIcon
                    sx={{
                      fontSize: 12,
                      color: selectedTier === tier ? '#ff6a00' : '#CFCFCF'
                    }}
                  />
                  <Typography sx={{ fontSize: 12, color: '#000', fontWeight: 600 }}>
                    {tier}
                  </Typography>
                </Box>
              ))}
            </Box>
          ) : null}

          <Grid container justifyContent={'space-between'} spacing={{ xs: 2, md: 3 }} sx={{ mt: 2 }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 700,
                  fontStyle: 'italic',
                  color: '#000',
                  mb: 1.5
                }}
              >
                {service.workFlowTitle ?? 'Varahi work flow'}
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.4 }}>
                {service.workFlow.map((item) => (
                  <Box key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                    <Box
                      component="img"
                      src={check}
                      alt="check"
                      sx={{ width: 14, height: 14, mt: '2px' }}
                    />
                    <Typography sx={{ fontSize: 12, color: '#444', lineHeight: 1.5 }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 3.5 }} sx={{mt:-2}}>
              <Box
                sx={{
                  backgroundColor: '#F3F6B6',
                  borderRadius: '8px',
                  p: 2.2,
                  textAlign:'center',
                  minHeight: { xs: 'auto', md: 120 }
                }}
              >
                <Typography sx={{ fontSize: 12, color: '#222', fontWeight: 600, lineHeight: 1.5 }}>
                  {service.note}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ServiceDetails
