import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const ExerciseCard = ({exercise}) => {
  return (
    <Link to={`/exercise/${exercise.id}`}
        className="exercise-card">
        <img
            src={exercise?.gifUrl}
            alt={exercise?.name}
            loading="lazy"
        />
        <Stack
            direction="row">
            <Button
                sx={{
                    ml:"21px",
                    color:"#fff",
                    background:"#ffa9a9",
                    fonSize:"14px",
                    borderRadius:"20px",
                    textTransform:"capitalize"
                }}>
                {exercise?.bodyPart}
            </Button>
            <Button
                sx={{
                    ml:"21px",
                    color:"#fff",
                    background:"#fcc757",
                    fonSize:"14px",
                    borderRadius:"20px",
                    textTransform:"capitalize"
                }}>
                {exercise?.target}
            </Button>
        </Stack>
        <Typography
            ml="20px"
            color="#000"
            fontWeight="bold"
            mt="11px"
            textTransform="capitalize"
            pb="10px"
            sx={{
                fontSize:{
                    lg:"24px",
                    xs:"20px"
                }
            }}>
            {exercise?.name}
        </Typography>
    </Link>
  )
}