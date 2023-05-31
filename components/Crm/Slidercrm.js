import React, { Component } from "react";
import Slider from "react-slick";

const Slidercrm = () => {
 
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
      <div className="bg-[#070b19] pt-16 mt-10">
        <div className="flex justify-center items-center flex-col space-y-4">
          <h2 className="lg:text-5xl text-3xl text-white w-[90%] text-center font-bold pt-3">
          More Benefits of CRM
          </h2>
          <p className="text-gray-400 max-w-5xl text-center">
          CRM plays a critical role in the core of digital marketing as it helps develop the foundation of the customer-company relationship.
          </p>
        </div>
        <div className="p-12 space-x-4">
          <Slider {...settings}>
            <div className="p-4">
              <div className="bg-white rounded-2xl h-[380px]">
                <img
                  className="aspect-video rounded-t-2xl object-scale-down h-20 w-20 mx-auto pt-5"
                  src="assets/images/crmimg2.svg"
                />

                <div className="p-4 lg:space-x-4 space-y-4">
                  <h1 className="text-3xl font-medium text-center underline-offset-8 decoration-pink-50 underline pb-2">
                  Free Promotion
                  </h1>
                  <p className="text-base tracking-tight font-medium text-gray-600 leading-6">
                  Consumers with good relationships with the businesses promote the business as mouth-to-mouth publicity. It builds more trust among the one who hears about your company from their knowns or an individual in the front.
                  </p>
                
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-white rounded-2xl h-[380px]">
                <img
                  className="aspect-video rounded-t-2xl object-scale-down h-20 w-20 mx-auto pt-5"
                  src="assets/images/crmimg3.svg"
                />

                <div className="p-4 lg:space-x-4 space-y-4">
                  <h1 className="text-3xl font-medium text-center underline-offset-8 decoration-pink-50 underline pb-2">
                  Long-term Sales
                  </h1>
                  <p className="text-base tracking-tight font-medium text-gray-600 leading-6">
                  Customers will come again and again to purchase your service or products if they find their previous experience smooth. It will build a robust database of retained customers and all possible due to customer-business solid relationships.
                  </p>
                
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-white rounded-2xl h-[380px]">
                <img
                  className="aspect-video rounded-t-2xl object-scale-down h-20 w-20 mx-auto pt-5"
                  src="assets/images/crmimg4.png"
                />

                <div className="p-4 lg:space-x-4 space-y-4">
                  <h1 className="text-3xl font-medium text-center underline-offset-8 decoration-pink-50 underline pb-2">
                  More References

                  </h1>
                  <p className="text-base tracking-tight font-medium text-gray-600 leading-6">
                  A client with satisfactory delivery and relationship might be unwilling to come back alone, as they will bring more onto the plate along with them. It will exceed references of your service and products for a real-time audience.
                  </p>
                
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-white rounded-2xl h-[380px]">
                <img
                  className="aspect-video rounded-t-2xl object-scale-down h-20 w-20 mx-auto pt-5"
                  src="assets/images/crmimg5.png"
                />

                <div className="p-4 lg:space-x-4 space-y-4">
                  <h1 className="text-3xl font-medium text-center underline-offset-8 decoration-pink-50 underline pb-2">
                  5 Star Reviews
                  </h1>
                  <p className="text-base tracking-tight font-medium text-gray-600 leading-6">
                  Reviews over the website, search engines, and other digital platforms serve as the trust-builders for potential customers/clients. The search bots also like to crawl your digital platform based on the reviews.
                  </p>
                
                </div>
              </div>
            </div>

          
          </Slider>
        </div>
      </div>
    );
  }


export default Slidercrm;