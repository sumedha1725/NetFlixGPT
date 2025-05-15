import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'

const Body = () => {
  return (

    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/header" element={<Header/>} />
    </Routes>
  );
    
}

export default Body;
