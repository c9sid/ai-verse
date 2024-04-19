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
    <nav id='navbar' className='hidden bg-slate-950/60 backdrop-blur-sm sticky top-0 md:flex justify-between items-center px-5 py-5 z-10'>
      <div className="logo">
        <Link href={'/'} className='text-2xl font-semibold text-blue-500'>AI verse</Link>
      </div>
      <div className='flex gap-5'>
        { navLinks.map((link) => {
          const isActive = pathname.endsWith(link.href);
          return(
            <div key={link.name} className="menu">
            <ul className='flex justify-between items-center gap-x-5'>
          <li className={isActive ? "text-blue-500 transition duration-200" : "text-white transition duration-200"}><Link href={link.href}>{link.name}</Link></li>
        </ul>
      </div>
          )
        }) }
        </div>
    </nav>

    {/* Mobile Navbar */}
    <nav id='navbar' className='flex md:hidden bg-slate-950/60 backdrop-blur-sm sticky top-0 justify-between items-center px-5 py-3 lg:hidden sm:flex z-10'>
    <div>
      <Link href={'/'} className='text-xl font-semibold text-blue-500'>AI verse</Link>
    </div> 
    <button onClick={() => setNavbar(!navbar)}>
    {navbar ? (<AiOutlineClose className='text-white' />) : (<CiMenuFries className='text-lg text-white' />)}
    </button>
  </nav>

<div 
className={`${navbar ? '' : 'hidden'}`}
>
  <div className='flex justify-center items-start'>
    <div className='h-[80vh] fixed md:hidden w-11/12 bg-slate-900 shadow-md rounded-md z-10'>
      <ul className='space-y-3 p-8 text-center'>
        {navLinks.map((link) => {
          const isActive = pathname.endsWith(link.href);
          return(
            <li key={link.name} className='hover:bg-gray-200 text-md  rounded text-slate-300 hover:text-black py-1'>
          <Link className={isActive ? "text-blue-500" : ""} onClick={() => setNavbar(!navbar)} href={link.href}>{link.name}</Link>
          </li>
          )
        })}
      </ul>
      <div className='flex justify-center items-center px-3'>
        <Link onClick={() => setNavbar(!navbar)} href={'/'} className='bg-blue-500 text-md text-white hover:bg-blue-600 py-1 rounded-md w-11/12 text-center'>Sign Up</Link>
      </div>
    </div>
  </div>
  </div>
    </>
  )
}

export default Navbar