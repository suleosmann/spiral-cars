"use client"
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons'

const SearchByName = () => {
    const [advancedFilter, setAdvancedFilter] = useState(false)

    const handleAdvancedClick = () => {
        setAdvancedFilter(prevState => !prevState);
    }


    return (
        <div className=' w-full'>
            <div className='text-lg font-medium'>Search vehicle</div>
            <div className='text-xs'>Simply write the vehicle name and press the search button (i.e demio or vitz)</div>
            <div className='my-2'>
                <input type='search' placeholder='Search Vehicle by Name' className='py-3 pl-4 w-full border-2 border-gray-200' />
            </div>
            <div className='text-lg font-medium mt-4'>Filter By Budget</div>
            <div className='sm:flex mt-2 sm:space-x-3 sm:space-y-0 space-y-3 space-x-1 text-xs'>
                <button className='border-2 w-24 h-12'>0-500k</button>
                <button className='border-2 w-24 h-12'>500K - 1M</button>
                <button className='border-2 w-24 h-12'>1M - 2M</button>
                <button className='border-2 w-24 h-12'>2M - 3M</button>
                <button className='border-2 w-24 h-12'>3M - 5M</button>
                <button className='border-2 w-24 h-12'>5M - 10M</button>
                <button className='border-2 w-24 h-12'>Above 10M</button>
                <button className='border-2 w-24 h-12 bg-slate-300 font-bold'>Clear</button>
            </div>
            <div className='mt-5'>
                <div className='flex justify-between font-bold border-b-2 pb-4 cursor-pointer' onClick={handleAdvancedClick}>
                    <div>Click here for Advanced search</div>
                    <div>
                        <FontAwesomeIcon icon={faFilter} />
                    </div>
                </div>
                {advancedFilter && (<div className="p-4">
                    <div>
                        <h1 className="text-2xl font-bold mb-4">Brand & Model</h1>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="vehicleBrand" className="block font-medium">
                                    Vehicle Brand
                                </label>
                                <select id="vehicleBrand" className="w-full border border-gray-300 bg-white rounded-md p-2">
                                    <option value="">Select Brand</option>
                                    <option value="Alfa Romea">Alfa Romea</option>
                                    <option value="Aston Martin">Aston Martin</option>
                                    <option value="Audi">Audi</option>
                                    <option value="Bentley">Bentley</option>
                                    <option value="Bmw">Bmw</option>
                                    <option value="Chevrolet">Chevrolet</option>
                                    <option value="Chrysler">Chrysler</option>
                                    <option value="Citreon">Citreon</option>
                                    <option value="DAF">DAF</option>
                                    <option value="Daihatsu">Daihatsu</option>
                                    <option value="Dodge">Dodge</option>
                                    <option value="FAW">FAW</option>
                                    <option value="Ferrari">Ferrari</option>
                                    <option value="Ford">Ford</option>
                                    <option value="Hino">Hino</option>
                                    <option value="Honda">Honda</option>
                                    <option value="Hyundai">Hyundai</option>
                                    <option value="Isuzu">Isuzu</option>
                                    <option value="Jaguar">Jaguar</option>
                                    <option value="Jeep">Jeep</option>
                                    <option value="Jincheng">Jincheng</option>
                                    <option value="KTM">KTM</option>
                                    <option value="Kawasaki">Kawasaki</option>
                                    <option value="Komatsu">Komatsu</option>
                                    <option value="Lamborghini">Lamborghini</option>
                                    <option value="Land rover">Land rover</option>
                                    <option value="Lexus">Lexus</option>
                                    <option value="Mazda">Mazda</option>
                                    <option value="Mercedes">Mercedes</option>
                                    <option value="Mini">Mini</option>
                                    <option value="Mitsubishi">Mitsubishi</option>
                                    <option value="Nissan">Nissan</option>
                                    <option value="Peugeot">Peugeot</option>
                                    <option value="Porsche">Porsche</option>
                                    <option value="ROLLS ROYCE">ROLLS ROYCE</option>
                                    <option value="Smart">Smart</option>
                                    <option value="Ssangyong">Ssangyong</option>
                                    <option value="Subaru">Subaru</option>
                                    <option value="Suzuki">Suzuki</option>
                                    <option value="TARO">TARO</option>
                                    <option value="TATA">TATA</option>
                                    <option value="Toyota">Toyota</option>
                                    <option value="Volkswagen">Volkswagen</option>
                                    <option value="Volvo">Volvo</option>
                                    <option value="YAMAHA">YAMAHA</option>
                                    <option value="renault">renault</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="brandModel" className="block font-medium">
                                    Brand Model
                                </label>
                                <select id="brandModel" className="w-full border border-gray-300 bg-white rounded-md p-2">
                                    <option value="">Select Model</option>
                                    <option value="toyota-corolla">Toyota Corolla</option>
                                    <option value="toyota-camry">Toyota Camry</option>
                                    <option value="honda-civic">Honda Civic</option>
                                    <option value="honda-accord">Honda Accord</option>
                                    <option value="ford-f150">Ford F-150</option>
                                    <option value="ford-mustang">Ford Mustang</option>
                                    <option value="chevrolet-silverado">Chevrolet Silverado</option>
                                    <option value="chevrolet-camaro">Chevrolet Camaro</option>
                                    <option value="bmw-3series">BMW 3 Series</option>
                                    <option value="bmw-5series">BMW 5 Series</option>
                                    <option value="audi-a4">Audi A4</option>
                                    <option value="audi-q5">Audi Q5</option>
                                    <option value="mercedes-benz-cclass">Mercedes-Benz C-Class</option>
                                    <option value="mercedes-benz-eclass">Mercedes-Benz E-Class</option>
                                </select>

                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h1 className="text-2xl font-bold mb-4">Year of Manufacture</h1>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>

                                <input type="text" id="minYom" placeholder='Min YOM' className="w-full border border-gray-300 bg-white rounded-md p-2" />
                            </div>
                            <div>

                                <input type="text" id="maxYom" placeholder="Max YOM" className="w-full border border-gray-300 rounded-md p-2" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h1 className="text-2xl font-bold mb-4">Price & Currency</h1>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>

                                <input type="text" id="minPrice" placeholder='Min Price' className="w-full border border-gray-300 rounded-md p-2" />
                            </div>
                            <div>

                                <input type="text" id="maxPrice" placeholder='Max Price' className="w-full border border-gray-300 rounded-md p-2" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="currency" className="block font-medium">
                                All Currencies
                            </label>
                            <select id="currency" className="w-full border border-gray-300 bg-white rounded-md p-2">
                                <option value="">Select Currency</option>
                                <option value="KES">KSH</option>
                                <option value="JPY">JPY</option>
                                <option value="USD">USD</option>
                                <option value="GBP">GBP</option>
                            </select>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h1 className="text-2xl font-bold mb-4">Vehicle Location</h1>
                        <div className="sm:flex  items-center sm:space-y-0 space-y-4 sm:space-x-3">
                            <button
                                className="sm:w-64 w-full h-12 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors duration-300"
                            >
                                Locally Available
                            </button>
                            <button
                                className="sm:w-64 w-full h-12 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors duration-300"
                            >
                                International Stock
                            </button>
                            <button
                                className="sm:w-64 w-full h-12 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors duration-300"
                            >
                                Both
                            </button>
                        </div>

                    </div>
                </div>)}
            </div>
            <div>
                <button className='w-full h-16 bg-black text-white font-bold text-lg'>Submit</button>
            </div>
        </div>
    )
}

export default SearchByName


