import logo from "@/app/public/logo.png";
import SkinClinic from "@/app/public/SkinClinic.png";
import Vector from "@/app/public/Vector.png";
import heart from "@/app/public/heart.png";
import search from "@/app/public/search.png";
import shopping from "@/app/public/shopping.png";
import background1 from "@/app/public/background1.png";
import a from "@/app/public/a.png";
import b from "@/app/public/b.png";
import c from "@/app/public/c.png";


import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import {AiOutlineMenu} from "react-icons/ai";
import { BiLogOut } from 'react-icons/bi';

export default function Navbar() {
  return (
    <div className="container pt-8">
      <div className='flex justify-between items-center'>
        
      <div className="flex gap-4"> 
            <Image src={logo} alt='logo image' />
            <Image src={SkinClinic} alt='image' />
      </div>
        <div className='flex justify-between items-center'>
        <ul className='gap-2 lg:gap-20 hidden md:flex'>
          <li><a>Home</a></li>
          <li><a>Shop</a></li>
          <li><a>About</a></li>
          <li><a>Contact</a></li>
          <li><a><Image src={Vector} alt='vector' /></a></li>
          <li><a><Image src={search} alt='search' /></a></li>
          <li><a><Image src={heart} alt='heart' /></a></li>
          <li><a><Image src={shopping} alt='shopping' /></a></li>
        </ul>
</div>
</div>


<div className="relative pt-2"><Image src={background1} alt='backgroud' width={1440} height={1007.93} />



<div className="absolute flex-1 top-[180px] right-[110px] border-5 w-[500px] h-[350px] p-2 bg-[#FFF3E3]

]">
          <h2 className="text-sm text-gray-500 uppercase mb-2">New Arrival</h2>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Discover Our New Collection
          </h1>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="bg-yellow-600 text-white py-2 px-6 rounded-full shadow hover:bg-yellow-700">
            Buy Now
          </button>
        </div>
        

        </div>
<div className="flex w-[1250px] justify-center p-5">        
<div>
  <h1 className="text-4xl font-bold text-center">Browse the Range</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p></div>
    </div>
<div className="flex gap-4 justify-center">
<div><Image src={a} alt='backgroud' width={350} height={521} /><h3 className="text-1xl font-bold text-center">Dining</h3></div>
<div><Image src={b} alt='backgroud' width={350} height={521} /><h3 className="text-1xl font-bold text-center">Living</h3></div>
<div><Image src={c} alt='backgroud' width={350} height={521} /><h3 className="text-1xl font-bold text-center">Bedroom</h3></div>

</div>
    </div>
   
  //  <nav class="gap-5">
  //        <Link href="/about">Home</Link>
  //        <Link href="/about">Shop</Link>
  //        <Link href="/about">About</Link>
  //        <Link href="/contact">Contact</Link>
  //   </nav>
  );
}



