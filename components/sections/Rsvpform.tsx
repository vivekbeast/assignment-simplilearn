import Image from 'next/image'
import { rsvpAction } from '@/app/actions/rsvp';
export default function Rsvpform({ agenda }: { agenda: boolean }) {
  return (
         <form
                  action={rsvpAction}
                  className="flex flex-col md:flex-row gap-5.75"
                >
                  <span className={`rounded md:rounded-lg  ${agenda ? " bg-[#E7E7E7E5]" : " bg-[#E7E7E733]"} border border-[#0000004A]
                                   flex flex-row md:w-150 h-11 md:h-20.25 gap-4.5
                                   items-center px-4 py-2`}>
        
                    <div className="relative w-6 h-5 md:w-8 md:h-9">
                      <Image src="/background/mail.svg" fill priority alt="Email icon" />
                    </div>
        
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Enter your work email to bg-inherit confirm your attendance"
                      className="placeholder:text-[#00000066] font-satoshi
                                 placeholder:font-normal text-[13px] md:text-[20px]
                                 border-0 outline-none focus:outline-none focus:ring-0
                                 w-full h-full"
                    />
                  </span>
        
                  <button
                    type="submit"
                    className="cursor-pointer bg-linear-to-r
                               from-[rgba(245,171,64,0.9)] to-[#F5AB40]
                               w-36 md:w-62.75 h-11 md:h-20
                               text-white text-center font-satoshi font-bold
                               text-[15px] md:text-[29px]
                               rounded-[5px] md:rounded-lg
                               flex justify-center items-center"
                  >
                    RSVP Now
                  </button>
                </form>
  )
}
