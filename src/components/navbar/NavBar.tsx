"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SpiralLogo from '../../assets/Spiral.png';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsOpen(false); // Close the menu after clicking a link
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center p-4">
      <div className="text-4xl font-semibold">
        Spiral<span className="text-red-600">Cars</span>
      </div>
      <div className="relative">
        {/* Hamburger Menu */}
        <div className="sm:hidden cursor-pointer" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </div>
        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? 'absolute top-full right-0 mt-2 w-44 bg-white shadow-md py-2 rounded-md' : 'hidden'
          } sm:flex sm:items-center sm:ml-6 sm:relative sm:top-auto sm:left-auto sm:mt-0 sm:bg-transparent sm:shadow-none sm:py-0 sm:rounded-none`}
        >
          <ul className="flex flex-col sm:flex-row sm:space-x-6 sm:text-lg">
            <li>
              <Link
                href="/vehicles-in-kenya"
                className={`${
                  activeLink === 'Vehicles in Kenya' ? 'underline font-semibold' : ''
                } block py-2 px-4`}
                onClick={() => handleLinkClick('Vehicles in Kenya')}
              >
                Vehicles in Kenya
              </Link>
            </li>
            <li>
              <Link
                href="/international-stock"
                className={`${
                  activeLink === 'International Stock' ? 'underline font-semibold' : ''
                } block py-2 px-4`}
                onClick={() => handleLinkClick('International Stock')}
              >
                International Stock
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`${
                  activeLink === 'About' ? 'underline font-semibold' : ''
                } block py-2 px-4`}
                onClick={() => handleLinkClick('About')}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`${
                  activeLink === 'Contact' ? 'underline font-semibold' : ''
                } block py-2 px-4`}
                onClick={() => handleLinkClick('Contact')}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className={`${
                  activeLink === 'FAQ' ? 'underline font-semibold' : ''
                } block py-2 px-4`}
                onClick={() => handleLinkClick('FAQ')}
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;