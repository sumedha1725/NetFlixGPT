import React from 'react'
import Header from './Header'
import {  useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (!user) {
  //     navigate("/login");
  //   }
  // }, [user, navigate]);

  useNowPlayingMovies();

  return (
    <div>
        {<Header isLoggedIn/>}
        <MainContainer />
        <SecondaryContainer />
    </div>
    );


}

export default Browse;
