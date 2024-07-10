import { wrapData } from '@/app/data/data'
import Link from 'next/link'
import React from 'react'
import { GetStarted } from './getStarted'  
import { FirstFeature } from './firstFeature/FirstFeature'
import { SecondFeature } from './secondFeature/SecondFeature'
import { Numbers } from './Number/Numbers'
export default function Features() {
  return (
    <div className=' bg-[#F7F8F9]'>
    <div className=' flex flex-col items-center gap-5  mt-16 '>
        <strong className=' text-4xl  text-[#2A3342]'>Gain more insight into how people use your</strong>
        <span className=' max-w-4xl w-full text-center text-[17px]  text-[#556987] font-medium'>With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage every aspect of your business in one secure platform.</span>
        <div className=' max-w-[1100px] flex-wrap min-h-[594px] flex justify-center align  '>
            { 
                wrapData.map((e) => (
                    <div className=' flex flex-col justify-center items-center gap-4 max-w-[350px] max-h-[270px] w-full'>
                        <div className=' max-w-16 w-full h-16 bg-[#22C55E] flex justify-center items-center rounded-md'> 
                            <img src={e.img} alt="" className=' max-w-6 h-6' />
                        </div>
                        <h1 className=' text-2xl font-bold '>
                            {e.h1}
                        </h1>
                        <span className=' text-[17x] text-[#556987] text-center'>
                            {e.span}
                        </span>
                    </div>
                ))
            }
        </div>
    </div>

    <div className='flex justify-center items-center w-screen'>
        <div className=' flex justify-around items-center max-w-[1140px] w-full min-h-52 bg-[#333F51] rounded-lg  my-6'>
            <div className=' max-w-[450px] w-full'>
                <h1 className=' text-white text-4xl text-left font-bold'>The fastest way from idea to live site. Period.</h1>
                <span className=' text-[#8896AB] text-[18px]'>Flex is a Small SaaS Business. Flex isn’t a traditional company.</span>
            </div>
            <div className=' flex gap-3 max-w-80 w-full'>
            <GetStarted text='Get Started'/>
            <Link href="" className=' max-w-[170px]  text-[16px]  w-full h-12 ease-in-out duration-300 hover:opacity-80 bg-white rounded-md  flex  justify-center items-center text-[#333F51]'>Learn More</Link>
            </div>
        </div>
    </div>
    <FirstFeature/>
    <SecondFeature/>
    <Numbers/>
    </div>
   
  )
}
