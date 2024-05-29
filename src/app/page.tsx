"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Car1 from '../../public/assets/car1.jpg';
import SearchByName from './components/SearchByName';
import FilterByBrand from './components/FilterByBrand';
import BodyType from './components/BodyType';
import Cta from './components/Cta';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('searchByName');

  const handleFilter = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-64 px-4">
      <div className="text-gray-800 text-center max-w-2xl mt-20">
        <h1 className="text-3xl sm:text-5xl font-bold">
          The <span className="text-black">safest way</span> to buy or sell your car in Kenya.
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-2 justify-center items-center mt-10">
        <button className="bg-black text-white py-4 px-8 sm:w-56 sm:h-12">Vehicles in Kenya</button>
        <button className="border-2 border-black py-4 px-8 sm:w-56 sm:h-12">International Stock</button>
      </div>
      <div className="mt-10 w-full max-w-lg">
        <Image src={Car1} alt="Car one" className="w-full h-auto" />
      </div>
      <div className="mt-6 space-y-2">
        <div className="font-bold text-center text-3xl">Find what fits you</div>
        <div className="text-center">We help you find a car that fits Your personality, dream and pocket!</div>
      </div>
      <div className="flex space-x-4 sm:text-lg text-sm mt-10 text-gray-400">
        <button
          onClick={() => handleFilter('searchByName')}
          className={`cursor-pointer ${activeFilter === 'searchByName' ? 'text-black' : ''}`}
        >
          Search by Name
        </button>
        <button
          onClick={() => handleFilter('filterByBrand')}
          className={`cursor-pointer ${activeFilter === 'filterByBrand' ? 'text-black' : ''}`}
        >
          Filter By Brand
        </button>
        <button
          onClick={() => handleFilter('bodyType')}
          className={`cursor-pointer ${activeFilter === 'bodyType' ? 'text-black' : ''}`}
        >
          Filter By Body Type
        </button>
      </div>
      <div className=" sm:w-[60vw] w-full my-10">
        {activeFilter === 'searchByName' && <SearchByName />}
        {activeFilter === 'filterByBrand' && <FilterByBrand />}
        {activeFilter === 'bodyType' && <BodyType />}
      </div>
      <div className='w-full'>
      <Cta/>
      </div>
    </main>
  );
}