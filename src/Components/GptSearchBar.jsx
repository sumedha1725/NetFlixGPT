import React from 'react'
import lang from '../Utils/language';

const GptSearchBar = () => {
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='bg-black w-1/2 grid grid-cols-12'>
            <input type='text' className='p-4 m-4 col-span-9 bg-white' placeholder={lang.hindi.searchPlaceholder} />
            <button className='m-4 py-2 px-4 bg-gray-300 text-black font-bold rounded-3xl col-span-3'>{lang.hindi.search}</button>
        </form>
      
    </div>
  )
}

export default GptSearchBar;
