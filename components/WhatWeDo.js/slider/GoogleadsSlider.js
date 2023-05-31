import React, { Component } from "react";
import Slider from "react-slick";
import GoogleleadsData from "./GoogleleadsData";

const GoogleadsSlider = () => {
 
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
      <div className="bg-[#070b19] py-16 mt-10">
        <div className="flex justify-center items-center flex-col space-y-4">
          <h2 className="lg:text-5xl text-3xl text-white w-[90%] text-center font-bold pt-3 capitalize">
          Run Google Ads like a pro and lead the traffic on your website
          </h2>
          <p className="text-gray-400 max-w-5xl text-center">
          Google Ads make your digital presence closer to the right audience to convert. It makes the conversion journey smooth and feasible for all.
          </p>
        </div>
        <div className="p-12 space-x-4">
          <Slider {...settings}>
            {GoogleleadsData.map((obj, e) => {
              return (
                <div key={e} className="p-4">
                  <div className="bg-white rounded-2xl h-[320px]">
                    <img
                      className="aspect-video rounded-t-2xl object-scale-down h-20 w-20 mx-auto pt-5"
                      src={obj.image}
                      alt=""
                    />

                    <div className="p-4 lg:space-x-4 space-y-4">
                      <h1 className="text-3xl font-medium md:text-center underline-offset-8 decoration-pink-50 underline pb-2">
                        {obj.title}
                      </h1>
                      <p className="text-base tracking-tight font-medium text-gray-600 leading-6">
                        {obj.pera}
                      </p>
                      
     
            
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }


export default GoogleadsSlider;