import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {Details} from "../components/Details";
import {ExerciseVideos} from "../components/ExerciseVideos";
import {SimillarExercises} from "../components/SimillarExercises";
import {fetchData, exerciseOptions} from "../utils/fetchData";
const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const {id} = useParams();

  useEffect(() => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
	const fetchExerciseData = async () => {
		const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      	const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

		const exerciseData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions);
		setExerciseDetail(exerciseData);
	}
	fetchExerciseData();
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;
  
  return (
    <Box>
      <Details
	  	exerciseDetail={exerciseDetail}
      />
      <ExerciseVideos/>
      <SimillarExercises/>
    </Box>
  )
}

export default ExerciseDetail