'use client'
import Link from "next/link"
import { nav } from "@/app/data/data"
import { Brands } from "@/app/data/data"
import { useSetInput } from "@/store/store"
export const Header:React.FC = () => { 
    const value = useSetInput((state) => state.value);
    const updateValue = useSetInput((state) => state.updateValue);
    const cleanValue = useSetInput((state) => state.cleanValue);

    return ( 
        <header className=" bg-[#F7F8F9]  w-screen h-[850px] flex flex-col items-center gap-14 ">
            <nav className=" flex justify-between pl-7 pr-7  mt-2  w-screen max-h-10">
                <div className=" flex gap-2">
                    <img src="/Group.svg" alt=""  className=" mex-w-8 h-9 "/>
                    <h1 className=" font-bold text-2xl">Flex</h1>
                </div>
                <div className=" flex gap-8  text-[15px] text-[#556987]  font-semibold justify-center max-w-md w-full  items-center">
                    {
                        nav.map((el,key)=> ( 
                            <Link href={el.href}>{el.name}</Link>
                        ))
                    }
                </div>
                <div className=" flex gap-3 max-w-40 w-full h-9 items-center">
                    <a href="" className=" text-[#556987] no-underline	">Log in</a>
                    <a href="" className=" max-w-[86px] w-full h-9 bg-[#22C55E] ease-in-out duration-300 hover:opacity-80   rounded-md text-white text-[16px] flex justify-center items-center">Sign Up</a>
                </div>
            </nav>
            <main className=" max-w-6xl w-full min-h-[569px] bg-[#333F51] flex flex-col  items-center justify-center  gap-5 rounded-t-3xl">
                <h1 className=" text-5xl text-white max-w-[850px] w-full text-center font-bold">
                A small business is only <br/> as good as its tools. 
                </h1>
                <span className=' text-[#8896AB] text-xl text-left max-w-[715px]'>We’re different. Flex is the only saas business platform that lets you run your business on one platform, seamlessly across all digital channels.</span>
                <form action="" className=' flex gap-4' >
                    <div className=" relative max-w-xs " >
                        <img src="/email.svg" alt="" className=" pl-1 absolute max-w-6 w-full h-6 mt-2" />
                        <input value={value} onChange={(e)=>updateValue(e.currentTarget.value)} type="text" className=" outline-none rounded-lg pl-10  h-10 text-[14px] text-[#667085] " placeholder="Enter your work email" />
                    </div>
                    <button onClick={(e)=>{ 
                        e.preventDefault();
                        cleanValue();
                    }}  className=" max-w-[207px] w-full  h-15 ease-in-out duration-300 hover:opacity-80 bg-[#22C55E]  rounded-md text-white text-[15px] px-2 py-1 flex justify-center items-center">Get early access</button>
                </form>
                <span className=' text-[#8896AB] text-[14px] text-left max-w-[715px]'>Start your free 14-day trial today, no credit card required.</span>
            </main>
            <footer>
                    <span className="text-[#BBC3CF] text-[14px] opacity-85">Join 4,000+ companies already growing</span>
                    <div className=" flex  gap-10">
                        {
                            Brands.map((el) => ( 
                                <img src={el} alt=""/>
                            ))
                        }

                    </div>
            </footer>
        </header>
    )
}