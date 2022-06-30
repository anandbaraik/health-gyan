import React from 'react'
import {Box, Stack, Typography, Button} from '@mui/material';
import heroBanner from "../assets/images/banner.png";
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt:{
          lg: "212px",
          xs: "70px"
        },
        ml:{
          sm: "50px"
        }
      }}
      position="relative"
      p="20px">
      <Typography
        color="#FF2625"
        fontWeight="600"
        fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{
          fontSize:{
            lg: "44px",
            xs: "40px"
          }
        }} mb="23px" mt="30px">
        Sweat, Smile <br/> and Repeat
      </Typography>
      <Typography
        fontSize="22px"
        lineHeight="35px"
        fontFamily="Alegreya"
        mb={3}>
        Check out the most effective exercises!
      </Typography>
      <Button
        variant="outlined"
        href="#exercises"
        color="error"
      >
        Explore Exercises
      </Button>
      <Typography
        color="#ff2625"
        fontSize="200px"
        fontWeight={600}
        sx={{
          opacity:"0.1",
          display:{
            lg:'block',
            xs:'none'
          },
          fontSize: '200px'
        }}>
        Exercises
      </Typography>
      <img src={heroBanner}
        alt="banner-img"
        className='hero-banner-img'
        loading="lazy"
      />
    </Box>
  )
}

export default HeroBanner