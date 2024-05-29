import React from 'react';
import { spiral } from '../assets';
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <div className='sm:flex w-full sm:h-[40vh] h-full bg-slate-100 mt-12 absolute'>
            <div className='sm:w-1/4 w-full sm:h-full sm:space-y-3'>
                <Image src={spiral} alt='logo' className='w-32' />
                <p>© 2024 Kai and Karo. All rights reserved</p>
                <p>Stay up to date</p>
                <input type='email' placeholder='Enter your email' className='p-3 border-2' />
            </div>
            <div className='sm:w-1/4 w-full sm:h-full  mt-12 sm:space-y-3'>
                <h1 className='font-bold'>Company</h1>
                <ul className='space-y-3'>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Sell Your Car</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className='sm:w-1/4 w-full sm:h-full  mt-12 sm:space-y-3'>
                <h1 className='font-bold'>Support</h1>
                <ul className='space-y-3'>
                    <li><a href="#">Frequently Asked Questions</a></li>
                    <li><a href="#">Sell On Behalf Terms of Service</a></li>
                </ul>
            </div>
            <div className='sm:w-1/4 w-full sm:h-full   mt-12 sm:space-y-3'>
                <h1 className='font-bold'>Locations in Nairobi</h1>
                <ul className='space-y-3'>
                    <li>Westlands</li>
                    <li>Karen</li>
                    <li>Gigiri</li>
                    <li>Lavington</li>
                    <li>Kilimani</li>
                    <li>Upper Hill</li>
                    <li>Runda</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
