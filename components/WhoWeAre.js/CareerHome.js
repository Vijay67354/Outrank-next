import React from 'react'

function CareerHome() {
  return (
    <div className='bg-white mx-auto pt-28'>
        <div style={{
            backgroundImage: `url("/assets/images/linesimg.png")`
        }} className="h-[100%] w-[100%] bg-no-repeat">

            <div>
                <h1 className='text-center text-4xl pt-12 font-bold pb-3 z-40 px-5 lg:px-0'>SEO helps you be the first choice of many</h1>
                <p className='lg:text-center text-justify tracking-tighter leading-relaxed text-xl py-1 font-semibold px-5 lg:px-0 lg:w-[50%] mx-auto'>To either grow in your life or on search engine, you need to keep raising the working bars</p>
            </div>
            <div className='grid md:grid-cols-5 grid-cols-1 gap-12 items-center justify-center px-10 lg:px-32 py-8'>
                <div className=' '>
                    <div className='rounded-md bg-[#FEB658] '>
                        <img className='rounded w-[100%]' src='assets/images/image.jpg' alt='member' />
                    </div>
                </div>
                <div className='flex flex-col gap-7 '>
                    <div className='  rounded-md bg-[#ECD5AD] '>
                        <img className='rounded w-[100%]' src='assets/images/images23.jpg' alt='member' />
                    </div>
                    <div className='lg:h-auto rounded-md bg-[#30B6AD]  '>
                        <img className='rounded w-[100%]' src='assets/images/images-8.jpg' alt='member' />
                    </div>
                </div>
                <div>
                    <div className='rounded-md bg-[#F8DB67]  '>
                        <img className='rounded w-[100%]' src='assets/images/images.jpg' alt='member' />
                    </div>
                </div>
                <div className='flex flex-col gap-7'>
                    <div className='  rounded-md bg-[#FE8A44]  '>
                        <img className='rounded w-[100%]' src='assets/images/images-27.jpg' alt='member' />
                    </div>
                    <div className=' rounded-md bg-[#13A6EF]  '>
                        <img className='rounded w-[100%]' src='assets/images/image-29.jpg' alt='member' />
                    </div>
                </div>
                <div>
                    <div className='  rounded-md bg-[#80B895]'>
                        <img className='rounded w-[100%]' src='assets/images/images23.jpg' alt='member' />
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default CareerHome