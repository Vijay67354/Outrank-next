import React from 'react';
import Link from 'next/link';
import { GoTriangleDown } from 'react-icons/go';

function OurTeam() {
  return (
    <div className=' pt-[55px]'>

<div className='lg:px-12 px-5 bg-[#eb305c] pb-8  lg:pb-12'>
    <div className='bg-white mx-auto pt-10 pb-10 lg:pb-16'>
        <div style={{
            backgroundImage: `url("/assets/images/linesimg.png")`
        }} className="h-[100%] w-[100%] bg-no-repeat">

            <div>
                <h1 className='text-center text-4xl pt-12 font-bold pb-3 z-40 px-5 lg:px-0'>WE HELP BUSINESSES GROW IN STYLE</h1>
                <p className='lg:text-center text-justify tracking-tighter  text-xl py-1 font-semibold px-5 lg:px-0 lg:w-[50%] mx-auto'>Experienced? Yes, with an ambitious team. Skilled? Of Course, with digital marketing experts. Ready to start cooking fresh ideas? More than ready, we are super ready.
</p>
            </div>
            <div className='grid  md:grid-cols-5 grid-cols-1 gap-12 items-center justify-center px-10 lg:px-32 py-10'>
                <div className=' '>
                    <div className='rounded-md bg-[#FEB658] '>
                        <img className='rounded' src='https://img.freepik.com/free-photo/closeup-photo-young-lady-sitting-desk-working_144627-77544.jpg?t=st=1657716218~exp=1657716818~hmac=4c139ca00f2113cacde8da5df02d28e2450e4f84ae4ebb38af7c816c2f5b84fe&w=360' alt='member' />
                    </div>
                </div>
                <div className='flex flex-col gap-7 '>
                    <div className='  rounded-md bg-[#ECD5AD]  '>
                        <img className='rounded' src='https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15861.jpg?size=626&ext=jpg&uid=R14357029&ga=GA1.2.139273041.1654232675' alt='member' />
                    </div>
                    <div className='lg:h-[13.5rem] rounded-md bg-[#30B6AD]  '>
                        <img className='rounded' src='https://img.freepik.com/free-photo/enjoying-music-when-working_1098-18085.jpg?t=st=1657712881~exp=1657713481~hmac=7c361f03f6aa1557c9c463afd44f7440539dea9c5cb73d5b7baccd86e2e54f7e&w=360' alt='member' />
                    </div>
                </div>
                <div>
                    <div className='rounded-md bg-[#F8DB67]'>
                        <img className='rounded' src='https://img.freepik.com/premium-photo/portrait-beautiful-business-woman-talk-by-phone_530697-23326.jpg?w=360' alt='member' />
                    </div>
                </div>
                <div className='flex flex-col gap-7'>
                    <div className='  rounded-md bg-[#FE8A44]  '>
                        <img className='rounded' src='https://img.freepik.com/premium-photo/seo-search-engine-optimization-text-wooden-cube-blocks-hand-holding-magnifying-glass-table-idea-strategy-advertising-marketing-keyword-content-concept_42256-6244.jpg?w=740' alt='member' />
                    </div>
                    <div className=' rounded-md bg-[#13A6EF]  '>
                        <img className='rounded' src='https://img.freepik.com/free-photo/vertical-image-two-women-are-discussing-something_171337-14577.jpg?t=st=1657717641~exp=1657718241~hmac=632997d2ea6d04e8397a7c64019947fe021c033bd59517fa41e3c92857d5740f&w=360' alt='member' />
                    </div>
                </div>
                <div>
                    <div className='  rounded-md bg-[#80B895]'>
                        <img className='rounded' src='https://img.freepik.com/free-photo/smiling-beautiful-businesswoman-looking-camera_1163-5394.jpg?t=st=1657718518~exp=1657719118~hmac=1e35be470f6634efe775555efa5f2388e49e6eb260fe65e2ab8412405e02a156&w=360' alt='member' />
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-10'>
                <div className='lg:px-20 px-10 gap-10 flex flex-col justify-start lg:mt-[-20%]'>
                    <img src='/assets/images/down.png' alt='circle' className=' lg:w-[35%]  w-[14%]'></img>
                    <p className='font-semibold text-base tracking-tighter'>&quot;Target audience sets the boundaries of your territory..&quot;</p>
                </div>
                <div  className='lg:px-[6.5rem] px-10'>
                  <Link href="#ourteam" type='button'><div className=' bg-black flex flex-row items-center gap-3 text-lg justify-center py-3 rounded-md hover:scale-105 duration-500 text-[#eb305c] transition-all  mx-auto  font-medium '  style={{ boxShadow: '2px 4px 12px rgba(0, 0, 0, 0.25' }}>Scroll Down <GoTriangleDown /></div>
                  </Link> 
                </div>
                <div className='lg:px-20 px-10 gap-10 flex flex-col justify-end items-end lg:mt-[-20%]'>
                    <img src='/assets/images/up.png' alt='circle' className='lg:w-[35%]  w-[14%] '></img>
                    <p className='font-semibold text-base text-justify tracking-tighter'>&quot;Add spice to your marketing, and you taste the real flavours.&quot;</p>
                </div>
            </div>
        </div>
    </div>
</div>

</div>
  )
}

export default OurTeam