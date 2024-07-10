import { nav2 } from "@/app/data/data"
import Link from "next/link"
export const Footer:React.FC = () => { 
    return ( 
         <div className=" w-screen min-h-60 bg-[#333F51] flex flex-col justify-center items-center gap-10">
            <header className="flex  gap-2">
                <img src="Group.svg" alt="" />
                <h1 className=" font-bold text-3xl text-white">Flex</h1>
            </header>
            <main className=" max-w-[800px] w-full flex justify-around ">
                {
                     nav2.map((el,key)=> (
                        <Link href={el.href} className=" text-[#8896AB] text-[16px] ">{el.name}</Link>
                    ))
                }
            </main>
            <footer>
                <span className=" text-[#8896AB] text-[17px]">© 2021 Flex. All rights reserved.</span>
            </footer>
         </div>
    )
}