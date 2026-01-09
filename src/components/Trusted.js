// import { Box, Typography, Grid, Button } from '@mui/material'
// import React from 'react'

// import icon from '../assets/black-white-underconstruction-building-transparent-background 1.svg'
// import siteInspection from '../assets/site-inspection.png';
// import modularKitchen from '../assets/modular-kitchen.png';
// import cleaning from '../assets/cleaning.png';
// import handtool from '../assets/handtool.png'

// import heartBlack from '../assets/hand-holding-heart black.svg';
// import heartOrange from '../assets/hand-holding-heart orange.svg';





// const trustedData = [
//     {
//         label: '100% on time Delivery',
//         highlight: true,
//         icon: heartBlack,
//         icon2: heartOrange
//     },
//     {
//         label: 'Quality Building Materials',
//         highlight: false,
//         icon: heartBlack,
//         icon2: heartOrange
//     },
//     {
//         label: 'Dedicated Project Managers',
//         highlight: false,
//         icon: heartBlack,
//         icon2: heartOrange
//     },
//     {
//         label: 'Certified Civil Engineers',
//         highlight: false,
//         icon: heartBlack,
//         icon2: heartOrange
//     }
// ];

// const choosenServices = [
//     {
//         image: siteInspection,
//         title: 'Site inspection & measurement',
//         startFrom: 1500,
//         button: 'Consult Now'
//     },
//     {
//         image: modularKitchen,
//         title: 'Modular kitchen installation',
//         startFrom: 2500,
//         button: 'Consult Now'
//     },
//     {
//         image: cleaning,
//         title: 'Cleaning & crack filling',
//         startFrom: 1800,
//         button: 'Consult Now'
//     },
//     {
//         image: handtool,
//         title: 'Hand tool cutting',
//         startFrom: 2200,
//         button: 'Consult Now'
//     },
//     {
//         image: siteInspection,
//         title: 'Site inspection & measurement',
//         startFrom: 1500,
//         button: 'Consult Now'
//     },
//     {
//         image: modularKitchen,
//         title: 'Modular kitchen installation',
//         startFrom: 2500,
//         button: 'Consult Now'
//     },
//     {
//         image: cleaning,
//         title: 'Cleaning & crack filling',
//         startFrom: 1800,
//         button: 'Consult Now'
//     },
//     {
//         image: handtool,
//         title: 'Hand tool cutting',
//         startFrom: 2200,
//         button: 'Consult Now'
//     }
// ]

// const Trusted = () => {
//     return (
//         <Box>
//             <Box sx={{ py: 6, textAlign: "center", backgroundColor: "#fff" }}>
//                 <Typography
//                     variant="h5"
//                     color='black'
//                     sx={{ fontWeight: 600, mb: 5 }}
//                 >
//                     Why We’re a Trusted Building <br /> Contractor in Hyderabad
//                 </Typography>

//                 <Grid container spacing={3} >
//                     {trustedData.map((item, index) => (
//                         <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
//                             <Box
//                                 sx={{
//                                     border: "1px solid #eee",
//                                     borderRadius: "12px",
//                                     padding: 3,
//                                     height: "100%",
//                                     display: "flex",
//                                     // flexDirection: "column",
//                                     alignItems: "center",
//                                     justifyContent: "space-evenly",
//                                     gap: '25px',
//                                     backgroundColor: "#F9F9F9",
//                                     color: "#000",
//                                     transition: "all 0.1s ease-in-out",
//                                     cursor: 'pointer',
//                                     "&:hover": {
//                                         backgroundColor: "#ff6a00",
//                                         color: "#fff",
//                                         boxShadow: "0 6px 20px rgba(0,0,0,0.08)"
//                                     }
//                                 }}
//                             >

//                                <Box sx={{width:'85px', height:'65px', display:'flex', alignItems:'center',justifyContent:'center', borderRadius: '50%', border: '1px solid lightgrey'}}>
//                                  <img
//                                     src={item.icon}
//                                     // alt={item.label}

//                                     style={{ width: 35, height: 35 }}
//                                 />
//                                </Box>
//                                 <Typography
//                                     variant="body1"
//                                     sx={{ fontWeight: 500 }}
//                                 >
//                                     {item.label}
//                                 </Typography>
//                             </Box>


//                         </Grid>
//                     ))}
//                 </Grid>

