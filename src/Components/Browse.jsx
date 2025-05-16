import React from 'react'
import Header from './Header'
import {  useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import GptSearch from './GptSearch';

const Browse = () => {

  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)

  // useEffect(() => {
  //   if (!user) {
  //     navigate("/login");
  //   }
  // }, [user, navigate]);

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
        {<Header isLoggedIn/>}
        {showGptSearch ? (<GptSearch /> ) : (
        <>
        <MainContainer />
        <SecondaryContainer />
        </>)}
        
    </div>
    );


}

export default Browse;
