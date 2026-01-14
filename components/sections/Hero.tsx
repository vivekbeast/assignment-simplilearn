import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[85vh] md:h-[88vh] min-h-125 w-full px-5 py-7 md:px-23.25 md:py-14">
      {/* Background image */}
      <Image
        src="/background/homescreen.png"
        alt="Hero background"
        fill
        priority
        className="object-cover object-right md:object-cover md:object-center"
      />

      {/* Overlay */}
      <div className="relative z-10 flex flex-col gap-8 md:gap-16.5 h-full items-start justify-start  text-center">
        <div className="text-white font-medium md:font-semibold relative
                       md:text-6xl text-4xl tracking-[-0.04em] md:tracking-[-0.01em] font-satoshi md:font-satoshi-light  flex flex-row gap-2.5">
          <span>simpl</span><span className=" absolute top-3 md:top-5 right-0 left-1.5">i</span><span>learn</span>
        </div>
        <div className=" flex flex-col w-75 md:w-full gap-4.5">
            <div className=" flex flex-col md:flex-row w-full justify-start gap-3.5 items-start md:items-center">
                <button className="font-satoshi font-bold md:text-[25px] text-[16px] leading-none tracking-normal align-middle text-[#25286A] bg-[#00FFFF] md:w-43.5 md:h-14 w-25.25 h-8.75 rounded-md cursor-pointer">
                    Invite-Only
                </button>
                <h2 className="font-satoshi hidden md:flex font-bold text-xl md:text-[24px] leading-none text-[#00FFFF] tracking-normal align-middle">An Executive Roundtable · Lunch</h2>
                <h2 className="font-satoshi flex md:hidden font-bold text-xl md:text-[24px] text-start leading-[120%] text-[#00FFFF] tracking-normal align-start">An Executive <br /> Roundtable · Lunch</h2>
            </div>
            <div className=" w-full flex flex-col gap-13">
                <div className=" text-[#F5AB40] text-start items-start flex flex-col gap-2.5">
                <h1 className="font-satoshi-black hidden md:flex font-black text-3xl md:text-[46px] leading-[120%] tracking-normal">
                The Skills That Matter Next: 
                </h1>
                <h1 className="font-satoshi-black flex md:hidden font-black text-3xl md:text-[46px] leading-[120%] tracking-normal">
                The Skills <br /> That Matter Next: 
                </h1>
                <h2 className="font-satoshi hidden md:flex flex-col gap-2.5 font-bold text-3xl md:text-[46px] leading-[120%] tracking-normal">
                <span>Preparing Your Workforce</span> <span className=" ">& Leaders for the AI Era</span>
                </h2>
                <h2 className="font-satoshi flex md:hidden flex-col gap-2.5 font-bold text-3xl md:text-[46px] leading-[120%] tracking-normal">
                <span>Preparing Your Workforce & Leaders for the AI Era</span> 
                </h2>
            </div>
            <div className=" flex flex-col items-start gap-5">
                <div className="font-satoshi flex flex-row gap-2 md:gap-6 font-black text-lg md:text-[30px] leading-none text-white tracking-normal align-middle">
                    <div className=" relative md:w-6 md:h-6 w-5 h-5">
                      <Image src="/background/calendar.svg" alt="Hero image" fill priority />
                    </div>
                    <span>February 20, 2026</span>
                </div>
                <div className="font-satoshi flex flex-row gap-2 md:gap-6 whitespace-nowrap font-black text-lg md:text-[30px] leading-none text-white tracking-normal align-middle">
                    <div className=" relative md:w-6 md:h-6 w-5 h-5">
                      <Image src="/background/location.svg" alt="Hero image" fill priority />
                    </div>
                    <span>Chamberlain’s Steak & Fish House, Dallas</span>
                </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
}
