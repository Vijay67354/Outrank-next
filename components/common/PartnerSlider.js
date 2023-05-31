import React, { Component } from "react";
import Slider from "react-slick";

export default class PartnerSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div className="bg-[#070b19] py-16 mt-10">
          <div className='flex justify-center items-center flex-col '>
    
        <div className='lg:text-5xl text-3xl text-white w-[90%] text-center font-bold pt-3'>PARTNERS</div>
      </div>
      <div className="p-12 space-x-4">
        
        <Slider {...settings}>
        <div className="">
            <img className="w-52 mx-auto" src="/assets/images/logoo1.png"  />
          </div>
          <div className="">
            <img className="w-52 md:pt-4 mx-auto" src="/assets/images/logoo2.jpg" />
          </div>
          <div className="">
            <img className="w-52 md:-pt-8 mx-auto" src="/assets/images/logoo3.png" />
          </div>
          <div className="">
            <img className="w-52 md:pt-16 mx-auto" src="/assets/images/logoo4.png" />
          </div>
          <div className="">
            <img className="w-52 md:pt-16 mx-auto" src="/assets/images/logoo5.png" />
          </div>
          <div className="">
            <img className="w-52 md:pt-16 mx-auto" src="/assets/images/logoo7.png" />
          </div>
          <div className="">
            <img className="w-52 mx-auto" src="/assets/images/logoo8.png" />
          </div>


        </Slider>
      </div>
      </div>
    );
  }
}