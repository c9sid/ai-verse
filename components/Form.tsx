"use client"

import { useState } from "react"
import toast from "react-hot-toast";

const Form = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const res = await fetch('api/contact', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });

    const {msg, success} = await res.json();
    setError(msg);
    setSuccess(success);
    
    if(success) {
      setFullname('');
      setEmail('');
      setMessage('');
      msg.forEach((message: any) => {
        toast.success(String(message));
      });
    } else{
      msg.forEach((message: any) => {
        toast.error(String(message));
      });
    }
  };
 
  return (
    <>
    <div className='flex flex-col justify-center items-center'>
      <h2 className='text-center text-xl py-5 font-bold bg-gradient-to-r from-[#7AFFD7] to-[#00FFB2] bg-clip-text text-transparent'>Contact Us</h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2 w-fit p-10 rounded-md bg-slate-900'>

      {/* {error &&
          error.map((e, index) => (
            <div
              key={index}
              className={`${
                success ? "text-emerald-500" : "text-red-500"
              } text-center`}
            >
              {e}
            </div>
          ))} */}

        <label htmlFor="name" className='w-64 text-start text-slate-300'>Your Name</label>
        <input className='w-64 p-2 bg-slate-50 outline-none ring-1 ring-slate-700 text-slate-950 rounded-md' onChange={(e) => setFullname(e.target.value)} value={fullname} placeholder="Enter full name" name="fullname" type="text" autoFocus />

        <label htmlFor="email" className='w-64 text-start text-slate-300'>Your E-mail</label>
        <input className='w-64 p-2 bg-slate-50 outline-none ring-1 ring-slate-700 text-slate-950 rounded-md' onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter email" name="email" type="text" />

        <label htmlFor="message" className='w-64 text-start text-slate-300'>Your Message</label>
        <textarea className='w-64 p-2 bg-slate-50 outline-none ring-1 ring-slate-700 text-slate-950 rounded-md' onChange={(e) => setMessage(e.target.value)} value={message} placeholder="Your message" name="message" cols={1} rows={3}></textarea>

        <button type="submit" className='px-2 py-1 rounded-md bg-blue-500 hover:bg-blue-600 text-white mt-4'>Send</button>
      </form>
    </div>
    </>
  )
}

export default Form