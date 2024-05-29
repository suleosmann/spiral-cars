import React from 'react'
import {suv,
  saloons,
  hatchbacks,
  pickup,
  convertibles,
  van} from '../../assets'
import Image from 'next/image'

const BodyType = () => {
  const bodyType = {suv,
    saloons,
    hatchbacks,
    pickup,
    convertibles,
    van}

  return (
    <div className='grid sm:grid-cols-3 grid-cols-2 gap-1'>
      {Object.entries(bodyType).map(([key, value]) => (
        <div key={key} className='flex justify-center items-center p-1 bg-slate-100'>
          <Image src={value} alt={key} className='w-32 h-32 object-contain' />
        </div>
      ))}
    </div>
  )
}

export default BodyType
