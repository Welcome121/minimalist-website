import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';

import travisScott from '../source/assets/images/astroworld_travis-scott.jpg';
import pinkFloyd from '../source/assets/images/dark-side-of-the-moon_pink-floyd.jpg';
import eminem from '../source/assets/images/eminem-kamikaze.jpg';
import ladyGaga from '../source/assets/images/joanne_lady-gaga.jpg';
import kanyeWest from '../source/assets/images/my-beautiful-dark-twisted-fantasy_kanye-west.jpg';
import daftPunk from '../source/assets/images/random-access-memories_daft-punk.jpg';
import blackPink from '../source/assets/images/square-up_blackpink.jpg';
import drake from '../source/assets/images/take-care_drake.jpg';
import avicii from '../source/assets/images/true_avicii.jpg';


const options = ["all", "people", "animals", "objects"];

export default function Home() {
  const [option, setOption] = useState("all");

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
          width="46%"
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
            <Box>
                <img src={travisScott}></img>
                <img src={pinkFloyd}></img>
                <img src={eminem}></img>
                <img src={ladyGaga}></img>
                <img src={kanyeWest}></img>
                <img src={daftPunk}></img>
                <img src={blackPink}></img>
                <img src={drake}></img>
                <img src={avicii}></img>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}
