"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { routes } from '../utils';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleCloseTopBar = () => {
    const topBar = document.querySelector('.top-bar');
    if (topBar) {
      topBar.classList.add('hidden');
    }
  };

  return (
    <header className="bg-white shadow relative z-50">
      <div className="top-bar bg-gray-900 text-white flex gap-4 justify-center items-center px-4 py-2">
        <h1 className="text-lg md:font-bold">
          Mountain Heights College: A place of excellence in education
        </h1>
        <button
          onClick={handleCloseTopBar}
          className="text-white cursor-pointer hover:text-gray-300"
        >
          <X />
        </button>
      </div>

      <div className="md:px-14 px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Mountain Heights College Logo"
            width={48}
            height={48}
            className="md:w-16 md:h-16 w-12 h-12 rounded-lg mr-3"
          />
          <div>
            <Link
              href="/"
              className="text-xl font-bold text-gray-900 hidden md:block"
            >
              Mountain Heights College
            </Link>
            <p className="text-sm text-blue-600 hidden md:block">
              Building Tomorrow&apos;s Leaders
            </p>
          </div>
        </div>

        <nav className="hidden md:flex space-x-4">
          {routes.map((route) => (
            <a
              key={route.name}
              href={route.route}
              className={`text-gray-600 hover:text-blue-600 text-lg ${
                pathname === route.route ? 'font-bold' : ''
              }`}
            >
              {route.name}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-gray-700">
            <X size={28} />
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-6 mt-10 text-lg">
          {routes.map((route) => (
            <a
              key={route.name}
              href={route.route}
              className={`text-gray-800 hover:text-blue-600 ${
                pathname === route.route ? 'font-semibold' : ''
              }`}
              onClick={toggleMenu}
            >
              {route.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
