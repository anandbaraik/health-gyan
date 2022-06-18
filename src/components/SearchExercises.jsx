import React, {useEffect, useState} from 'react'
import { Box, Stack, Button, Typography, TextField } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
const SearchExercises = () => {
	const [search, setSearch] = useState('');
	const [exercises, setExercises] = useState([]);
	const handleSearch = async () => {
		if(search) {
			const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
			const searchedExercises = exerciseData?.filter((exercise) =>
				exercise?.name.toLowerCase().includes(search) ||
				exercise?.bodyPart.toLowerCase().includes(search) ||
				exercise?.equipment.toLowerCase().includes(search) ||
				exercise?.target.toLowerCase().includes(search)
			)
			console.log(exerciseData);
			console.log(searchedExercises);
			setSearch('');
			setExercises(searchedExercises);
		}
	}
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
				onChange={(e) => setSearch(e.target.value)}
				type="search"
				value={search}
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
				onClick={handleSearch}
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