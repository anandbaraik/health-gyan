import { Box, Stack, Typography } from '@mui/material';
import React from 'react'
import Loader from './Loader';
import Video from './Video';

export const ExerciseVideos = ({exerciseVideos, name}) => {
  return (
    <Box
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
				<Video
					exerciseVideos={exerciseVideos}
					name={name}
				/>
		}
    </Box>
  )
}