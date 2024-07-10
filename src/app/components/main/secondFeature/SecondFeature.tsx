import { GetStarted } from "../getStarted"

export const SecondFeature:React.FC = () => { 
    return ( 
        <div className=" flex justify-center  gap-[130px] my-8 ">
            <img src="/ImageContainer.svg" alt="" />
            <main className=" flex flex-col justify-center gap-10 max-w-[450px] w-full text-left">
                <h1 className=" text-[#2A3342] text-5xl font-bold">
                Gain more insight into how people use your
                </h1>
                <span className=" text-[16px] text-[#556987]">With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage every aspect of your business in one secure platform.</span>
                <GetStarted text="Get Started"/>
            </main>
        </div>
    )
}   