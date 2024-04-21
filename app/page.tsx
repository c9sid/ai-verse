import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";
import { FaHotjar } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <section className="container py-10 px-5 lg:py-0 lg:px-0 md:h-[90vh] w-full lg:flex md:block justify-center items-center">
        <div className="left text-center space-y-5 w-full lg:w-3/5">
        <h2 className="lg:text-4xl text-3xl font-bold text-slate-400">One of the Best <span className="bg-gradient-to-r from-[#103ce7] to-[#64e9ff] bg-clip-text text-transparent">AI Learning</span> Free Platform</h2>
        <p className="text-md lg:text-lg text-slate-500">Explore the website to get updated about new and fascinating AI tools.</p>
        <div className="btn text-sm space-x-3 pt-5">
          <Link className="py-2 px-4 ring-1 ring-blue-500 hover:ring-blue-600 hover:text-white hover:bg-blue-600 text-blue-500 rounded-md" href={'#trending'}>Explore Now</Link>
          <Link className="py-2 px-4 ring-1 bg-blue-500 text-white ring-blue-500 hover:bg-blue-600 rounded-md" href={'/about'}>About Us</Link>
        </div>
        </div>
        <div className="right grid place-items-center lg:w-2/5">
          <Image 
            src={'/2.png'}
            width={400}
            height={400}
            alt="hero-image"
            id="hero"
          />
        </div>
      </section>

      <section className="h-screen px-5" id="trending">
        <div className="flex items-center gap-x-1 pt-14 pb-5">
        <div><h2 className="text-2xl bg-gradient-to-r from-[#ff7170] to-[#ffe57f] bg-clip-text text-transparent font-semibold">Trending Now</h2></div>
        <div className="text-2xl text-[#ffe57f] font-semibold"><FaHotjar /></div>
        </div>

        <div className="flex overflow-x-scroll no-scrollbar">
        <Card />
        </div>
      </section>
    </>
  );
}