//                 <Box sx={{ mt: 5 }}>
//                     <Button
//                         variant="contained"
//                         sx={{
//                             backgroundColor: "#ff6a00",
//                             borderRadius: "8px",
//                             px: 4,
//                             py: 1.2,
//                             textTransform: "none",
//                             fontWeight: 500,
//                             "&:hover": {
//                                 backgroundColor: "#e85f00"
//                             }
//                         }}
//                     >
//                         Book free consultation
//                     </Button>
//                 </Box>
//             </Box>

//             <Box sx={{ py: 4, pb: 8 }}>
//                 <Typography
//                     variant="h5"
//                     fontWeight={600}
//                     sx={{ color: '#ff6a00', mb: 2, textAlign: 'left', fontSize: { xs: 18, sm: 20 } }}
//                 >
//                     Our Most Choosen Services
//                 </Typography>

//                 <Grid
//                     container
//                     spacing={2}
//                     sx={{
//                         flexWrap: 'nowrap',
//                         overflowX: 'auto',
//                         pb: 1,
//                         WebkitOverflowScrolling: 'touch',
//                         '&::-webkit-scrollbar': { display: 'none' },
//                         scrollbarWidth: 'none',
//                         msOverflowStyle: 'none'
//                     }}
//                 >
//                     {choosenServices.map((service) => (
//                         <Grid
//                             key={service.title}

//                             sx={{
//                                 flex: '0 0 auto',

//                             }}
//                         >
//                             <Box
//                                 sx={{
//                                     width: { xs: 300, sm: 350, md: 355 },
//                                     borderRadius: '12px',
//                                     backgroundColor: '#fff',
//                                     border: '1px solid #f0f0f0',
//                                     overflow: 'hidden'
//                                 }}
//                             >
//                                 <Box
//                                     component="img"
//                                     src={service.image}
//                                     alt={service.title}
//                                     sx={{
//                                         width: '100%',
//                                         height: { xs: 110, sm: 165 },
//                                         objectFit: 'cover'
//                                     }}
//                                 />
//                                 <Box
//                                     sx={{
//                                         px: 1.25,
//                                         py: 1,
//                                         display: 'flex',
//                                         alignItems: 'center',
//                                         justifyContent: 'space-between',
//                                         gap: 1
//                                     }}
//                                 >
//                                     <Box sx={{ minWidth: 0 }}>
//                                         <Typography
//                                             sx={{
//                                                 fontSize: '13px',
//                                                 fontWeight: 500,
//                                                 color: '#000',
//                                                 lineHeight: 1.2,
//                                                 display: '-webkit-box',
//                                                 WebkitLineClamp: 2,
//                                                 WebkitBoxOrient: 'vertical',
//                                                 overflow: 'hidden'
//                                             }}

//                                         >
//                                             {service.title}
//                                         </Typography>
//                                         <Typography
//                                             sx={{
//                                                 fontWeight: 600,
//                                                 color: '#ff6a00',
//                                                 mt: 0.5
//                                             }}
//                                             variant='body1'
//                                         >
//                                             Start from {service.startFrom}
//                                         </Typography>
//                                     </Box>

//                                     <Button
//                                         variant="outlined"
//                                         size="small"
//                                         sx={{
//                                             flexShrink: 0,
//                                             borderColor: '#ff6a00',
//                                             color: '#ff6a00',
//                                             textTransform: 'none',
//                                             fontSize: 11,
//                                             fontWeight: 600,
//                                             borderRadius: '8px',
//                                             px: 1.5,
//                                             py: 0.8,
//                                             minWidth: 'auto',
//                                             '&:hover': {
//                                                 color: 'white',
//                                                 backgroundColor: '#ff6a00'
//                                             }
//                                         }}
//                                     >
//                                         {service.button}
//                                     </Button>
//                                 </Box>
//                             </Box>
//                         </Grid>
//                     ))}
//                 </Grid>
//             </Box>

//         </Box>

//     );
// }

// export default Trusted


import React, { useState } from 'react'
import { Box, Typography, Grid, Button } from '@mui/material'

import siteInspection from '../assets/site-inspection.png';
import modularKitchen from '../assets/modular-kitchen.png';
import cleaning from '../assets/cleaning.png';
import handtool from '../assets/handtool.png';

import heartBlack from '../assets/hand-holding-heart black.svg';
import heartOrange from '../assets/hand-holding-heart orange.svg';

