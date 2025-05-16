import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../Utils/Constants';
import { addPopularMovies } from '../Utils/movieSlice';
import { useEffect } from 'react';




const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getPopularMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
        const response = await data.json();
        dispatch(addPopularMovies(response.results));
        // console.log(response.results)
      };


    useEffect(() => {
    getPopularMovies();
    }, [])

    
};

export default usePopularMovies;
