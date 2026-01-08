import { Box, Typography } from '@mui/material'
import React from 'react'

import ss1 from '../assets/ss1.png';
import ss2 from '../assets/ss2.png';
import ss3 from '../assets/ss3.png';

const Success = () => {
    const successData = [ss1, ss2, ss3, ss1, ss2, ss3];

    return (
        <Box sx={{ py: 8 }}>
            <Typography
                fontSize={'30px'}
                        fontWeight="600"
                color="#ff6a00"
                mb={2}
                textAlign={'center'}
            >
                Varahi Success Stories
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, overflow:'scroll', scrollbarWidth:'none' }}>
                {successData.map((item, index) => (
                    <img
                        key={index}
                        src={item}
                        alt="success"
                        style={{ width: 270, borderRadius: 8 }}
                    />
                ))}
            </Box>
        </Box>
    )
}

export default Success;

