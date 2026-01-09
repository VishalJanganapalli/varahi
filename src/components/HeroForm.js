// import React from 'react'
// import { Box, Typography, TextField, Button } from '@mui/material';


// const HeroForm = () => {
//   return (
//     <div>
//       <Box
//             sx={{
//                 // background: 'linear-gradient(90deg, #FFE6D5 0%, #FFF9D6 100%)',
//                 py: { xs: 4, sm: 6 },
//                 px: { xs: 2, sm: 2 },
//                 marginTop:'-50px'
//             }}
//         >
//             <Box
//                 sx={{
//                     maxWidth: 1100,
//                     mx: 'auto',
//                     backgroundColor: '#fff',
//                     borderRadius: '16px',
//                     boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
//                     p: { xs: 3, sm: 4 }
//                 }}
//             >
//                 <Typography
//                     sx={{
//                         fontWeight: 600,
//                         mb: 3,
//                         color:'black',
//                         fontSize: { xs: 16, sm: 18 }
//                     }}
//                 >
//                     High-Quality Construction That Fits Your Budget
//                 </Typography>

//                 <Box
//                     sx={{
//                         display: 'flex',
//                         flexDirection: { xs: 'column', md: 'row' },
//                         gap: 2,
//                         alignItems: 'center'
//                     }}
//                 >
//                     <TextField
//                         placeholder="Full Name"
//                         // fullWidth
//                         size="small"
//                     />

//                     <TextField
//                         placeholder="Your mobile number"
//                         // fullWidth
//                         size="small"
//                     />

//                     <TextField
//                         placeholder="Site location/area"
//                         // fullWidth
//                         size="small"
//                     />

//                     <Button
//                         variant="contained"
//                         sx={{
//                             backgroundColor: '#2c2c2c',
//                             px: 3,
//                             py: 1.2,
//                             borderRadius: '8px',
//                             textTransform: 'none',
//                             fontWeight: 500,
//                             whiteSpace: 'nowrap',
//                             '&:hover': {
//                                 backgroundColor: '#000'
//                             }
//                         }}
//                     >
//                         Book a consultation
//                     </Button>
//                 </Box>
//             </Box>
//         </Box>
//     </div>
//   )
// }

// export default HeroForm


import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';

const HeroForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    location: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <Box
      sx={{
        py: { xs: 4, sm: 6 },
        px: { xs: 2, sm: 2 },
        marginTop: '-50px',
        width: '100%'
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
        //   maxWidth: 1100,
          mx: 'auto',
          backgroundColor: '#fff',
          borderRadius: '16px',
          boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
          p: { xs: 3, sm: 4 }
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            mb: 3,
            color: 'black',
            fontSize: { xs: 16, sm: 18 }
          }}
        >
          High-Quality Construction That Fits Your Budget
        </Typography>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4} md={3} size={{xs:12, sm:4, md:3}}>
            <TextField
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              size="small"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#ddd' },
                  '&:hover fieldset': { borderColor: '#ff6a00' },
                  '&.Mui-focused fieldset': { borderColor: '#ff6a00' }
                },
                '& .MuiInputBase-input': {
                  color: '#000',
                  '&::placeholder': {
                    color: '#9e9e9e',
                    opacity: 1
                  }
                }
              }}
            />
          </Grid>

          <Grid item xs={12} sm={4} md={3} size={{xs:12, sm:4, md:3}}>
            <TextField
              fullWidth
              name="mobile"
              type="tel"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Your mobile number"
              size="small"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#ddd' },
                  '&:hover fieldset': { borderColor: '#ff6a00' },
                  '&.Mui-focused fieldset': { borderColor: '#ff6a00' }
                },
                '& .MuiInputBase-input': {
                  color: '#000',
                  '&::placeholder': {
                    color: '#9e9e9e',
                    opacity: 1
                  }
                }
              }}
            />
          </Grid>

          <Grid item xs={12} sm={4} md={3} size={{xs:12, sm:4, md:3}}>
            <TextField
              fullWidth
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Site location/area"
              size="small"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#ddd' },
                  '&:hover fieldset': { borderColor: '#ff6a00' },
                  '&.Mui-focused fieldset': { borderColor: '#ff6a00' }
                },
                '& .MuiInputBase-input': {
                  color: '#000',
                  '&::placeholder': {
                    color: '#9e9e9e',
                    opacity: 1
                  }
                }
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={3} size={{xs:12, sm:4, md:3}}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                py: 1.2,
                backgroundColor: '#2c2c2c',
                borderRadius: '8px',
                textTransform: 'none',
                fontWeight: 500,
                whiteSpace: 'nowrap',
                '&:hover': {
                  backgroundColor: '#000'
                }
              }}
            >
              Book a consultation
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HeroForm;