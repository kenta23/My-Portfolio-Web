import Navbar from '@/app/components/navbar';
import { projectType, projects } from '@/data';
import React from 'react'
import { Metadata, ResolvingMetadata  } from 'next';
import Proj from './proj';

export function generateMetadata ({ params }: { params: { id: string }}
): Metadata {
  
  //return a title and description base on project viewed
  const data: projectType[] = projects.filter((item) => item.name === params.id);

  return {
     title: data[0].title,
     description: data[0].name,
  }

}


export function generateStaticParams() {
     return projects.map((item) => ({
         id: item.name
     }))
}

export default function Page({ params }: { params: { id: string} }) {
    const id = params.id;
    const item = projects.filter(val => val.name === id);

  return (
    <div className="w-full min-h-screen h-auto ">
       <Navbar /> 

     <div className='px-4 md:px-6 mt-12 text-white overflow-x-hidden'>
         <Proj item={item}/>
     </div>
     
    </div>
  )
}
