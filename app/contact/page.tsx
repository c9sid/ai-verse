import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col justify-center items-center h-[80vh]'>
      <h2 className='text-center text-xl py-5 font-bold text-emerald-500'>Contact Us</h2>
      <form className='flex flex-col gap-2 w-fit p-10 rounded-md bg-slate-900' action="#" method="post">
        <label htmlFor="name" className='w-64 text-start text-slate-300'>Your Name</label>
        <input className='w-64 p-2 bg-slate-50 outline-none ring-1 ring-slate-700 text-slate-950 rounded-md' type="text" name="name" id="name" autoFocus />

        <label htmlFor="email" className='w-64 text-start text-slate-300'>Your E-mail</label>
        <input className='w-64 p-2 bg-slate-50 outline-none ring-1 ring-slate-700 text-slate-950 rounded-md' type="email" name="email" id="email" />

        <label htmlFor="message" className='w-64 text-start text-slate-300'>Your Message</label>
        <textarea className='w-64 p-2 bg-slate-50 outline-none ring-1 ring-slate-700 text-slate-950 rounded-md' cols={1} rows={3} name="message" id="message"></textarea>

        <button type="submit" className='px-2 py-1 rounded-md bg-blue-500 text-white mt-4'>Send</button>
      </form>
    </div>
  )
}

export default page