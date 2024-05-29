import React from 'react';
import {
  audi,
  bmw,
  honda,
  hyundai,
  landRover,
  lexus,
  mazda,
  mercedes,
  nissan,
  subaru,
  toyota,
  vw
} from '../../assets';
import Image from 'next/image';

const FilterByBrand: React.FC = () => {
  const brands = {
    audi,
    bmw,
    honda,
    hyundai,
    landRover,
    lexus,
    mazda,
    mercedes,
    nissan,
    subaru,
    toyota,
    vw
  };

  return (
    <div className='grid sm:grid-cols-3 grid-cols-2 gap-1'>
      {Object.entries(brands).map(([key, value]) => (
        <div key={key} className='flex justify-center items-center p-4 bg-slate-100'>
          <Image src={value} alt={key} className='w-32 h-32 object-contain' />
        </div>
      ))}
    </div>
  );
}

export default FilterByBrand;
