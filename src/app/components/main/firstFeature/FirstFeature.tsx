import { wrapDataFeatures } from "@/app/data/data"
export const FirstFeature:React.FC = () => { 
    return ( 
        <div className=" flex flex-col items-center  w-full bg-[#F7F8F9]">
            <header className=" max-w-[1200px] w-full flex justify-start my-10">
                <div className="max-w-[700px] flex flex-col gap-5 ">
                    <h1 className="text-3xl font-bold ">Gain more insight into how people use your</h1>
                    <span className="text-[16px] text-[#556987] max-w-[800px] w-full font-semibold">With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage every aspect of your business in one secure platform.</span>
                </div>
            </header>   
            <main className="flex justify-center gap-36 items-center my-8">
                <div className=" flex flex-col gap-14  justify-center max-w-[460px] min-h-[430px]">   
                    {
                        wrapDataFeatures.map((e,key)=> ( 
                            <div className="flex gap-8">
                                <div className=" max-w-14 w-full h-14 bg-[#22C55E] rounded-md flex justify-center items-center">
                                    <img src={e.img} className=" max-w-6 h-6" alt="" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h1 className=" font-bold text-2xl">{e.h1}</h1>
                                    <span className=" text-[#556987] text-[15px]">{e.span}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <img src="/ImageContainer.svg" alt="" />
            </main>
        </div>
    )
}