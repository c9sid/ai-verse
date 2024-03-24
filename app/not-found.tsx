import Image from 'next/image'
import Link from 'next/link'
 
export default function NotFound() {
  return (
      <div className='flex flex-col justify-center items-center h-[80vh] gap-3'>
      <Image src={'/error-page.png'} width={300} height={300} alt='page not found' id='hero' />
      <h2 className='text-red-500 font-bold text-2xl'>404 Not Found</h2>
      <p className='text-slate-300'>Could not find requested resource</p>
      <Link href="/" className='text-blue-500 hover:underline'>Return Home</Link>
    </div>
  )
}