import starOrange from '../assets/star-orange.svg';
import starBlack from '../assets/star-black.svg';

import personOrange from '../assets/person-orange.svg';
import personBlack from '../assets/person-black.svg';

import shieldOrange from '../assets/shield-orange.svg'
import shieldBlack from '../assets/shield-black.svg'

const trustedData = [
    {
        label: '100% on time Delivery',
        highlight: true,
        icon: heartBlack,
        icon2: heartOrange
    },
    {
        label: 'Quality Building Materials',
        highlight: false,
        icon: starBlack,
        icon2: starOrange
    },
    {
        label: 'Dedicated Project Managers',
        highlight: false,
        icon: personBlack,
        icon2: personOrange
    },
    {
        label: 'Certified Civil Engineers',
        highlight: false,
        icon: shieldBlack,
        icon2: shieldOrange
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
    }
];

const Trusted = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <Box>

            {/* ================= Trusted Section ================= */}
            <Box sx={{ py: 6, textAlign: "center", backgroundColor: "#fff" }}>
                <Typography
                    variant="h5"
                    sx={{ fontWeight: 600, mb: 5 }}
                    color='black'
                >
                    Why We’re a Trusted Building <br /> Contractor in Hyderabad
                </Typography>

                <Grid container spacing={3}>
                    {trustedData.map((item, index) => {
                        const isActive = hoveredIndex === index || item.highlight;

                        return (
                            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                                <Box
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    sx={{
                                        border: '1px solid #eee',
                                        borderRadius: '12px',
                                        p: 3,
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-evenly',
                                        gap: '20px',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        backgroundColor: isActive ? '#ff6a00' : '#F9F9F9',
                                        color: isActive ? '#fff' : '#000',
                                        boxShadow: isActive
                                            ? '0 10px 25px rgba(0,0,0,0.15)'
                                            : 'none'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 70,
                                            height: 70,
                                            borderRadius: '50%',
                                            backgroundColor: '#fff',
                                            border: isActive
                                                ? '1px solid rgba(255,255,255,0.4)'
                                                : '1px solid #ddd',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 32,
                                                height: 32,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src={isActive ? item.icon2 : item.icon}
                                                alt={item.label}
                                                sx={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'contain'
                                                }}
                                            />
                                        </Box>
                                    </Box>


                                    <Typography
                                        sx={{
                                            fontWeight: 500,
                                            textAlign: 'left'
                                        }}
                                    >
                                        {item.label}
                                    </Typography>
                                </Box>
                            </Grid>
                        );
                    })}
                </Grid>

                <Box sx={{ mt: 5 }}>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#ff6a00',
                            borderRadius: '8px',
                            px: 4,
                            py: 1.2,
                            textTransform: 'none',
                            fontWeight: 500,
                            '&:hover': {
                                backgroundColor: '#e85f00'
                            }
                        }}
                    >
                        Book free consultation
                    </Button>
                </Box>
            </Box>

            {/* ================= Chosen Services Section ================= */}
            <Box sx={{ py: 4, pb: 8 }}>
                <Typography
                    variant="h5"
                    fontWeight={600}
                    sx={{ color: '#ff6a00', mb: 2 }}
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
                        '&::-webkit-scrollbar': { display: 'none' }
                    }}
                >
                    {choosenServices.map((service, index) => (
                        <Grid item key={index} sx={{ flex: '0 0 auto' }}>
                            <Box
                                sx={{
                                    width: { xs: 300, sm: 350 },
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
                                        height: 160,
                                        objectFit: 'cover'
                                    }}
                                />

                                <Box
                                    sx={{
                                        px: 1.5,
                                        py: 1.2,
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Box>
                                        <Typography fontSize={13} fontWeight={500} color='black'>
                                            {service.title}
                                        </Typography>
                                        <Typography
                                            fontWeight={600}
                                            color="#ff6a00"
                                            fontSize={14}
                                        >
                                            Start from {service.startFrom}
                                        </Typography>
                                    </Box>

                                    <Button
                                        variant="outlined"
                                        size="small"
                                        sx={{
                                            borderColor: '#ff6a00',
                                            color: '#ff6a00',
                                            textTransform: 'none',
                                            fontSize: 11,
                                            fontWeight: 600,
                                            borderRadius: '8px',
                                            '&:hover': {
                                                backgroundColor: '#ff6a00',
                                                color: '#fff'
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
};

export default Trusted;
