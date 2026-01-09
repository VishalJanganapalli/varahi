import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Decision = () => {
    const data = [
        {
            count: "2,500+",
            title: "Completed Projects"
        },
        {
            count: "1,500+",
            title: "Executed Plans"
        },
        {
            count: "4,500+",
            title: "On site workers"
        },
        {
            count: "2,000+",
            title: "Satisfied clients"
        }
    ]

    return (
        <Box sx={{backgroundColor:'#000000', pt:2, pb:6}}>
            <Typography variant="h5" color="#ff6a00" my={4} textAlign={'center'} fontWeight={600}>You’ve Made a Great Decision</Typography>
            <Grid container spacing={4}>
                 {
                    data.map((item)=>{
                        return (
                            <Grid size={{xs:12, sm:6, md:3}} sx={{border:'1px solid #FF660069', textAlign:'center', borderRadius:'15px', padding:'20px ', backgroundColor:'#292929', ":hover":{boxShadow:'0px 0px 20px rgba(196, 108, 27, 0.77)'}}}>
                                <Typography variant="h5" fontWeight={600} color="#ff6a00">{item.count}</Typography>
                                <Typography variant="body1" color="#ff6a00">{item.title}</Typography>
                            </Grid>
                        )
                    })
                 }
            </Grid>
        </Box>
    )
}

export default Decision
