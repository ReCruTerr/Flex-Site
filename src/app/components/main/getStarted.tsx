import Link from 'next/link'
import React from 'react'

 interface I_Text { 
    text:string
 }
export const GetStarted:React.FC<I_Text> = ({text}) => {
  return (
    <Link href=''  className="  max-w-[170px]  text-[16px]  w-full h-12 bg-[#22C55E] ease-in-out duration-300 hover:opacity-80   rounded-md text-white flex  justify-center items-center">{text}</Link>
  )
}
 