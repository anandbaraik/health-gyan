import { Typography } from '@mui/material';
import React from 'react'
import mindFulnessImg from "../assets/images/mindfulness.png";
const NotFound = () => {
  return (
    <div>
        <img src={mindFulnessImg}
            alt="mindfulness"
            style={{
                width:"100%",
                maxWidth: "100%"
            }}
            loading="lazy"
        />
        <Typography
			variant='h3' mt="10px"
            sx={{
                textAlign:"center",
                fontSize:{
                    lg:'1.9rem',
                    xs:'1.3rem'
                },
                fontFamily: 'Dancing Script'
            }}
            className="no-result-found">
            We didn't find any results, Sorry! <br/>
            Search similar term!
		</Typography>
    </div>
  )
}

export default NotFound