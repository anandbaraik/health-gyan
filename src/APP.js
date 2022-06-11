import React from 'react'
import "./APP.css";
import {Route, Routes} from "react-router-dom";
import Box from '@mui/material/Box';
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const APP = () => {
  return (
    <Box
        width="400px"
        sx={{
            width:{
                xl:'1488px'
            }
        }}
        m="auto">
        <Navbar></Navbar>
        <Routes>
            <Route
                exact
                path='/'
                element={<Home/>}></Route>
            <Route
                exact
                path='/exercise/:id'
                element={<ExerciseDetail/>}></Route>
        </Routes>
        <Footer/>
    </Box>
  )
}

export default APP