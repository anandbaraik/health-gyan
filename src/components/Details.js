import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

export const Details = ({exerciseDetail}) => {
    const {bodyPart, equipment, gifUrl, name, target}  = exerciseDetail;
    const extraDetails = [
        {
            icon: BodyPartImage,
            name: bodyPart
        },
        {
            icon: TargetImage,
            name: target
        },
        {
            icon: EquipmentImage,
            name: equipment
        }
    ];
    return (
        <Stack
            gap="60px"
            sx={{
                flexDirection: {
                    lg: "row"
                },
                p: "20px",
                alignItems: "center"
            }}>
            <img
                src={gifUrl}
                alt={name || bodyPart}
                loading="lazy"
                className='detail-image'
            />
            <Stack
                sx={{
                    gap:{
                        lg: "35px",
                        xs: "20px"
                    }
                }}>
                <Typography
                    sx={{
                        fontSize:{
                            lg: "64px",
                            xs: "30px"
                        },
                        fontWeight: "700"
                    }}>
                    {name}
                </Typography>
                <Typography
                    variant='h6'>
                    Exercises keep you strong.{' '}
                    <span style={{ textTransform: 'capitalize', color: '#ff2625' }}>{name}</span> is one of the best exercises to target your <span style={{ color: '#ff2625' }}>{target}</span>. It will help you improve your{' '} mood and gain energy.
                </Typography>
                {
                    extraDetails?.map(({name, icon},index) => (
                        <Stack
                            key={index}
                            direction="row"
                            gap="24px"
                            alignItems="center">
                            <Button
                                sx={{
                                    background: "#fff2db",
                                    borderRadius: "50%",
                                    width: "100px",
                                    height: "100px"
                                }}>
                                <img
                                    src={icon}
                                    alt={name}
                                    loading="lazy"
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        objectFit: "contain"
                                    }}
                                />
                            </Button>
                            <Typography
                                textTransform="capitalize"
                                sx={{
                                    fontSize:{
                                        lg: "30px",
                                        xs: "20px"
                                    },
                                    fontWeight: "400"
                                }}>
                                {name}
                            </Typography>
                        </Stack>
                    ))
                }
            </Stack>
        </Stack>
    )
}