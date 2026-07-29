import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const Searchbar = () => (
  <form autoComplete="off" className="p-2 text-gray-400
   focus-within:text-gray-600">
   <label htmlFor='search-field' className='sr-only'>
    Search Songs
   </label>
   <div className='flex flex-row justify-start items-center'>
      <FiSearch className='w-5 h-5 ml-4'/>
        <input
         name='search-field'
         autoComplete='off'
         id='search-field'
         placeholder='Search'
         type='search'
         value=''
         onChange={()=>{}}
         className='flex-1 bg-transparent border-none 
          outline-none placeholder-gray-500 text-base
           text-white p-4'
         />
   </div>

  </form>
  // <div className="flex w-full py-1 mt-2 mb-2 text-[14px] 
  // bg-[#1e1b2c] rounded-full color-[#ffffff]">
  //   <input type="text" placeholder="Search for songs or artists" 
  //   className="flex-1 w-full p-2 pl-5 text-sm bg-transparent
  //    rounded-full outline-none text-[#ffffff]"/>
  //   <button type="submit" className="p-2 pr-5 text-sm text-[#ffffff]
  //    rounded-full hover:bg-[#ffffff]/10">
  //     Search
  //   </button>
  // </div>
);

export default Searchbar;
