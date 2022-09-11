import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';

import ImagesList from '../source/components/ImagesList';

export default function Home() {

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection:"column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "justify",
          textJustify:"inter-word",
        }}
      >
        <Box
          width="60%"
        >
          <Box
            marginBottom="50px"
          >
            <Typography 
              variant="p" 
              sx={{
                lineHeight: "25px",
              }}
            >
              Hey! My name is <b>LATIN</b>. I'm from Rome and live today in all over the World
              helping programmers to write random texts in your experimental applications.  
              Or will you say you never wrote <b>Lorem Ipsum</b>? 
              in this case, I'm helping <b>Gabriel</b> to make a <b>portfolio for visual artists</b>.
            </Typography>
          </Box>

          <Box>
              <ImagesList />
          </Box>
        </Box>
      </Box>
    </>
  )
}
