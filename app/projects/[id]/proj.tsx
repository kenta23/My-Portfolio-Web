'use client'

import { projectType } from '@/data'
import { ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function Proj({ item }: { item:  projectType[]}) {
    const router = useRouter();


  return (
    <div className='flex flex-col px-4 md:px-12 items-start gap-8'>
       <ChevronLeft 
         size={32}
         onClick={() => router.back()}
         className='cursor-pointer'
         /> 
 
       <div className='flex w-full px-2 md:py-6 flex-col lg:px-24 space-y-12 mt-[35px] md:mt-[45px]'>
             <div className='object-cover'>
                 <Image 
                  alt={item[0].name + 'image'}
                  width={1000}
                  height={1000} 
                  src={item[0].header as string}
                  loading='lazy'
                  className='rounded-xl shadow-md w-[800px] h-max'
                 />
             </div>


           {/**TITLE AND DESCRIPTION */}
           <div className='space-y-4 h-auto mb-4 max-w-[500px]'>
              <h1 className='text-[30px] md:text-[48px]'>{item[0].title}</h1>
              <p className='text-sm md:text-lg leading-6'>{item[0].description}</p>
              
              {/**LINKS */}
              <div className='mt-4'>
                  <p>Website: <Link target='_blank' className='hover:underline font-light text-sm' href={item[0].link}>{item[0].link}</Link></p>
                  <p>Github repo: <Link target='_blank' className='hover:underline font-light text-sm' href={item[0].repo}>{item[0].repo}</Link></p>
              </div>
           </div>

       </div>
    </div>
  )
}
