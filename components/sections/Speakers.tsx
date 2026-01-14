import Image from 'next/image'
import React from 'react'

export default function Speakers() {
  return (
    <div className="bg-linear-to-b from-[#1D4DF4] to-[#112D8E] px-5 py-7 md:px-23.25 md:py-14 w-full flex flex-col gap-6 md:gap-13">
      <h1 className="text-2xl md:text-[40px]  font-satoshi-var  font-black text-[#F5AB40] mb-6">
          Featured Speakers
      </h1>
      <div className=' flex flex-col gap-13 w-full'>
        <div className=' w-full h-full flex flex-col md:flex-row justify-center items-center md:justify-start md:items-start gap-1.5 md:gap-14'>
          <div className=' relative w-48 h-45.75 md:w-85 md:h-81.25 rounded-lg'>
            <Image src="/background/RobLauber 1.svg" alt="speaker1" fill priority className=' object-cover  rounded-lg' />
          </div>
          <div className=' w-full md:w-204.5 h-full flex flex-col justify-center items-center text-center md:justify-start md:items-start md:text-start gap-2 md:gap-6'>
            <h1 className=' text-[#00FFFF] font-satoshi-var font-black text-2xl md:text-[30px] leading-none tracking-normal'>Rob Lauber</h1>
            <p className=' text-white font-satoshi-var font-medium text-[15px] md:text-[24px] leading-6 md:leading-8.75 tracking-normal'>
              Rob Lauber is a global workforce and capability-building leader with over 25 years of experience helping organizations prepare leaders and frontline teams for change. Most recently, he served as SVP and Chief Learning Officer at McDonald’s, leading learning and development across 37,000+ restaurants worldwide. His perspective is especially relevant as organizations rethink leadership and capability models in the age of AI.
            </p>
          </div>
        </div>
        <div className=' w-full h-full flex flex-col md:flex-row justify-center items-center md:justify-start md:items-start gap-1.5 md:gap-14'>
          <div className=' relative w-48 h-45.75 md:w-85 md:h-81.25 rounded-lg'>
            <Image src="/background/RobLauber 1-1.svg" alt="speaker1" fill priority className=' object-cover rounded-lg' />
          </div>
          <div className=' w-full md:w-204.5 h-full flex flex-col justify-center items-center text-center md:justify-start md:items-start md:text-start gap-2 md:gap-6'>
            <h1 className=' text-[#00FFFF] font-satoshi-var font-black text-2xl md:text-[30px] leading-none tracking-normal'>Krishna Kumar</h1>
            <p className=' text-white font-satoshi-var font-medium text-[15px] md:text-[24px] leading-6 md:leading-8.75 tracking-normal'>
Krishna Kumar is the Founder and CEO of Simplilearn, working closely with enterprises navigating workforce transformation driven by AI and digital change. At the center of the learning and skills ecosystem, he brings a unique perspective on how roles, leadership expectations, and capabilities are evolving across industries. Through direct engagement with enterprise leaders and education partners, he sees what scales, and what doesn’t, in building workforce readiness for the AI era, offering a cross-enterprise view of the priorities shaping workforce strategy today.            </p>
          </div>
        </div>
        <div className=' w-full h-full flex flex-col md:flex-row justify-center items-center md:justify-start md:items-start gap-1.5 md:gap-14'>
          <div className=' relative w-48 h-45.75 md:w-85 md:h-81.25 rounded-lg'>
            <Image src="/background/RobLauber 1-2.svg" alt="speaker1" fill priority className=' object-cover rounded-lg' />
          </div>
          <div className=' w-full md:w-204.5 h-full flex flex-col justify-center items-center text-center md:justify-start md:items-start md:text-start gap-2 md:gap-6'>
            <h1 className=' text-[#00FFFF] font-satoshi-var font-black text-2xl md:text-[30px] leading-none tracking-normal'>Sudipto Mitra</h1>
            <p className=' text-white font-satoshi-var font-medium text-[15px] md:text-[24px] leading-6 md:leading-8.75 tracking-normal'>
Sudipto Mitra is a senior transformation and growth leader with over 20 years of experience helping enterprises navigate large-scale change across technology, operations, and talent. As Chief Revenue Officer at Simplilearn, he works with executive teams to address workforce capability gaps as AI reshapes roles and operating models. He previously held leadership roles at Accenture, IBM Consulting, and WorkFusion.            </p>
          </div>
        </div>
      </div>
      <div className=' w-full h-48.75 md:h-56 relative'>
              <Image
                src="/background/try SLH+.svg"
                alt="background"
                fill
                priority
                className="object-cover object-center rounded-lg"
              />
              <div className=' relative z-10 flex flex-col px-4 py-5  md:pl-20 md:pr-28 h-full items-start justify-center gap-3.5 text-start'>
            <h1 className=' text-[#00FFFF] font-satoshi-var font-black text-[20px] md:text-[30px] leading-[100%] md:leading-none tracking-normal'>Additional Expert Perspectives</h1>
            <p className=' text-white font-satoshi-var font-medium text-[15px] md:text-[24px] leading-7 md:leading-8.75 tracking-normal'>
Invited experts from leading consulting and enterprise learning organizations will contribute short perspectives, offering insight into how large organizations are evolving skills and leadership models in the AI era.            </p>
          </div>
      </div>
    </div>
  )
}
