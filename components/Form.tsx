"use client"

import { useFormState } from "react-dom";
 
export async function FormSubmit (prevState: any ,formData: any) {

  const res = await fetch('api/contact',{
    method: "POST",
    body: formData,
  })
  const data = await res.json()
  return data
}

const Form = () => {
  const [state, FormAction] = useFormState(FormSubmit, '');
 
  return (
    <>
    <div className='flex flex-col justify-center items-center'>
      <h2 className='text-center text-xl py-5 font-bold text-emerald-500'>Contact Us</h2>
      <form className='flex flex-col text-sm gap-2 w-fit p-10 rounded-md border border-zinc-300 shadow-md' action={FormAction}>

      <div className={`${"error text-red-500 text-center"}`}>
      {state.message}
      </div>

        <label htmlFor="name" className='w-64 text-start text-zinc-500'>Your Name</label>
        <input className='w-64 p-2 outline-none ring-1 ring-slate-300 hover:ring-zinc-500 text-slate-950 rounded-md' placeholder="Enter full name" name="fullname" type="text" autoFocus />

        <label htmlFor="email" className='w-64 text-start text-zinc-500'>Your E-mail</label>
        <input className='w-64 p-2 outline-none ring-1 ring-slate-300 hover:ring-zinc-500 text-slate-950 rounded-md' placeholder="Enter email" name="email" type="email" />

        <label htmlFor="message" className='w-64 text-start text-zinc-500'>Your Message</label>
        <textarea className='w-64 p-2 outline-none ring-1 ring-slate-300 hover:ring-zinc-500 text-slate-950 rounded-md' placeholder="Your message" name="message" cols={1} rows={3}></textarea>

        <button type="submit" className='px-2 py-2 rounded-md bg-zinc-950 hover:bg-zinc-800 text-white mt-4'>Send</button>
      </form>
    </div>
    </>
  )
}

export default Form