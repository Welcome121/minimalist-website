import { Box, Typography } from '@mui/material'
import React from 'react'



export default function Footer() {

  return (
    <>
        <Box
            sx={{
                width: "100%",
                padding: "50px 0px",
                textAlign: "center",
            }}
        >
            <Typography 
                variant="h6"
                sx={{
                    fontFamily: "Poppins",
                    fontSize: "12px",
                    letterSpacing: "2px",
                }}
            >
                COPYRIGHT © 2022. CREATE BY WELCOME
            </Typography>
        </Box>
    </>
  )
}
