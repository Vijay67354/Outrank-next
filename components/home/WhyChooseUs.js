import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="container-outrank px-5 md:px-0">
      <div className="bg-white lg:pb-16 lg:pt-0 py-8 md:py-16">
        <div className="flex justify-center items-center flex-col ">
          <p className="italic lg:text-3xl text-[#eb305c] text-md md:pt-10  text-center">
            Our Clients
          </p>
          <div className="lg:text-5xl text-2xl md:text-3xl text-[#070b19] w-[90%] md:w-[100%] text-center font-bold pt-3">
            GROW SMOOTHLY LIKE BUTTER <br/> WITH DIGITAL MARKETING!
          </div>
          <p className="italic lg:text-xl text-md lg:pt-6 pt-2 text-center">
            We have been a part of the success stories of businesses becoming
            brands following the right strategy.
          </p>
        </div>
        <div>
          <div className="justify-center  lg:flex item-center pt-10 pb-4 ">
            <div
              className="lg:flex justify-between items-center py-3 rounded-xl "
              style={{ boxShadow: "4px 4px 33px rgba(0, 0, 0, 0.25)" }}
            >
              <div className="px-20 py-8 flex lg:flex-col justify-center items-center gap-4">
                <img src="/assets/images/logo1.png"></img>
              </div>

              <div className="bg-[#eb305c]  h-full w-1"></div>

              <div className="px-20 py-8  flex lg:flex-col justify-center items-center gap-4">
                <img src="/assets/images/logo2.png"></img>
              </div>

              <div className="bg-[#eb305c]  h-full w-1"></div>

              <div className="px-20 py-8 flex lg:flex-col justify-center items-center gap-4">
                <img src="/assets/images/logo4.png"></img>
              </div>

              <div className="bg-[#eb305c]  h-full w-1"></div>

              <div className="px-20 py-8 flex lg:flex-col justify-center items-center gap-4">
                <img src="/assets/images/logo3.png"></img>
              </div>
            </div>
          </div>
          <div className="justify-center lg:flex item-center py-4 ">
            <div
              className="lg:flex justify-between items-center py-3 rounded-xl "
              style={{ boxShadow: "4px 4px 33px rgba(0, 0, 0, 0.25)" }}
            >
              <div className="px-20 py-8 flex lg:flex-col justify-center items-center gap-4">
                <img src="/assets/images/logo5.jpg"></img>
              </div>

              <div className="bg-[#eb305c]  h-full w-1"></div>

              <div className="px-20 py-8  flex lg:flex-col justify-center items-center gap-4">
                <img src="/assets/images/logo6.jpg"></img>
              </div>

              <div className="bg-[#eb305c]  h-full w-1"></div>

              <div className="px-20 py-8 flex lg:flex-col justify-center items-center gap-4">
                <img src="/assets/images/logo10.png"></img>
              </div>

              <div className="bg-[#eb305c]  h-full w-1"></div>

              <div className="px-20 py-8 flex lg:flex-col justify-center items-center gap-4">
                <img src="/assets/images/logo8.png"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;