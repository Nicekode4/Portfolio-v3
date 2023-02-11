import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Projects from '../Pages/Projects/Projects'
import MainComponent from "../Components/Main/MainComponent"
import About from '../Pages/About/About'
import Services from '../Pages/Services/Services'
import NotFound from '../Pages/NotFound/NotFound'



function AppRouter() {
  return (
    <Routes>
        <Route index element={<MainComponent />}></Route>
        <Route path='/projekter' element={<Projects />}></Route>
        <Route path='/om-mig' element={<About />}></Route>
        <Route path='/ydelser' element={<Services />} ></Route>
        <Route path='*' element={<NotFound />}></Route>
    </Routes>
  )
}

export default AppRouter