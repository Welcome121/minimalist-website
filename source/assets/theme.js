import React from 'react'
import { createTheme } from '@mui/material/styles'


const theme = createTheme({
    palette: {
        primary: {
            light: '#000',
            main: '#000',
            dark: '#55B3D9',
            contrastText: '#FFFFFF'
        },
        secondary: {
            light: '#F0ECFE',
            main: '#8465F6',
            dark: '#4F22F2',
            contrastText: '#FFFFFF'
        }
    }
})

export default theme

