import React from 'react'

function SubTitle({title}) {
  return (
    <div>
                  <p className="text-lg font-semibold">{title}</p>
                  <p className="flex">
                    <span className=" w-16 h-1 rounded bg-[#eb305c]"></span>
                    <span className=" w-4 h-1 rounded ml-1 bg-[#eb305c]"></span>
                    <span className=" w-1 h-1 rounded ml-1 bg-[#eb305c]"></span>
                  </p>
    </div>
  )
}

export default SubTitle