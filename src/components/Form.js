import React from 'react'
import {
  Backdrop,
  Box,
  Button,
  Checkbox,
  Fade,
  FormControlLabel,
  IconButton,
  Modal,
  TextField,
  Typography
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

const Form = ({ open, onClose, context }) => {
  const [name, setName] = React.useState('')
  const [mobile, setMobile] = React.useState('')
  const [location, setLocation] = React.useState('')
  const [consent, setConsent] = React.useState(false)

  const textFieldSx = {
    '& .MuiOutlinedInput-root': {
      color: '#000',
      '& input': {
        color: '#000'
      },
      '& input::placeholder': {
        color: '#9A9A9A',
        opacity: 1
      },
      '& fieldset': {
        borderColor: '#D0D0D0'
      },
      '&:hover fieldset': {
        borderColor: '#D0D0D0'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#D0D0D0'
      }
    }
  }

  React.useEffect(() => {
    if (!open) return
    setName('')
    setMobile('')
    setLocation('')
    setConsent(false)
  }, [open])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!consent) return
    onClose?.()
  }

  return (
    <Modal
      open={Boolean(open)}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 250,
          sx: {
            backgroundColor: 'rgba(0,0,0,0.7)'
          }
        }
      }}
    >
      <Fade in={Boolean(open)} timeout={250}>
        <Box
          sx={{
            position: 'fixed',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: 2
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              width: 350,
              maxWidth: '100%',
              borderRadius: '10px',
              backgroundColor: '#fff',
              boxShadow: '0 18px 60px rgba(0,0,0,0.35)',
              p: 3
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 2 }}>
              <Box>
                <Typography sx={{ fontSize: 17, fontWeight: 700, color: '#000', lineHeight: 1.2 }}>
                  Book a Free Consultation
                </Typography>
                <Typography sx={{ fontSize: 12, fontWeight: 400, color: '#7B7B7B', mt: 0.5 }}>
                  Premium Quality Construction at Affordable Prices
                </Typography>
              </Box>

              <IconButton
                onClick={onClose}
                size="small"
                sx={{
                  mt: '-2px',
                  color: '#000'
                }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>

            {context?.service ? (
              <Typography sx={{ fontSize: 10, color: '#9A9A9A', mt: 1 }}>
                {context.service}
              </Typography>
            ) : (
              <Typography sx={{ fontSize: 10, color: '#9A9A9A', mt: 1 }}>
                
              </Typography>
            )}

            <Box sx={{ mt: 1.5, display: 'flex', color:'black', flexDirection: 'column', gap: 1.2 }}>
              <TextField
                size="small"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                sx={textFieldSx}
              />
              <TextField
                size="small"
                placeholder="Mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                fullWidth
                sx={textFieldSx}
              />
              <TextField
                size="small"
                placeholder="Location of service area"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                fullWidth
                sx={textFieldSx}
              />
            </Box>

            <FormControlLabel
              sx={{ mt: 1.2, alignItems: 'flex-start' }}
              control={
                <Checkbox
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  size="small"
                />
              }
              label={
                <Typography sx={{ fontSize: 10, color: '#7B7B7B', mt: '2px' }}>
                  By submitting this form, I agree to Varahi Privacy Policy.
                </Typography>
              }
            />

            <Button
              type="submit"
              fullWidth
              disabled={!consent}
              sx={{
                mt: 1.2,
                backgroundColor: '#ff6a00',
                color: '#fff',
                textTransform: 'none',
                fontWeight: 700,
                borderRadius: '6px',
                py: 1,
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: '#e85f00',
                  boxShadow: 'none'
                },
                '&.Mui-disabled': {
                  backgroundColor: 'rgba(255,106,0,0.5)',
                  color: '#fff'
                }
              }}
            >
              Consult now
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  )
}

export default Form
