import Link from 'next/link'
import Image from 'next/image'
import { cardData } from '@/lib/data'

const Card = () => {
  return (
    <>
      {cardData.map((card:any) => (
        <div className='card-group flex flex-col w-[300px] min-w-[300px] m-3 px-3 py-5 duration-200 rounded-md border-zinc-300 border shadow-md hover:shadow-none' key={card.id}>
        <div className="heading flex items-center justify-between pb-3">
        <h2 className='text-xl font-semibold text-zinc-950' key={card.heading}>{card.heading}</h2>
        <Image 
          src={card.image}
          width={20}
          height={20}
          alt={'png'}
        />
        </div>
        <p className='pb-3 grow text-zinc-500 line-clamp-5 overflow-y-scroll no-scrollbar'>{card.desc}</p>
        <Link href={card.url} target='_sid' className='text-blue-500 hover:underline font-semibold'>{card.urlText} <span>&rarr;</span></Link>
      </div>
      ))}
    </>
  )
}

export default Card