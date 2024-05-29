import React from 'react'
import { carData } from '@/data/carData'
import Image from 'next/image'
import SearchByName from '../components/SearchByName'

// Function to shuffle an array
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const Page = () => {
    // Shuffle the carData array
    const shuffledCarData = shuffleArray(carData);

    return (
        <div className='grid sm:grid-cols-4 grid-cols-1 gap-2 h-full'>
            {/* <SearchByName /> */}
            {shuffledCarData.map((car) => (
                <div key={car.id} className='border p-4'>
                    <Image src={car.image} alt={`${car.make} ${car.model}`} width={600} height={600} className='w-full h-80 object-cover mb-2' />
                    <h2 className='text-lg font-bold py-4'> <span className='bg-slate-100 text-xs mr-12'>{car.year}</span>  {car.make} {car.model}</h2>
                    <p className='text-sm text-gray-500 mb-4'> <span className='bg-slate-200 p-1 mr-12'>{car.transmission}</span>  <span className='bg-slate-200 p-1 mr-12'>{car.engine}</span> <span className='bg-slate-200 p-1 mr-12'>{car.condition}</span></p>
                    <p className='text-sm my-4'>{car.description}</p>
                    <p className='text-sm font-bold ml-64'>Price: {car.price}</p>
                </div>
            ))}
        </div>
    )
}

export default Page
