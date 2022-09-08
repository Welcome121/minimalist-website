import React from 'react';

import { Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';

//'HOME', 'ABOUT', 'BLOG', 'CONTACT'
const pages = [
    {
        title: "HOME",
        path: "/",
    },
    {
        title: "ABOUT",
        path: "/about",
    },
    {
        title: "BLOG",
        path: "/blog",
    },
    {
        title: "CONTACT",
        path: "/contact",
    }
];

export default function Navbar() {

    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    }

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {
                    pages.map(page => (
                        <Box key={page.title} sx={{ margin: "0px 20px", cursor: "pointer" }} onClick={() => handleNavigate(page.path)}>
                            <Typography 
                                variant='h6' 
                                sx={{ 
                                    fontFamily: "Poppins",
                                    fontSize: "12px",
                                    letterSpacing: "3px",
                                }} 
                            >
                                { page.title }
                            </Typography>
                        </Box>
                    ))
                }
            </Box>
        </>
    )
}
