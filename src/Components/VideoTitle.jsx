import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='font-bold text-6xl'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div className='my-4'>
        <button className='bg-white text-black p-4 px-11 rounded-2xl font-bold'> ⏵ Play</button>
        <button className='bg-gray-400 mx-2 text-cyan-50 p-4 px-11 rounded-2xl font-bold'> 🛈 More Info</button>

      </div>
    </div>
  )
}

export default VideoTitle;
