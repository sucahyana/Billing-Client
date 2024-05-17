
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home'
import Modif from "../Pages/Modif";
import Monitoring from "../Pages/Monitoring";
import Ordering from "../Pages/Ordering.jsx";
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Modif" element={<Modif/>} />
            <Route path="/Monitoring" element={<Monitoring/>} />
            <Route path="/Ordering" element={<Ordering/>} />
        </Routes>
    );
};

export default AppRoutes;
