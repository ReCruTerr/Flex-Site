import { powerNum } from "@/app/data/data"

export const Numbers:React.FC = () => { 
    return ( 
        <div className=" flex flex-col gap-7 justify-center items-center text-center w-screen mt-12">
            <header className=" flex flex-col gap-3 max-w-[800px] w-full">
                <h1 className=" text-5xl text-[#2A3342] font-bold">We believe in the power of data</h1>
                <span className=" text-[16px] text-[#556987]"> Flex is the only business platform that lets you run your business on one platform, seamlessly across all digital channels.</span>
            </header>
            <main className=" flex justify-around items-center max-w-[1150px] w-full my-10">
                {
                    powerNum.map((e) => (
                        <div className=" flex flex-col gap-3">
                            <h1 className="text-4xl text-[#22C55E] font-bold">{e.number}</h1>
                            <span className="text-[#556987] text-[15px]">{e.text}</span>
                        </div>
                    ))
                }
            </main>
        </div>
    )
}