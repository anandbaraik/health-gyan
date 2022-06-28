import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {Details} from "../components/Details";
import {ExerciseVideos} from "../components/ExerciseVideos";
import {SimillarExercises} from "../components/SimillarExercises";
import {fetchData, exerciseOptions, youTubeOptions} from "../utils/fetchData";
const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const {id} = useParams();

  useEffect(() => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
	const fetchExerciseData = async () => {
		const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
    const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

		const exerciseData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions);
		setExerciseDetail(exerciseData);

    const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseData?.name} exercise`,youTubeOptions);
		setExerciseVideos(exerciseVideosData.contents);

    const muscleExercises = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseData?.target}`,exerciseOptions);
		setTargetMuscleExercises(muscleExercises);

    const equipmentExercises = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseData?.equipment}`,exerciseOptions);
		setEquipmentExercises(equipmentExercises);
	}
	fetchExerciseData();
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;
  
  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Details
	  	exerciseDetail={exerciseDetail}
      />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail?.name}
      />
      <SimillarExercises
        muscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  )
}

export default ExerciseDetail