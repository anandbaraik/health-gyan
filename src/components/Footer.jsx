import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" 
		sx={{ 
			alignItems: 'center',
			flexDirection:"row",
			justifyContent:"center",
			alignItems:"baseline"
		}} flexWrap="wrap" px="40px" pt="24px">
		<img src={Logo} alt="logo"/>
		<span style={{
			fontSize:"30px",
			marginLeft: "-30px",
			fontFamily: 'Shrikhand'
		}}>
			Health Gyan
		</span>
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">
		<a href='https://anandbaraik.github.io/#/'
			target="_blank"
			style={{
				textDecoration:"none",
				color:"#161515",
				fontFamily: 'Dancing Script'
			}}
			className="author">
			Made with ❤️ by {` `} Anand Baraik
		</a>
    </Typography>
  </Box>
);

export default Footer;