import React, {useEffect, useState} from 'react'
import { Box, Stack, Button, Typography, TextField } from '@mui/material';
const SearchExercises = () => {
  return (
    <Stack
		alignItems="center"
		justifyContent="center"
		mt="37px"
		p="20px">
		<Typography
			fontWeight={700}
			sx={{
				fontSize:{
					lg: "44px",
					xs: "30px"
				}
			}}
			textAlign="center"
			mb="50px">
			Awesome Exercises,<br/> you should know!
		</Typography>
		<Box position="relative"
			mb="72px">
			<TextField
				placeholder='Write your queries'
				onChange={(e) => {}}
				type="search"
				value=""
				height="76px"
				sx={{
					input:{
						fontWeight: '700',
						border: 'none',
						borderRadius: "4px"
					},
					width:{
						lg: "800px",
						xs: "350px",
					},
					backgroundColor: "#fff",
					borderRadius: "40px"
				}}
			/>
			<Button
				color="error"
				variant="contained"
				sx={{
					textTransform: "none",
					width:{
						lg: "175px",
						xs: "75px"
					},
					fontSize:{
						lg: "20px",
						xs: "14px"
					},
					height:"55px",
					position: "absolute",
					right: "0px"
				}}>
				Search
			</Button>
		</Box>
	</Stack>
  )
}

export default SearchExercises