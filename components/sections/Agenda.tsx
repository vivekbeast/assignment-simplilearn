import Image from "next/image";
import Rsvpform from "./Rsvpform";

export default function Agenda() {
  return (
    <div className=" bg-inherit  w-full ">
      <div className="px-5 py-7 md:pl-23.25 md:py-14 flex flex-col gap-9 md:gap-19.25">
        <div className=" relative flex flex-col-reverse md:flex-row md:justify-between md:items-center">
          <div className=" w-full md:w-171.75 h-full flex flex-col gap-4 md:gap-11">
            <h1 className="text-2xl md:text-[40px] w-72.5 md:w-full font-satoshi-var  font-black text-[#F5AB40] mb-6">
            Go behind the curtain with real examples and high-scale insights
            </h1>
            <div className=" flex flex-col gap-9">
              <p className="text-lg font-satoshi-var md:text-2xl text-[#000000] font-medium">
            You’ll walk away with:
          </p>
          <div className=" flex flex-col gap-7.5">
            <div className="text-[15px] md:text-[20px] pl-7 border-l-[3px] border-[#F5AB40] font-satoshi-var font-medium whitespace-break-spaces leading-relaxed">
            A clear view of the leadership & workforce capabilities that will matter most over the next 24-36 months
          </div>
          <div className="text-[15px] md:text-[20px] pl-7 border-l-[3px] border-[#F5AB40] font-satoshi-var font-medium whitespace-break-spaces leading-relaxed">
            Insights from high-scale operating environments including the formerCLO of McDonald’s on what truly scales and what breaks under pressure.
          </div>
          <div className="text-[15px] md:text-[20px] pl-7 border-l-[3px] border-[#F5AB40] font-satoshi-var font-medium whitespace-break-spaces leading-relaxed">
            Signals for where capability gaps may already be formingin your organization.
          </div>
          <div className="text-[15px] md:text-[20px] pl-7 border-l-[3px] border-[#F5AB40] font-satoshi-var font-medium whitespace-break-spaces leading-relaxed">
            Peer-validated perspectives from leaders running workforce, talent,and transformation ecosystems at scale.
          </div>
          <div className="text-[15px] md:text-[20px] pl-7 border-l-[3px] border-[#F5AB40] font-satoshi-var font-medium whitespace-break-spaces leading-relaxed">
            Actionable insights you can take straight into your next exec meeting.
          </div>
          </div>
            </div>
          </div>
          <div className=" relative w-67.5 h-67.5 md:h-187.5 md:w-162.5 md:absolute md:right-0 md:top-0">
            <Image
              src="/background/shutterstock_1967772526 1.svg"
              fill
              priority
              alt="background"
            />
          </div>
        </div>
        <Rsvpform agenda={false} />
      </div>
      <div className=" w-full md:px-23.25 md:pt-15 md:pb-24 bg-[#00FFFF] flex flex-col px-5 py-7 gap-6 md:gap-7">
                <h1 className="text-2xl sm:text-5xl lg:text-5xl font-satoshi-var  font-black text-[#1D4DF4] mb-6">
                  Event Agenda
                </h1>
      
              <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
                  <div
                    
                    className="bg-white md:w-97.5 md:h-94 h-64 shadow-[0px_4px_34px_0px_rgba(0,0,0,0.15)] rounded-lg p-6 md:p-8 hover:shadow-md transition-shadow duration-300 border border-gray-100"
                  >
                    <div className="flex flex-col justify-between items-center gap-4 md:mb-4">
                      <div className=" md:h-23.75 flex flex-col justify-start items-start w-full">
                        <h1 className="font-satoshi-var text-[#1D4DF4] text-start font-black text-[19px] md:text-[24px] leading-none tracking-normal">Welcome & Opening</h1>
                      </div>
                      <div className=" flex flex-col gap-6">
                        <h1 className="text-[15px] md:text-[20px] font-satoshi-var font-bold whitespace-break-spaces leading-relaxed">Sudipto Mitra, CRO Simplilearn</h1>
                        <h2 className="text-[15px] md:text-[20px] font-satoshi-var font-medium whitespace-break-spaces leading-relaxed">Why capability-building is now a board-level issue and what’s changing in the workforce landscape.</h2>
                      </div>
                    </div>
      
                  </div>
                 <div
                    
                    className="bg-white md:w-97.5 md:h-94 h-64 shadow-[0px_4px_34px_0px_rgba(0,0,0,0.15)] rounded-lg p-8 hover:shadow-md transition-shadow duration-300 border border-gray-100"
                  >
                    <div className="flex flex-col items-center md:gap-4 md:mb-4">
                      <div className=" h-23.75 flex flex-col justify-start items-start w-full">
                        <h1 className="font-satoshi-var text-[#1D4DF4] text-start font-black text-[19px] md:text-[24px] leading-[120%] tracking-normal">Keynote: <br /> What Enterprise Leaders Are Seeing on the Ground</h1>
                      </div>
                      <div className=" flex flex-col gap-3.5 md:gap-6">
                        <h1 className=" text-[15px] md:text-[20px] font-satoshi-var font-bold leading whitespace-nowrap">Rob Lauber, Former CLO McDonald’s</h1>
                        <h2 className=" text-[15px] md:text-[20px] font-satoshi-var font-medium whitespace-break-spaces leading-relaxed">A grounded view of how AI and AI agents are reshaping work, workflows, and leadership across industries.</h2>
                      </div>
                    </div>
      
                  </div>
                   <div
                    
                    className="bg-white md:w-97.5 md:h-94 h-64 shadow-[0px_4px_34px_0px_rgba(0,0,0,0.15)] rounded-lg p-8 hover:shadow-md transition-shadow duration-300 border border-gray-100"
                  >
                    <div className="flex flex-col items-center gap-4 md:mb-4">
                      <div className=" h-23.75 flex flex-col justify-start items-start w-full">
                        <h1 className="font-satoshi-var text-[#1D4DF4] text-start font-black text-[19px] md:text-[24px] leading-[120%] tracking-normal">Lunch & Executive Conversation</h1>
                      </div>
                      <div className=" flex flex-col gap-6">
                        <h1 className=" text-[15px] md:text-[20px] font-satoshi-var font-bold whitespace-break-spaces leading-relaxed">Industry Experts Invited</h1>
                        <h2 className=" text-[15px] md:text-[20px] font-satoshi-var font-medium whitespace-break-spaces leading-relaxed">What large enterprise talent ecosystems are learning about capability-building at scale.</h2>
                      </div>
                    </div>
      
                  </div>
              </div>
      </div>
      <div className=" w-full relative ">
         <Image
          src="/background/unnamed 1.svg"
          alt="background"
          fill
          priority
          className="md:object-cover object-center"
          />
         <div className=" bg-black/20 relative z-10 flex flex-col gap-32 px-5 py-7 md:px-23.25 md:py-14 h-full items-start justify-center  text-start">
          <div className=" w-full">
            <h1 className="text-xl md:text-3xl font-satoshi-var font-black text-white mb-6">
            Space is limited.
         </h1>
          <Rsvpform agenda={true} />
            </div>
          <div className=" h-full w-full flex flex-col md:flex-row justify-between md:items-center md:text-center items-start text-start gap-4">
            <div className="text-white font-medium md:font-semibold relative
                       md:text-6xl text-4xl tracking-[-0.05em] font-satoshi md:font-satoshi-light  flex flex-row gap-2.5">
          <span>simpl</span><span className=" absolute top-3 md:top-5 right-0 left-1/2">i</span><span>learn</span>
        </div>
        <div className=" flex flex-row justify-center items-center">
          <h1 className=" font-satoshi-var text-white font-medium text-[13px] md:text-[20px] leading-none tracking-[0.02em]">© 2009-2025 - Simplilearn Solutions. All Rights Reserved.</h1>
        </div>
          </div>
         </div>
      </div>
    </div>
  )
}
