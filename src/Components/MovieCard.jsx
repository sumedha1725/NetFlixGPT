import React from 'react'
import { IMG_CDN_URL } from '../Utils/Constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 flex-shrink-0 pr-4'>
      <img alt='Movie card' src={IMG_CDN_URL + posterPath}/>  
       
    </div>
  )
}

export default MovieCard
