"use client";

import React from 'react'
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Globe, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { routes, programs } from '../utils';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


const Footer = () => {
    const [currentPage, setCurrentPage] = useState('');
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        setCurrentPage(pathname);
    }, [pathname]);

  return (
    <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                {/* <div className="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                  <GraduationCap className="w-5 h-5" />
                </div> */}
                <Image
                  src="/images/logo.png"
                  alt="Excellence School Logo"
                  width={48}
                  height={48}
                  className="w-16 h-16 rounded-lg mr-3"
                />
                <div>
                  <h3 className="text-lg font-bold">Mountain Heights College</h3>
                </div>
              </div>
              <p className="text-gray-400 mb-4 md:text-lg">
                Committed to providing quality education and nurturing the next generation of leaders.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {routes.map((item) => (
                  <li key={item.route}>
                    <button
                      onClick={() => router.push(item.route)}
                      className={`text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center ${currentPage === item.route ? 'font-semibold' : ''}`}
                    >
                      <ChevronRight className="w-4 h-4 mr-1" />
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Programs</h3>
              <ul className="space-y-2">
                {programs.map((program, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                      <ChevronRight className="w-4 h-4 mr-1" />
                      {program.name} School
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-400 text-sm">Phase 4, Ora estate, off Ijebu-ode - Epe expressway , Epe , Lagos state</p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-400 mr-2" />
                  <p className="text-gray-400 text-sm">+234 801 234 5678</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-400 mr-2" />
                  <p className="text-gray-400 text-sm">info@excellenceschool.edu.ng</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Mountain Heights College. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

  )
}

export default Footer