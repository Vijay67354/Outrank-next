import React from 'react'
import Link from "next/link";

const Connect = () => {
  return (
    <div>

{/* <div className='flex justify-center items-center flex-col pt-16 '>
        <div className='lg:text-4xl text-3xl text-[#070b19] w-[90%] text-center font-bold pt-3'>AUTOMATE & INNOVATE</div>
        <p className='italic text-3xl font-semibold text-[#eb305c] text-md  pt-3 text-center'>Accelerate results with machine-learning that adapts to your audience.</p>
      </div> */}

<div>

<section className="py-20 bg-stone-100 mt-10">  
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        <div className="px-4 md:mr-6">
          <h3 className="text-4xl pr-6 sm:leading-snug tracking-tight font-bold text-black">
          INTEGRATED MARKETING AUTOMATION SERVICES
          </h3>
        
          <p className="text-justify text-base font-medium py-4 text-gray-600">A common barrier between streamlined business to consumer communication is information delivered at the wrong time, in the wrong format. Marketing managers, CEOs and business owners that still release their messages to their audience manually are drowning in information overload and struggling to find the time to deliver succinct, effective material.</p>
          <p className="text-justify text-base font-medium text-gray-600">Developing meaningful and relevant content that stands out from the noise requires the latest marketing tools and machine-learning software. With an integrated marketing automation strategy, businesses can create personalised content that’s built on audience insights and the latest digital approaches. Start by partnering with Impress!ve™ and achieve your organisation’s goals through data-rich, automated marketing that is based on your unique audience and frees up your own valuable time to focus on your growth.</p>
          <div className='pt-6'>
              <Link href='#'>
                <a
                  className="  font-semibold  text-white md:text-lg  text-base px-8 py-2 bg-[#eb305c] hover:bg-[#007bff] uppercase rounded-lg transition duration-500"
                  style={{ boxShadow: "2px 3px 4px rgba(0, 0, 0, 0.5)" }}
                >
                  Get a free Quote
                </a>
              </Link>
            </div>
        
        </div>
        <div>
          <div className=" bg-[#eb305c] transform -translate-x-10 relative h-64"></div>
          <div className="transform md:rounded-md bg-white rotate-3 scale-110 translate-x-10 md:shadow-2xl mr-12 -mt-44 space-y-2">
          <img src="assets/images/automation-1.png" />
          </div>
        </div>
      </div>
    </section>


    <section className="py-20 bg-stone-100 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
       
      <div>
          <div className=" bg-[#eb305c] transform -translate-x-10 relative h-64"></div>
          <div className="transform md:rounded-md bg-white rotate-3 scale-110 translate-x-10 md:shadow-2xl mr-12 -mt-44 space-y-2">
          <img src="assets/images/automation-2.png" />
          </div>
        </div>
       
        <div className="px-4 md:mr-6">
          <h3 className="text-4xl pr-6 sm:leading-snug tracking-tight font-bold text-black">
          INTEGRATED MARKETING AUTOMATION SERVICES
          </h3>
        
          <p className="text-justify text-base font-medium py-4 text-gray-600">A common barrier between streamlined business to consumer communication is information delivered at the wrong time, in the wrong format. Marketing managers, CEOs and business owners that still release their messages to their audience manually are drowning in information overload and struggling to find the time to deliver succinct, effective material.</p>
          <p className="text-justify text-base font-medium text-gray-600">Developing meaningful and relevant content that stands out from the noise requires the latest marketing tools and machine-learning software. With an integrated marketing automation strategy, businesses can create personalised content that’s built on audience insights and the latest digital approaches. Start by partnering with Impress!ve™ and achieve your organisation’s goals through data-rich, automated marketing that is based on your unique audience and frees up your own valuable time to focus on your growth.</p>
       
          <div className='pt-6'>
              <Link href='#'>
                <a
                  className="  font-semibold  text-white md:text-lg  text-base px-8 py-2 bg-[#eb305c] hover:bg-[#007bff] uppercase rounded-lg transition duration-500"
                  style={{ boxShadow: "2px 3px 4px rgba(0, 0, 0, 0.5)" }}
                >
                  Get a free Quote
                </a>
              </Link>
            </div>
        </div>
       
      </div>
    </section>
</div>


    </div>
  )
}

export default Connect