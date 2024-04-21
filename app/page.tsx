import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";
import { FaHotjar } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <section className="container py-10 px-5 lg:py-0 lg:px-0 md:h-[90vh] w-full lg:flex md:block justify-center items-center">
        <div className="left text-center space-y-5 w-full lg:w-3/5">
        <h2 className="lg:text-4xl text-3xl font-bold text-zinc-500">One of the Best <span className="bg-gradient-to-r from-[#ff7170] to-[#ffe57f] bg-clip-text text-transparent">AI Learning</span> Free Platform</h2>
        <p className="text-md lg:text-lg text-zinc-600">Explore the website to get updated about new and fascinating AI tools.</p>
        <div className="btn text-sm space-x-3 pt-5">
          <Link className="py-2 px-4 ring-1 ring-zinc-950 hover:text-white hover:bg-zinc-950 text-zinc-950 rounded-md" href={'#trending'}>Explore Now</Link>
          <Link className="py-2 px-4 ring-1 bg-zinc-950 text-white ring-zinc-950 hover:bg-zinc-800 rounded-md" href={'/about'}>About Us</Link>
        </div>
        </div>
        <div className="right grid place-items-center lg:w-2/5">
          <Image 
            src={'/2.png'}
            width={400}
            height={400}
            alt="hero-image"
            id="hero"
            className="grayscale hover:grayscale-0 transition-all duration-200"
          />
        </div>
      </section>

      <section className="h-screen px-5" id="trending">
        <div className="flex items-center gap-x-1 pt-14 pb-5">
        <div><h2 className="text-2xl text-red-500 font-semibold">Trending Now</h2></div>
        <div className="text-2xl text-red-500 font-semibold"><FaHotjar className="animate-pulse" /></div>
        </div>

        <div className="flex overflow-x-scroll no-scrollbar">
        <Card />
        </div>
      </section>
    </>
  );
}
