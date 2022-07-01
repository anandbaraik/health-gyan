import { Box, Typography } from '@mui/material';
import React, {useContext} from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
	const { scrollPrev } = useContext(VisibilityContext);  
	return (
	  <Typography onClick={() => scrollPrev()} className="right-arrow">
		<img src={LeftArrowIcon} alt="right-arrow" />
	  </Typography>
	);
};
  
const RightArrow = () => {
	const { scrollNext } = useContext(VisibilityContext);
	return (
		<Typography onClick={() => scrollNext()} className="left-arrow">
		<img src={RightArrowIcon} alt="right-arrow" />
		</Typography>
	);
};

const ExerciseVideosScrollbar = ({exerciseVideos, name}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {
            exerciseVideos?.map((item, index) => (
                item?.video && (
                    <a
                        key={item?.video?.videoId || index}
			            itemId={item?.video?.videoId || index}
			            title={item?.video?.title}
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
                                objectFit:"cover",
                                maxWidth:"100%"
                            }}
                            loading="lazy"
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
    </ScrollMenu>
  )
}

export default ExerciseVideosScrollbar