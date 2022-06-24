import React, {useEffect, useState} from 'react'
import { Pagination, Box, Stack, Typography } from '@mui/material';
import {exerciseOptions, fetchData } from "../utils/fetchData";
import {ExerciseCard} from "../components/ExerciseCard"
import NotFound from './NotFound';
const Exercises = ({bodyPart, exercises, setExercises}) => {

	useEffect(() => {
		const fetchExerciseData = async () => {
			let data = [];
			if(bodyPart == 'all') {
				data = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
			} else {
				data = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
			}
			setExercises(data);
		}
		fetchExerciseData();
	}, [bodyPart]);

	const [currentPage, setCurrentPage] = useState(1);
	const exercisesPerPage = 9;
	const indexOfLastExercise = currentPage * exercisesPerPage;
	const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
	const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

	const paginate = (e, value) => {
		setCurrentPage(value);
		window.scrollTo({
			top: 1800,
			behavior: "smooth"
		});
	}
  return (
    <Box id="exercises"
		sx={{
			mt:{
				lg:"110px",
			}
		}}
		mt="50px"
		p="20px">
		<Typography
			variant='h3' mb="46px">
			Showing Results
		</Typography>
		<Stack
			direction="row"
			sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap"
			justifyContent="center">
			{
				exercises?.length ? (
					currentExercises.map((exercise, index) => (
					<ExerciseCard
						key={exercise?.id || index}
						exercise={exercise}
					/>
				))
				) : (
					<NotFound/>
				)
				
			}
		</Stack>
		<Stack
			mt="100px"
			alignItems="center">
			{
				exercises?.length > 9 && (
					<Pagination
						color='standard'
						shape='rounded'
						count={Math.ceil(exercises.length / exercisesPerPage)}
						page={currentPage}
						onChange={paginate}
						size="large"
					/>
				)
			}
		</Stack>
    </Box>
  )
}

export default Exercises