"use client"

import Link from 'next/link'
import React from 'react'
import toast from 'react-hot-toast'

const Footer = () => {

  const handleClick = () => {
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full bg-slate-900 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-white ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img
                className="h-10 w-10 rounded-full"
                src="https://scontent.fdel1-7.fna.fbcdn.net/v/t39.30808-1/257931970_1284835348659265_6873558641129840690_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kKcvHfZxg_YAb6c9YQV&_nc_ht=scontent.fdel1-7.fna&oh=00_AfDoQd4RjerdhFKjJHpB10k2JqWWtt4YZ3QUH7DD61l-dA&oe=662215CA"
                alt="sid"
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-slate-50">
                Siddharth Kumar
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Web Developer
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-slate-500">
          <Link
            href={'https://www.instagram.com/_s_i_d._d_h_a_r_t_h_/'} target='_blank'
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-300 hover:text-indigo-400 focus:outline-none"
          >
            Contact
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

