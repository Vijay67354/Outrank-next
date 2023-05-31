import React from 'react'

function PageTitle({title,sub}) {
  return (
    <div className=' pt-16 bg-gray-100 text-center outrank-anjli space-y-2'>
        <h2 className='text-4xl font-bold text-black'>{title}</h2>
        
        
        
        <p className='italic text-[#eb305c] drop-shadow-lg shadow-pink-500 font-semibold text-xl'>{sub}</p>
        <p className="flex justify-center py-2">
                    <span className=" w-80 h-[2px] rounded-full bg-[#eb305c]"></span>
                    {/* <span class=" w-16 h-1 ml-1 rounded-full bg-[#eb305c]"></span>
                    <span class=" w-4 h-1 ml-1 rounded-full bg-[#eb305c]"></span> */}
                  </p>
    </div>
  )
}

export default PageTitle