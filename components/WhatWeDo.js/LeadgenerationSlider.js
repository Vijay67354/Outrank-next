import React, { Component } from "react";
import Slider from "react-slick";
import ContentData from "./slider/ContentData";

const LeadgenerationSlider = () => {
 
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
          <h2 className="lg:text-5xl text-3xl text-white w-[90%] text-center font-bold pt-3">
            SEO SERVICES TO BOOST TRAFFIC & CONVERSION
          </h2>
          <p className="text-gray-400 max-w-5xl text-center">
            Our in-house technicians design custom SEO services inline with your
            goals and your organisation’s growth. So, whether you want to unlock
            new pools of worldwide customers or enhance your local online
            presence, we focus on services relevant to you.
          </p>
        </div>
        <div className="p-12 space-x-4">
          <Slider {...settings}>
            {ContentData.map((obj, e) => {
              return (
                <div key={e} className="p-4">
                  <div className="bg-white rounded-2xl md:h-[380px]">
                    <img
                      className="aspect-video rounded-t-2xl object-scale-down h-20 w-20 mx-auto pt-5"
                      src={obj.image}
                    />

                    <div className="p-4 lg:space-x-4 space-y-4">
                      <h1 className="text-3xl font-medium text-center underline-offset-8 decoration-pink-50 underline pb-2">
                        {obj.title}
                      </h1>
                      <p className="text-base tracking-tight font-medium text-gray-600 leading-6">
                        {obj.pera}
                      </p>
                      
              <button className="relative group overflow-hidden px-6 h-12 rounded flex space-x-2 items-center">
                <span className="relative text-base text-black font-semibold">
                  Learn More
                </span>
                <div className="flex items-center -space-x-3 translate-x-3">
                  <div className="w-2.5 h-[1.6px] rounded bg-black origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 stroke-black -translate-x-2 transition duration-300 group-hover:translate-x-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
            
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


export default LeadgenerationSlider;
