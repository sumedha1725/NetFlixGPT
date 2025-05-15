import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../Utils/Constants';
import { addNowPlayingMovies } from '../Utils/movieSlice';
import { useEffect } from 'react';




const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const response = await data.json();
        dispatch(addNowPlayingMovies(response.results));
        // console.log(response.results)
      };


    useEffect(() => {
    getNowPlayingMovies();
    }, [])

    
};

export default useNowPlayingMovies;
