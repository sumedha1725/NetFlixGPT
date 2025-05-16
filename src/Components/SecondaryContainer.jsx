import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector((store)=> store.movies)
    if (!movies?.nowPlayingMovies) return
  return (
    <div className=' bg-black'>
        {/* {movies?.nowPlayingMovies && ( */}
        <div className='-mt-60 relative z-20 pl-12'>
        <MovieList title={"Now Playing"} movies ={movies.nowPlayingMovies} />
        <MovieList title={"Trending"} movies ={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies ={movies.popularMovies} />
        <MovieList title={"UpComing Movies"} movies ={movies.nowPlayingMovies} />
        <MovieList title={"Horror"} movies ={movies.nowPlayingMovies} />
        </div>
    </div>
  )
}

export default SecondaryContainer
