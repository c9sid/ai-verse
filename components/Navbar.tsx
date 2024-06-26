"use client"

import Link from 'next/link'
import React from 'react'
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/lib/data';

const Navbar = () => {

  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname();

  return (
<>
    {/* Desktop navbar */}
    <nav id='navbar' className='hidden bg-slate-950/60 border-b border-slate-800 backdrop-blur-sm sticky top-0 md:flex justify-between items-center px-5 py-5 z-10'>
      <div className="logo">
        <Link href={'/'} className='text-2xl font-semibold bg-gradient-to-r from-[#103ce7] to-[#64e9ff] bg-clip-text text-transparent'>AI verse</Link>
      </div>
      <div className='flex gap-5'>
        { navLinks.map((link) => {
          const isActive = pathname.endsWith(link.href);
          return(
            <div key={link.name} className="menu">
            <ul className='flex justify-between items-center gap-x-5'>
          <li className={isActive ? "text-blue-300 transition ease-in-out duration-200" : "text-slate-500 hover:text-blue-300 transition duration-200"}><Link href={link.href}>{link.name}</Link></li>
        </ul> 
      </div>
          )
        }) }
        </div>
    </nav>

    {/* Mobile Navbar */}
    <nav id='navbar' className='flex md:hidden bg-slate-950/60 border-b border-slate-800 backdrop-blur-sm sticky top-0 justify-between items-center px-5 py-3 lg:hidden sm:flex z-10'>
    <div>
      <Link href={'/'} className='text-xl font-semibold bg-gradient-to-r from-[#103ce7] to-[#64e9ff] bg-clip-text text-transparent'>AI verse</Link>
    </div> 
    <button onClick={() => setNavbar(!navbar)}>
    {navbar ? (<AiOutlineClose className='text-white' />) : (<CiMenuFries className='text-lg text-white' />)}
    </button>
  </nav>

<div 
className={`${navbar ? '' : 'hidden'}`}
>
  <div className='flex justify-center items-start'>
    <div className='h-full fixed md:hidden w-full bg-slate-900 shadow-md rounded-md z-10'>
      <ul className='space-y-1 p-8 text-center'>
        {navLinks.map((link) => {
          const isActive = pathname.endsWith(link.href);
          return(
            <li key={link.name} className='hover:bg-slate-700 text-md  rounded text-slate-500 hover:text-blue-300 py-2 px-4'>
          <Link className={isActive ? "text-blue-300" : ""} onClick={() => setNavbar(!navbar)} href={link.href}>{link.name}</Link>
          </li>
          )
        })}
      </ul>
      {/* <div className='flex justify-center items-center px-3'>
        <Link onClick={() => setNavbar(!navbar)} href={'/'} className='bg-slate-950 text-md text-slate-300 hover:bg-slate-700 py-2 px-4 w-11/12 rounded-md text-center'>Sign Up</Link>
      </div> */}
    </div>
  </div>
  </div>
    </>
  )
}

export default Navbar