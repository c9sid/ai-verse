"use client"

import Link from 'next/link'
import React from 'react'
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';

const Navbar = () => {

  const [navbar, setNavbar] = useState(false);

  return (
<>
    {/* Desktop navbar */}
    <nav id='navbar' className='hidden bg-slate-950/60 backdrop-blur-sm sticky top-0 md:flex justify-between items-center px-5 py-5 z-10'>
      <div className="logo">
        <Link href={'/'} className='text-2xl font-semibold text-blue-500'>AI verse</Link>
      </div>
      <div className="menu">
        <ul className='flex justify-between items-center gap-x-5'>
          <li className='text-slate-300 transition duration-200 hover:text-blue-500'><Link href={'/'}>Home</Link></li>
          <li className='text-slate-300 transition duration-200 hover:text-blue-500'><Link href={'/image-generator'}>Image Generator</Link></li>
          <li className='text-slate-300 transition duration-200 hover:text-blue-500'><Link href={'/voice-generator'}>Voice Generator</Link></li>
          <li className='text-slate-300 transition duration-200 hover:text-blue-500'><Link href={'/video-generator'}>Video Generator</Link></li>
          <li className='text-slate-300 transition duration-200 hover:text-blue-500'><Link href={'/about'}>About</Link></li>
          <li className='text-slate-300 transition duration-200 hover:text-blue-500'><Link href={'/contact'}>Contact</Link></li>
        </ul>
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
        <li className='hover:bg-gray-200 text-md  rounded text-slate-300 hover:text-black py-1'>
          <Link onClick={() => setNavbar(!navbar)} href={'/'}>Home</Link></li>
        <li className='hover:bg-gray-200 text-md  rounded text-slate-300 hover:text-black py-1'>
          <Link onClick={() => setNavbar(!navbar)} href={'/image-generator'}>Image Generator</Link></li>
        <li className='hover:bg-gray-200 text-md  rounded text-slate-300 hover:text-black py-1'>
          <Link onClick={() => setNavbar(!navbar)} href={'/voice-generator'}>Voice Generator</Link></li>
          <li className='hover:bg-gray-200 text-md  rounded text-slate-300 hover:text-black py-1'>
          <Link onClick={() => setNavbar(!navbar)} href={'/video-generator'}>Video Generator</Link></li>
        <li className='hover:bg-gray-200 text-md  rounded text-slate-300 hover:text-black py-1'>
          <Link onClick={() => setNavbar(!navbar)} href={'/about'}>About</Link></li>
        <li className='hover:bg-gray-200 text-md  rounded text-slate-300 hover:text-black py-1'>
          <Link onClick={() => setNavbar(!navbar)} href={'/contact'}>Contact</Link></li>
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