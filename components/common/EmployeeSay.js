import React, { Component } from "react";
import Slider from "react-slick";
import SubTitle from "./SubTitle";
import TitlePer from "./TitlePer";

export default class EmployeeSay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <div className="text-center space-y-2">
        <div>
                  <p className="text-lg font-semibold">Testimonials</p>
                  <p className="flex text-center justify-center">
                  <span className=" w-16 h-1 rounded bg-[#eb305c]"></span>
                    <span className=" w-4 h-1 rounded ml-1 bg-[#eb305c]"></span>
                    <span className=" w-1 h-1 rounded ml-1 bg-[#eb305c]"></span>
                  </p>
                </div>
        <TitlePer title="What People say for us so far"/>
        </div>
        <Slider {...settings}>
          <div>
            <div className="grid lg:grid-cols-2 grid-cols-1">
              <div className="flex flex-col justify-center space-y-4 p-4">
                
                <p className="text-justify tracking-wider">
                I approached Outrank for my business last month, and I was confused about the digital marketing methods. My question to them was how it would benefit me? And they answered with their work within a month. The results are awe-inspiring.                </p>
                
                <div className="text-center shadow-sm  py-2 space-x-2">
                <h2 className="text-2xl  font-semibold">
                  - Aditi Garg &nbsp;
                  <span className="text-sm font-medium">
                  ( Content Manager )
                </span>
                </h2>
                
                </div>
              </div>
              <div className="w-100 flex items-center">
                <img
                  className="max-w-md mx-auto w-72"
                  src="https://impressive.com.au/wp-content/uploads/2022/03/Maree-1.jpg"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="grid lg:grid-cols-2 py-12">
              <div className="flex flex-col justify-center space-y-4 p-4">
                
                <p className="text-justify tracking-wider">
                Digital marketing is like the new social media trend, and everyone is running a digital marketing agency. Outrank outranked the rest and helped me tell my brand&apos;s story to all simply through campaigns. I recommend Outrank to everyone.
                </p>
                
                <div className="text-center shadow-sm  py-2 space-x-2">
                <h2 className="text-2xl  font-semibold">
                  - Sagar Roy &nbsp;
                  <span className="text-sm font-medium">
                  ( Content Manager )
                </span>
                </h2>
                
                </div>
              </div>
              <div className="w-100 flex items-center">
                <img
                  className="max-w-md w-80 mx-auto"
                  src="https://impressive.com.au/wp-content/uploads/2020/11/Sam-Makwana.png"
                />
              </div>
            </div>
          </div>
          {/* <div>
            <div className="grid lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4 p-4">
                
                <p className="text-justify tracking-wider">
                It’s our diverse culture
                  and unique voice that sets us apart, with our family coming
                  together as one unified force every day in our Melbourne
                  office.
                  You’re only as strong as the people you roll with, and we’re
                  looking for performance-driven individuals to join Australia’s
                  fastest-growing digital marketing agency as we expand our
                  horizons and take on the U.S, too. It’s our diverse culture
                  and unique voice that sets us apart, with our family coming
                  together as one unified force every day in our Melbourne
                  office.
                </p>
                
                <div className="text-center shadow-sm  py-2 space-x-2">
                <h2 className="text-2xl  font-semibold">
                  - Anjli Sharma 
                  <span className="text-sm font-medium">
                  ( Content Manager )
                </span>
                </h2>
                
                </div>
              </div>
              <div className="w-100 flex items-center">
                <img
                  className="max-w-md mx-auto"
                  src="https://impressive.com.au/wp-content/uploads/2022/03/Maree-1.jpg"
                />
              </div>
            </div>
          </div> */}
        </Slider>
      </div>
    );
  }
}