import React from 'react'
import { GetStarted } from '../getStarted'
import Link from 'next/link'
export default function GreatWork() {
  return (
    <div className=' flex flex-col justify-center items-center'>
        <h1 className=' max-w-[900px] w-full  font-bold text-5xl text-[#2A3342] text-center'>Great work starts with your app</h1>
        <div className=' max-w-[1000px] relative h-[525px]'>
            <img src="/HeroImage.svg" className='  ml-24 mt-10 max-w-[900px] w-full' alt="" />
            <img src="/insidePic.svg" className=' absolute bottom-[25%] top-[11%] left-[22%] max-w-[520px] ' alt="" />
        </div>
        <span className='  max-w-[900px] w-full text-[17px] text-[#556987]  text-center'>Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do you best work.</span>
        <div className=' flex justify-center gap-3 max-w-[315px] w-full'>
        <GetStarted text='Learn More'/>
            <Link href='/about' className=' hover:opacity-80 all ease-out duration-300 font-semibold max-w-[140px] w-full h-12 rounded-md flex justify-center items-center text-[16px] text-[#556987] border-[1px]'>About Us</Link>
        </div>
    </div>
  )
}
