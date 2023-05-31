import React, { Component } from "react";
import Slider from "react-slick";

const Sliderautomation = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'ease-out',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="bg-[#070b19] pt-16">
      <div className="flex justify-center items-center flex-col space-y-4">
        <h2 className="lg:text-5xl text-3xl text-white w-[90%] text-center font-bold pt-3 capitalize">
          Revolutionalize your digital marketing process with marketing automation
        </h2>
        <p className="text-gray-400 max-w-5xl text-center">Deliver an endless journey to your audience through innovative and advanced marketing automation. Outrank with the virtuosos now!</p>
      </div>
      <div className="p-12 space-x-4">
        <Slider {...settings}>
          <div className="p-4">
            <div className="bg-white rounded-2xl h-[320px]">
              <img
                className="aspect-video rounded-t-2xl object-scale-down h-20 w-20 mx-auto pt-5"
                src="assets/images/crmimg4.png"
              />

              <div className="p-4 lg:space-x-4 space-y-4">

                <h1 className="text-3xl font-medium text-center underline-offset-8 decoration-pink-50 underline pb-2">
                  Simplify it!

                </h1>
                <p className="text-base tracking-tight font-medium text-gray-600 leading-6">
                  Marketing automation makes the process smooth and easy for businesses and their target audiences.<p /></p>              
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-white rounded-2xl h-[320px]">
              <img
                className="aspect-video rounded-t-2xl object-scale-down h-20 w-20 mx-auto pt-5"
                src="assets/images/crmimg5.png"
              />

              <div className="p-4 lg:space-x-4 space-y-4">

                <h1 className="text-3xl font-medium text-center underline-offset-8 decoration-pink-50 underline pb-2">
                  Advance it!
                </h1>
                <p className="text-base tracking-tight font-medium text-gray-600 leading-6">
                  With the advanced audience, upgrade your marketing strategies with automation to make it fruitful.
                </p>
            
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="bg-white rounded-2xl h-[320px]">
              <img
                className="aspect-video rounded-t-2xl object-scale-down h-20 w-20 mx-auto pt-5"
                src="assets/images/crmimg6.png"
              />

              <div className="p-4 lg:space-x-4 space-y-4">

                <h1 className="text-3xl font-medium text-center underline-offset-8 decoration-pink-50 underline pb-2">
                  Sell it!

                </h1>
                <p className="text-base tracking-tight font-medium text-gray-600 leading-6">
                  Personalization approach and target marketing lead for better business generation and customer retention.                </p>
            

              </div>
            </div>
          </div>

        </Slider>
      </div>
    </div>
  );
}


export default Sliderautomation