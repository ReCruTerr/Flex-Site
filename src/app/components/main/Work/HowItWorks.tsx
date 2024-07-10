
import Link from "next/link"
import { prosFeatures } from "@/app/data/data"
export const Work:React.FC = () => { 
    return ( 
        <div className=" flex flex-col justify-center items-center gap-16 bg-[#333F51] mb-6 max-w-[1200] w-full min-h-[800px] rounded-2xl">
            <header className=" flex justify-between items-center  gap-8 max-w-[1100px] w-full">
                <div className=" flex flex-col  gap-2 max-w-[400px] w-full">
                    <h1 className=" font-bold text-5xl text-white">Gain more insight into how people use your</h1>
                    <span className=" text-[16px] text-[#8896AB]  ">With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage your business in one secure platform.</span>
                </div>
                <div className=" max-w-[454px] w-full min-h-[300px] ">
                    <Link href='https://www.youtube.com/' className=" relative"><img src="/Video.svg" alt=""  /><div className=" ease-in-out duration-300 hover:opacity-80  max-w-16 w-full h-16 bg-[#22C55E] rounded-full flex justify-center items-center bottom-[38%] left-[43%]  absolute"><img src="/play.svg" alt="" /></div></Link>
                </div>
            </header>
            <main className=" max-w-[1080px] w-full min-h-[348px] gap-3 flex flex-wrap">
                {
                    prosFeatures.map((e) => ( 
                        <div className=" max-w-[350px] w-full min-h-[174px] flex flex-col gap-3">
                            <div className=" rounded-full flex justify-center items-center bg-[#22C55E] max-w-[48px] h-[48px] ">
                                {e.number}
                            </div>
                            <h1 className=" font-bold text-2xl text-white">{e.h1}</h1>
                            <span className="text-[#8896AB] text-xs max-w-[250px]">{e.span}</span>
                        </div>
                    ))
                }
            </main>
        </div>
    )
}