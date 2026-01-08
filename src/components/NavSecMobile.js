
import React from 'react'
import { Box, IconButton, InputAdornment, OutlinedInput, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SearchIcon from '@mui/icons-material/Search'

const NavSecMobile = () => {
  return (
    <Box
      sx={{
        display: { xs: 'block', md: 'none' },
        // px: 2,
        pb: 2,
        pt: 3,
        
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.2 }}>
        <LocationOnIcon sx={{ color: '#ff6a00', mt: '2px' }} />

        <Box sx={{ minWidth: 0 }}>
          <Typography sx={{ fontSize: 22, fontWeight: 700, color: '#000', lineHeight: 1.2 }}>
            Madhapur
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Typography sx={{ fontSize: 16, color: '#8C8C8C', fontWeight: 500 }}>
              Select your location
            </Typography>
            <KeyboardArrowDownIcon sx={{ color: '#8C8C8C' }} />
          </Box>
        </Box>
      </Box>

      <Box sx={{ mt: 2 }}>
        <OutlinedInput
          fullWidth
          placeholder="Which service are you looking for?"
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end" sx={{ color: '#ff6a00' }}>
                <SearchIcon sx={{ fontSize: 30 }} />
              </IconButton>
            </InputAdornment>
          }
          sx={{
            height: 54,
            borderRadius: '10px',
            backgroundColor: '#fff',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#D9D9D9'
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#D0D0D0'
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#D9D9D9'
            },
            '& input::placeholder': {
              color: '#9B9B9B',
              opacity: 1
            }
          }}
        />
      </Box>
    </Box>
  )
}

export default NavSecMobile

