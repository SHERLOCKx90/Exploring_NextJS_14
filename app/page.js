"use client"

import Image from 'next/image'
import { LuMoonStar, LuQrCode, LuMoreVertical } from "react-icons/lu";
import { useState } from 'react';


export default function Home() {
  const [show, setShow] = useState(false);

  const HandleOnClick = () => {
    setShow(!show);
  }
  return (
    <div className='flex flex-row items-center justify-center'>
      <div className='text-md text-slate-400 font-normal font-mono flex flex-row items-center justify-center py-3 px-3 my-4 bg-slate-900 w-max rounded-lg relative mx-auto'>
        Hello World! This website is being developed using NextJS-14 & styled using Tailwind CSS.
        <span className='ml-8 w-7 h-7 hover:cursor-pointer hover:translate-y-1 hover:transition hover:ease-linear hover:bg-slate-500 hover:rounded-[100%] flex justify-center items-center hover:text-black'><LuMoonStar /></span>
        <span className='ml-3 w-7 h-7 hover:cursor-pointer hover:translate-y-1 hover:transition hover:ease-linear hover:bg-slate-500 hover:rounded-[100%] flex justify-center items-center hover:text-black'><LuQrCode /></span>
        <span className='ml-3 w-7 h-7 hover:cursor-pointer hover:translate-y-1 hover:transition hover:ease-linear hover:bg-slate-500 hover:rounded-[100%] flex justify-center items-center hover:text-black' onClick={HandleOnClick}><button><LuMoreVertical /></button></span>
        {show ? (<>
          <div className='card bg-slate-500 text-black font-mono font-bold py-2 px-2 rounded-[7px] absolute right-6 top-6 z-10 transition-all ease-linear translate-y-3 flex flex-col justify-start items-center'><h1 className='text-slate-700'>Menu</h1>
          <ul>
            <li className='hover:bg-slate-600 cursor-pointer px-1 rounded-md hover:transition-all hover:ease-in-out'>About Us</li>
            <li className='hover:bg-slate-600 cursor-pointer px-1 rounded-md hover:transition-all hover:ease-in-out'>Services</li>
            <li className='hover:bg-slate-600 cursor-pointer px-1 rounded-md hover:transition-all hover:ease-in-out'>Projects</li>
          </ul>
          </div>
        </>) : null}
      </div>
    </div>
  )
}