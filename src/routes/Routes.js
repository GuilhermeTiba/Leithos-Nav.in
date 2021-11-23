import React from 'react';
import HomePage from "../pages/HomeScreen";
import LogInPage from "../pages/LogInScreen";
import SectorPage from '../pages/SectorScreen';
import {Routes, Route} from 'react-router-dom';

const RoutesComponent = () => {
    return (
        <Routes>
            <Route exact path='/' element={<LogInPage/>}/>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/sector' element={<SectorPage/>}/>
        </Routes>
    )
}

export default RoutesComponent
