import { Stack, Typography } from '@mui/material'
import React from 'react'
import Icon from "../assets/icons/gym.png";
const BodyPart = ({item, bodyPart, setBodyPart}) => {
  return (
    <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={{
            borderTop: item == bodyPart ? '4px solid #ff2625' : '',
            backgroundColor: "#fff",
            borderBottomLeftRadius: "20px",
            width: "270px",
            height: "282px",
            cursor: "pointer",
            gap: "47px"
        }}
        onClick={() => {
            setBodyPart(item);
            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
        }}>
        <img
            src={Icon}
            alt={item || 'dumbbell'}
            style={{
                width:"40px",
                height: "40px"
            }}
        />
        <Typography
            fontSize="24px" 
            fontWeight="bold" 
            fontFamily="Alegreya" 
            color="#3A1212"
            textTransform="capitalize">
            {item}
        </Typography>
    </Stack>
  )
}

export default BodyPart