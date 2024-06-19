'use client'

import React from 'react'
import Navbar from './navbar'
import Image from 'next/image'
import Link from 'next/link';
import useDownloader from 'react-use-downloader';
import { Download } from 'lucide-react';
import { useSpring, animated } from '@react-spring/web';


export default function Hero() {
    const { size, download, cancel } = useDownloader();
    const filename = 'Ramos CV.pdf';
    const fileUrl = '/Ramos_CV.pdf';

  return (
    <div className="w-full h-auto relative bg-white">
      <Navbar />

      {/**HERO */}
      <animated.main className="py-10 z-10  px-16 w-full h-auto min-h-[350px] lg:h-[550px] flex items-center justify-center">
        <div className="flex w-full gap-4 justify-between items-center">
          <div className="flex flex-col flex-1 gap-3 items-start">
            <h1 className="text-[30px] text-[#0c1b0d] lg:text-[48px] text-wrap">
              Hi Im Rusty Miguel Ramos, a Web Developer | UI Designer
            </h1>

 
            <button type='button' onClick={() => download(fileUrl, filename)} className='bg-[#5E735C]
               p-2 hover:bg-[#394438] active:bg-[#457c3f] transition-colors ease-in-out duration-150 rounded-md flex items-center gap-2 cursor-pointer z-10'>
              <Download size={18} color='#ffff'/>
               <p className='text-white text-md'>Download CV</p>
            </button>
         
          </div>

          <div className="md:w-[280px] lg:w-[450px] hidden md:flex z-10 items-center h-auto">
            <div className="w-auto h-auto bg-green-300 shadow-lg shadow-gray-200 rounded-full">
              <Image
                src="/profile.png"
                width={1000}
                height={1000}
                alt="Profile"
                loading="lazy"
                className="md:w-[250px] lg:w-[300px] h-auto object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </animated.main>

      {/**CIRCLE DESIGN */}
      <div className='size-[400px]  rounded-full bg-[#28AD4D] absolute top-3 left-[20px] md:left-[-100px] blur-[270px]'/>
    </div>
  );
}
