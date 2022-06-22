import React, {useEffect, useState} from 'react'
import { Pagination, Box, Stack, Typography } from '@mui/material';
import {exerciseOptions, fetchData } from "../utils/fetchData";
import {ExerciseCard} from "../components/ExerciseCard"
const Exercises = ({bodyPart, exercises, setExercises}) => {
	console.log(exercises);
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
				exercises.map((exercise, index) => (
					<ExerciseCard
						key={exercise?.id || index}
						exercise={exercise}
					/>
				))
			}
		</Stack>
    </Box>
  )
}

export default Exercises