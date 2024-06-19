'use client'

import React, { useState } from 'react'
import { Metrophobic } from 'next/font/google'
import Link from 'next/link';
import { Check, Copy } from 'lucide-react';
import { usePathname } from 'next/navigation';

const metrophobic = Metrophobic({ subsets: ["latin"], weight: '400' });

export default function Navbar() {
  const [copied, setCopied] = useState<boolean>(false);
  const pathname = usePathname();

  async function handleClick() { 
    try {
      await navigator.clipboard.writeText("rustymiguelramos@gmail.com");
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }
  return (
    <div
      className={`w-full h-[80px] text-black bg-white flex items-center border-b-[1px] border-[#1CAB66] px-4 sm:px-8 md:px-12`}
    >
      <div className="w-full bg-slate-50 rounded-md h-auto flex justify-between items-center">
        <Link href={'/'}>
          <h1 className={`uppercase text-[12px] md:text-[16px] font-medium ${metrophobic.className}`}>RM Ramos</h1>
        </Link>

        <div className="flex items-center gap-3">
          {!pathname.includes('/projects') && <Link href={"/projects"}>
            <span className="text-[12px] md:text-lg">My Projects</span>
          </Link>}

          {/**email*/}
          <div className='bg-[#E6E6E6] w-auto flex gap-2 justify-between items-center rounded-full h-[40px] px-3'>
               <p className='text-[10px] md:text-[12px]'>rustymiguelramos@gmail.com</p>
              {!copied ? <Copy onClick={handleClick} cursor={'pointer'} color='#848080' size={15} /> : <Check className='text-green-600 transition-all duration-150 ease-in-out' size={15} /> }
          </div>
        </div>
      </div>
    </div>
  );
}
