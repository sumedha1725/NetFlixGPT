import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggetions from './GptMovieSuggetions'
import { BACKGROUND_IMG } from '../Utils/Constants'

const GptSearch = () => {
  return (
    <div>
       <div className='absolute -z-10'>
      <img  src= {BACKGROUND_IMG}/>
      
      </div>
      <GptSearchBar />
      <GptMovieSuggetions />
    </div>
  )
}

export default GptSearch
