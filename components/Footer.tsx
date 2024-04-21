"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import toast from 'react-hot-toast'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {

  const handleClick = () => {
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <Image className='rounded-full' alt='developer' width={42} height={42} src={'/devloper/siddharth.jpeg'} />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-slate-950">
                Siddharth Kumar
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Web Developer
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-slate-300">
          <Link
            href={'https://www.instagram.com/_s_i_d._d_h_a_r_t_h_/'} target='_blank'
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center gap-1 justify-center text-sm font-medium text-red-500 hover:text-red-600 focus:outline-none"
          >
            Contact <FaInstagram />
          </Link>
        </div>
      </div>
    ))
  }

  return (
    <div className='flex items-center justify-center'>
        <button type="button" onClick={handleClick} className="text-blue-300 p-4">@About developer</button>
    </div>
  )
}

export default Footer

