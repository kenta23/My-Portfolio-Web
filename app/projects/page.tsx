'use client'

import React from 'react'
import Navbar from '../components/navbar'
import { projects } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import { useTrail, animated } from '@react-spring/web'

 const useProjectAnimations = (length: number) => {
  return useTrail(length, {
    from: { opacity: 0, x: 150 },
    to: { opacity: 1,  x: 50 },
    config: { mass: 1, tension: 200, friction: 20 },
    delay: 20,
    reset: true
  });
}; 


export default function Page() {
   const trails = useProjectAnimations(projects.length); 
   
  return (
    <div className="w-full min-h-screen h-auto overflow-x-hidden">
      <Navbar />

      <div className="px-4 md:px-6 mt-12 text-white">
        <h1 className="text-[25px] md:text-[40px] text-center ">Projects</h1>

        {/** PROJECTS */}
        <div className="mt-10 w-full ">
          <div className="flex gap-2 items-start flex-col">
            {projects.map((item, index) => (
              <animated.div style={{
                ...trails[index],
                transform: trails[index].x.to((x) => `translateX(${x}px)`),}} className="flex gap-3 items-center z-10" key={item.id}>
                <Link href={`/projects/${item.name}`} >
                  <Image
                    alt={item.name}
                    src={item.image as string}
                    width={1000}
                    height={1000}
                    loading="lazy"
                    className="w-[280px] md:w-[300px] h-auto  hover:scale-105 transition-all ease-in-out duration-150 object-cover"
                  />
                </Link>

                {/**DESCRIPTION */}
                <div className="flex flex-col gap-3 max-w-lg items-start">
                  <h1 className="text-sm sm:text-[20px] lg:text-[25px]">{item.title}</h1>
                  <Link href={`/projects/${item.name}`}>
                    <p className="font-light text-sm sm:text-lg hover:underline transition-all duration-150 ease-in">
                      Visit project
                    </p>
                  </Link>
                </div>
              </animated.div>
            ))}
          </div>
        </div>
      </div>


       {/**CIRCLE DESIGN */}
       <div className='size-[400px]  rounded-full bg-[#28AD4D] absolute top-3 left-[20px] md:left-[-100px] blur-[270px] -z-10'/>
    </div>
  );
}
