import React, { Component } from "react";
import Slider from "react-slick";

const Slidercro=()=>  {

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,

      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"}
  
    return (
      <div className="bg-[#070b19] pt-16 mt-10">
        <div className="flex justify-center items-center flex-col space-y-4">
          <h2 className="lg:text-5xl text-3xl text-white w-[90%] text-center font-bold pt-3">
          SERVICES THAT MAXIMISE YOUR ONLINE CONVERSIONS
          </h2>
          <p className="text-gray-400 max-w-5xl text-center">Maximise your conversions and boost your revenue with a strategy based on real data, not guesswork. Our strategists use innovative technology to transform your website into a high-powered conversion machine.</p>
        </div>
        <div className="p-12 space-x-4">
          <Slider {...settings}>
            <div className="p-4">
              <div className="bg-white rounded-2xl h-[380px]">
                <img
                  className="aspect-video rounded-t-2xl object-scale-down h-20 w-20 mx-auto pt-5"
                  src="assets/images/ux.svg"
                />

                <div className="p-4 lg:space-x-4 space-y-4">
                  
                  <h1 className="text-3xl font-medium text-center underline-offset-8 decoration-pink-50 underline pb-2">
                  UX services
                  </h1>
                  <p className="text-base tracking-tight font-medium text-gray-600 leading-6">
                  We design a seamless user journey that nurtures your audience down the sales funnel by ensuring every point of contact is a positive one.
                  </p>
                  <button className="py-4 underline underline-offset-2 font-bold text-base">Learn More</button>
                </div>
              </div>
            </div>

            <div className="p-4">
              <div className="bg-white rounded-2xl ">
                <img
                  className="aspect-video rounded-t-2xl object-scale-down h-20 w-20 mx-auto pt-5"
                  src="assets/images/cro_testing-1.svg"
                />

                <div className="p-4 lg:space-x-4 space-y-4 ">
                  
                  <h1 className="text-3xl font-medium text-center underline-offset-8 decoration-pink-50 underline pb-2">
                  CRO testing & development
                  </h1>
                  <p className="text-base tracking-tight font-medium text-gray-600 leading-6">
                  Ongoing A/B testing and optimisation ensures your conversion rate stays as high as possible, even as your organisation grows and your goals shift.
                  </p>
                  <button className="py-4 underline underline-offset-2 font-bold text-base">Learn More</button>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-white rounded-2xl h-[380px]">
                <img
                  className="aspect-video rounded-t-2xl object-scale-down h-20 w-20 mx-auto pt-5"
                  src="assets/images/cro_audit-1.svg"
                />

                <div className="p-4 lg:space-x-4 space-y-4">
                  
                  <h1 className="text-3xl font-medium text-center underline-offset-8 decoration-pink-50 underline pb-2">
                  CRO audit
                  </h1>
                  <p className="text-base tracking-tight font-medium text-gray-600 leading-6">
                  The first step in your customer improvement journey, a CRO audit identifies inefficiencies in your process and uses actionable insights to create an optimisation roadmap.
                  </p>
                  <button className="py-4 underline underline-offset-2 font-bold text-base">Learn More</button>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-white rounded-2xl h-[380px]">
                <img
                  className="aspect-video rounded-t-2xl object-scale-down h-20 w-20 mx-auto pt-5"
                  src="assets/images/data_marketing.svg" 
                />

                <div className="p-4 lg:space-x-4 space-y-4">
                  
                  <h1 className="text-3xl font-medium text-center underline-offset-8 decoration-pink-50 underline pb-2">
                  Data marketing
                  </h1>
                  <p className="text-base tracking-tight font-medium text-gray-600 leading-6">
                  Every marketing decision should be made using data. We gather competitor, customer and landscape data to strategically develop your campaigns.
                  </p>
                  <button className="py-4 underline underline-offset-2 font-bold text-base">Learn More</button>
                </div>
              </div>
            </div>
            
          </Slider>
        </div>
      </div>
    );
  }

export default Slidercro
