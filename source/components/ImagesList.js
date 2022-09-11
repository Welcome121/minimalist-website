import React, { useEffect, useState } from 'react';

import { Box, Button, ButtonGroup, Grid, Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';

import travisScott from '../assets/images/astroworld_travis-scott.jpg';
import pinkFloyd from '../assets/images/dark-side-of-the-moon_pink-floyd.jpg';
import eminem from '../assets/images/eminem-kamikaze.jpg';
import ladyGaga from '../assets/images/joanne_lady-gaga.jpg';
import kanyeWest from '../assets/images/my-beautiful-dark-twisted-fantasy_kanye-west.jpg';
import daftPunk from '../assets/images/random-access-memories_daft-punk.jpg';
import blackPink from '../assets/images/square-up_blackpink.jpg';
import drake from '../assets/images/take-care_drake.jpg';
import avicii from '../assets/images/true_avicii.jpg';

const options = ["all", "people", "animals", "objects"];

export default function ImagesList() {
    const [option, setOption] = useState("all");

    return (
        <>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  cursor: "pointer"
                }}
              >
                {
                  options.map(item => (
                    <Box
                      sx={{
                        margin: "0px 25px"
                      }}
                      onClick={(item) => {}}
                      key={item}
                    >
                      <Typography 
                        variant='h6' 
                        sx={{ 
                            fontFamily: "Poppins",
                            fontSize: "12px",
                            letterSpacing: "2px",
                        }} 
                      >
                        { item }
                      </Typography>
                    </Box>
                  ))
                }
              </Box>
              <Box>
                <ButtonGroup variant='string' color="primary" size="small">
                  <Button>
                    <ViewModuleIcon />
                  </Button> 
                  <Button>
                    <ViewListIcon />
                  </Button>
                </ButtonGroup>
              </Box>
            </Box>
            
            <ImageList 
                sx={{ width: "100%" }} 
                cols={3} 
                rowHeight={400} 
                gap={8}
                variant="masonry"
            >
                {
                    data.map(item => (
                        <ImageListItem key={item.img}>
                            <img
                                src={item.img}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))
                }
            </ImageList>
        </>
    )
}

const data = [
    {
        img: travisScott,
        title: "Astroworld"
    },
    {
        img: pinkFloyd,
        title: "Dark side of the moon"
    },
    {
        img: eminem,
        title: "Kamikaze"
    },
    {
        img: ladyGaga,
        title: "Joanne"
    },
    {
        img: kanyeWest,
        title: "My beautiful dark twisted fantasy"
    },
    {
        img: daftPunk,
        title: "Random acess memories"
    },
    {
        img: blackPink,
        title: "Square Up"
    },
    {
        img: drake,
        title: "Take care"
    },
    {
        img: avicii,
        title: "True"
    },
]