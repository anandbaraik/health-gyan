import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {Details} from "../components/Details";
import {ExerciseVideos} from "../components/ExerciseVideos";
import {SimillarExercises} from "../components/SimillarExercises";
const ExerciseDetail = () => {
  return (
    <Box>
      <Details/>
      <ExerciseVideos/>
      <SimillarExercises/>
    </Box>
  )
}

export default ExerciseDetail