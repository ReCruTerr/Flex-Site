import { lastWrap } from '@/app/data/data'
import {socials} from '@/app/data/data'
import React from 'react'

export const Connect:React.FC = () => { 
    return ( 
        <div className='flex  flex-col items-center gap-6 w-screen  my-20'>
            <header className=' max-w-[900px] w-full flex flex-col gap-3 '>
                <h1 className='text-center font-bold text-5xl text-[#2A3342]'>Let’s stay connected</h1>
                <span className='text-center  text-[#556987] text-[16px]'>It's never been easier to get in touch with Flex. Call us, use our live chat widget or email and we'll get back to you as soon as possible!</span>
            </header>
            <main className=' max-w-[1070px] w-full flex justify-around items-center gap-10'>
                {
                    lastWrap.map((e) => ( 
                        <div className=' flex flex-col items-center gap-2 max-w-[260px] w-full'>
                            <div className=' max-w-[44px] w-full h-[44px] flex justify-center items-center bg-[#22C55E] rounded-full'>
                                <img src={e.img}  alt="" />
                            </div>
                            <h1 className='font-bold text-4xl text-[#2A3342]'>{e.h1}</h1>
                            <span className='text-[16px] text-[#556987]'>{e.span}</span>
                        </div>
                    ))
                    
                }   
                {
                    socials.map((e) => ( 
                        <div className=' flex flex-col items-center gap-4 max-w-[260px] w-full'>
                            <div className=' max-w-[44px] w-full h-[44px] flex justify-center items-center bg-[#22C55E] rounded-full'>
                                <img src={e.img}  alt="" />
                            </div>
                            <h1 className='font-bold text-4xl text-[#2A3342]'>{e.h1}</h1>
                            <span className=' flex gap-5'>
                               <a  target='blank'href="https://www.facebook.com/?locale=ru_RU"> <img src={e.facebook} alt=""     /></a>
                               <a  target='blank'href="https://twitter.com/?lang=ru"><img src={e.twitter} alt="" /></a>
                                <a target='blank' href="https://www.instagram.com/"><img src={e.inst} alt="" /></a>
                                <a target='blank' href="https://ru.linkedin.com/"><img src={e.link} alt="" /></a>
                            </span>
                        </div>
                    ))
                }
            </main>

        </div>
    )
}