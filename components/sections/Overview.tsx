import Image from 'next/image'
import Rsvpform from './Rsvpform';

export default function Overview() {

    const items = [
    {
      id: 1,
      title: "Skills Decay",
      description: "every 2-3 years faster for technical skills",
      icon: "/background/Vector-4.svg", 
    },
    {
      id: 2,
      title: "Manager Role Shift",
      description: "orchestrating people + AI agents",
      icon: "/background/Vector-2.svg", // Replace with your icon
    },
    {
      id: 3,
      title: "Leaders + AI Co-Pilots",
      description: "requires sensemaking and systems thinking",
      icon:"/background/Vector.svg", 
    },
    {
      id: 4,
      title: "Frontline Capability",
      description: "now depends on digital fluency",
      icon: "/background/Vector-5.svg", 
    },
    {
      id: 5,
      title: "Core Human Capabilities",
      description: "analytical reasoning and scenario planning",
      icon: "/background/Vector-3.svg", 
    },
    {
      id: 6,
      title: "Winning Organizations",
      description: "predict skills ahead of demand",
      icon: "/background/Vector-1.svg", 
    },
  ];

  return (
    <section className="relative   w-full ">
        <div className=' flex flex-col gap-6 md:gap-10 px-5 py-7 md:px-23.25 md:py-14'>
          <Rsvpform agenda={false} />
        <div className=' flex flex-col gap-9'>
            <h1 className="font-satoshi-medium font-medium text-[15px] md:text-[27px] leading-7 md:leading-9.75 tracking-normal">
                AI is accelerating change across every operational layer. Roles are shifting. Leadership models are collapsing and reforming. Frontline and mid-level managers will soon lead teams of people and intelligent agents.
            </h1>
            <div className=' flex flex-col gap-16'>
                <div className=' flex flex-col gap-7'>
                    <h1 className="font-satoshi-medium font-medium text-[15px] md:text-[27px] leading-7 md:leading-9.75 tracking-normal">
                    But even the most advanced enterprises are asking the same question:
                </h1>
                <h1 className="font-satoshi-black flex md:hidden font-black text-[25px] md:text-[40px] leading-[120%] md:leading-none tracking-normal text-center">
                    Which capabilities will <br /> matter most, and how do we <br /> build them at scale?
                </h1>
                <h1 className="font-satoshi-black hidden md:flex font-black text-[25px] md:text-[40px] leading-[100%] md:leading-none tracking-normal text-center">
                    Which capabilities will matter most,<br /> and how do we build them at scale?
                </h1>
                </div>
                <div>
                    <h1 className="font-satoshi-medium font-medium text-[15px] md:text-[27px] leading-7 md:leading-9.75 tracking-normal">
                        This invite-only roundtable gathers CHROs, CLOs, and enterprise workforce leaders for a candid, senior-level discussion on what’s coming next.
                    </h1>
                </div>
            </div>
        </div>
        </div>
        <div className=' bg-[#CDDCFB80] text-[#000000]  flex flex-col justify-center items-center'>

      <div className=" w-full h-full px-5 py-7 md:px-23.25 md:py-14">
        <div className=" mb-6">
          <h1 className="text-2xl sm:text-5xl lg:text-5xl font-satoshi-var  font-black text-[#F5AB40] mb-6">
            What We&apos;ll Explore
          </h1>
          <p className="text-[15px] font-satoshi-var md:text-2xl sm:text-xl text-[#000000] font-medium">
            The critical shifts every enterprise must plan for:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white md:w-97.5 md:h-50.75 shadow-[0px_4px_34px_0px_#00000026] rounded-lg p-5 md:p-8 hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className=' relative md:w-10 md:h-10 w-7 h-7'>
                  <Image src={item.icon} alt="icons" fill priority />
                </div>
                <h2 className="text-xl sm:text-2xl leading-6 whitespace-nowrap font-satoshi-var font-bold ">
                  {item.title}
                </h2>
              </div>

              <p className=" text-[16px] w-1/2 md:w-full md:text-[22px] leading-7 font-satoshi-var font-medium whitespace-break-spaces md:leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
  
        </div>
    </section>
  )
}
