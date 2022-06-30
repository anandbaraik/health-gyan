import React from 'react'
import { Stack, Box, Typography } from '@mui/material'
const Video = ({exerciseVideos, name}) => {
  return (
    <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
            flexDirection:{
                lg:"row"
            },
            gap:{
                lg:"110px",
                xs:"0px"
            }
        }}>
        {
            exerciseVideos?.slice(0, 3)?.map((item, index) => (
                item?.video && (
                    <a
                        key={index}
                        className="exercise-video"
                        href={`https://www.youtube.com/watch?v=${item?.video?.videoId}`}
                        target="_blank"
                        rel="noreferrer">
                        <img
                            alt={item?.video?.title}
                            style={{
                                borderRadius:"20px",
                                width:"360px",
                                height:"202px",
                                objectFit:"cover"
                            }}
                            src={item?.video?.thumbnails?.[0]?.url}
                        />
                        <Box>
                            <Typography
                                sx={{ fontSize: { lg: '28px', xs: '18px' } }} 
                                fontWeight={600} color="#000"
                                textTransform="capitalize"
                                title={item?.video?.title}>
                                {
                                    item?.video?.title?.length > 15 ?
                                        `${item?.video?.title?.substring(0,15)}...`
                                    : name
                                }
                            </Typography>
                            <Typography fontSize="14px" color="#000"
                                textTransform="capitalize"
                                title={item?.video?.channelName}>
                                {
                                    item?.video?.channelName?.length > 15 ?
                                        `${item?.video?.channelName?.substring(0,15)}...`
                                    : name
                                }
                            </Typography>
                        </Box>
                    </a>
                )
            ))
        }
    </Stack>
  )
}

export default Video