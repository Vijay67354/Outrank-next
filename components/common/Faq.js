import React from 'react'
// import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import {AiFillPlusCircle,AiFillMinusCircle} from 'react-icons/ai'

function Faq({title,pera,pera1,pera2,pera3,pera4,pera5,pera6,pera7,pera8,pera9,pera10,pera11}) {
  return (
    <button className="w-full text-left group focus:outline-none space-y-2 p-1 ">
          <div className="flex justify-between rounded-sm text-black font-semibold shadow-md border-1 border-white px-4 py-2 hover:bg-red-100 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75">
            {title}
            <div className="">
              <AiFillPlusCircle className="h-5 w-5 group-focus:hidden text-[#eb305c]" />
              
              <AiFillMinusCircle className="h-5 w-5 group-focus:flex hidden text-[#eb305c]" />
            </div>
          </div>

          <div className="hidden p-4  group-focus:block bg-gray-100 border-2 border-white">
            <p className='text-sm'>{pera}</p>
            <p className='text-sm pt-3'>{pera1}</p>
            <p className='text-sm pt-2'>{pera2}</p>
            <p className='text-sm pt-2'>{pera3}</p>
            <p className='text-sm pt-2'>{pera4}</p>
            <p className='text-sm pt-2'>{pera5}</p>
            <p className='text-sm pt-2'>{pera6}</p>
            <p className='text-sm pt-2'>{pera7}</p>
            <p className='text-sm pt-2'>{pera8}</p>
            <p className='text-sm pt-2'>{pera9}</p>
            <p className='text-sm pt-2'>{pera10}</p>
            <p className='text-sm pt-2'>{pera11}</p>
          </div>

        </button>
  )
}

export default Faq