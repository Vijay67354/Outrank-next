import React from 'react'

const BannerCommon = ({title,pera,bgimg}) => {
  return (
    <div className="">
    <div
      className=" bg-fixed bg-cover"
      style={{
        backgroundImage: `url("${bgimg}")`,
      }}
    >
      <div className=" w-full h-[400px]  bg-cover bg-gradient-to-tr from-[#000] to-[#76747480] inset-0">
        <div className="py-8 px-4 container-outrank w-full h-[400px] flex flex-col justify-end">
        <h2 className="text-3xl sm:text-4xl font-semibold leading-9 text-white drop-shadow-lg shadow-black">
          {title}
        </h2>
        <p className="italic md:text-xl text-lg max-w-5xl text-white drop-shadow-lg shadow-black leading-10 md:leading-[30px]">
          {" "}
          {pera}
        </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BannerCommon