import { Box, Stack, Typography } from '@mui/material';
import React from 'react'
import ExerciseVideosScrollbar from './ExerciseVideosScrollbar';
import Loader from './Loader';
export const ExerciseVideos = ({exerciseVideos, name}) => {
  return (
    <Box
		id="exercises"
    	sx={{
			marginTop:{
				lg:"50px",
				xs:"20px"
			}
		}} p="20px">
		<Typography
			variant='h4'
			mb="20px">
			Watch {` `}
			<span title={name} style={{color:"#ff2625"}}>
				{
					name?.length > 20 ?
						`${name?.substring(0,20)}...`
					: name
				}
			</span>
			{` `}exercise videos
		</Typography>
		{
			!exerciseVideos.length ? 
				<Loader/> : 
				(
					<Stack
					direction="row"
					sx={{
						p:2,
						position:"relative"
					}}>
						<ExerciseVideosScrollbar
							exerciseVideos={exerciseVideos}
							name={name}
						/>
					</Stack>
				)
		}
    </Box>
  )
}