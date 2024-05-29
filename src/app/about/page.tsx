import React from 'react'
import userData from '@/data/userData'
import Image from 'next/image'

const page = () => {
    const users = userData
    return (
        <div className='text-center mt-12'>
            <h1 className='text-3xl font-bold'>Meet</h1>
            <h1 className='text-4xl font-bold text-cyan-400'>The team</h1>
            <p className=' sm:mx-[550px] mt-4'>Kai and Karo is a global sourcing and shipping Company domiciled in Nairobi, Kenya.
                We export and ship new & used vehicles, brand-new & used spare parts, industrial equipment
                and electronics from our primary source markets in Europe, Middle east and the Orient.</p>
            <button className='mt-10 bg-black text-white px-6 py-2'>Get Started</button> <br />
            <button className='text-blue-500 px-6 py-2'> Contact Us</button>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-20'>
    {userData.map((user) => (
        <div key={user.id} className='bg-gray-100 p-4 rounded-md shadow-md'>
            <div className='flex items-center justify-center'>
                <img src={user.image} alt={user.name} className='rounded-full w-64 h-64' />
            </div>
            <h3 className='text-lg font-semibold mt-2'>{user.name}</h3>
            <p className='text-gray-600'>{user.jobTitle}</p>
            <p className='text-sm text-gray-500 mt-2'>{user.description}</p>
        </div>
    ))}
</div>

        </div>
    )
}

export default page
