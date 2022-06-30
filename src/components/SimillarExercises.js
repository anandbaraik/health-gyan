import { Box, Stack, Typography } from '@mui/material';
import React from 'react'
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

export const SimillarExercises = ({muscleExercises, equipmentExercises}) => {
  return (
    <Box>
	  <Typography
	  	variant='h4'
		sx={{
			fontSize: {
				lg: '44px', 
				xs: '25px' 
			},
			ml: '20px'
		}}
		fontWeight={500} 
		color="#000" 
		mb="33px">
		    Similar {` `}
			<span style={{ color: '#FF2625', textTransform: 'capitalize' }}>
				Target Muscle
			</span>
			{` `}exercises
	  	</Typography>
		<Stack
			direction="row"
			sx={{
				p:2,
				position:"relative"
			}}>
			{
				!muscleExercises.length ? <Loader/> : <HorizontalScrollbar data={muscleExercises}/>
			}
		</Stack>
	  	<Typography
		variant='h4'
	  	sx={{
			fontSize: {
				lg: '44px',
				xs: '25px'
			},
			ml: '20px',
			mt: {
				lg: '100px',
				xs: '60px' 
			}
		}} 
		fontWeight={500} 
		color="#000"
		mb="33px">
			Similar {` `}
			<span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span>
			{` `}exercises
    	</Typography>
		<Stack
			direction="row"
			sx={{
				p:2,
				position:"relative"
			}}>
			{
				!equipmentExercises.length ? <Loader/> : <HorizontalScrollbar data={equipmentExercises}/>
			}
		</Stack>
    </Box>
  )
}