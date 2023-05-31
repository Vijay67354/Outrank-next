import React from "react";
import Slider from "react-slick";

const SliderNewCro = () => {

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
          Tips and Tricks to boost your online conversions
        </h2>
        <p className="text-gray-400 max-w-5xl text-center">
          Do you want high sales? Do you want your traffic to become your customers? Do you want to outrank the market? Increase your business with our services for CRO marketing.
        </p>
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
                CRO Audit
                </h1>
                <p className="text-base tracking-tight font-medium text-gray-600 leading-6">
                Our experts put a magnifying glass over the website to find the weak points that pull the audience back from conversion. With thorough research and data-based assessment, we built a strategic approach to optimise the target visitors actions on the website and the landing page.
                </p>
                <button className="py-4 underline underline-offset-2 font-bold text-base">
                  Learn More
                </button>
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
                Data Marketing 
                </h1>
                <p className="text-base tracking-tight font-medium text-gray-600 leading-6">
                Understanding consumer behaviour is crucial before setting up your target audience. Data marketing allows marketers to research and study the changing consumer market trends. Outrank is outranking as a digital marketing agency in Melbourne by setting up distinct and defined CRO methods.
                </p>
                <button className="py-4 underline underline-offset-2 font-bold text-base">
                  Learn More
                </button>
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
                UX Services
                </h1>
                <p className="text-base tracking-tight font-medium text-gray-600 leading-6">
                The end aim of any business is to increase its sales and presence in the market via its consumer/client database. An unfriendly-user experience has become the most common issue for the user to bounce back without performing any action. Our UX masters can determine the area to sweeten and make the user experience delightful.
                </p>
                <button className="py-4 underline underline-offset-2 font-bold text-base">
                  Learn More
                </button>
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
                 
CRO Testing And Development

                </h1>
                <p className="text-base tracking-tight font-medium text-gray-600 leading-6">
                We at Outrank perform two types of testing to improve the user experience and increase the conversion rate. A/B testing is a simple page1-page 2 testing to optimize the user actions. Multivariate testing is a detailed one that undergoes all the pages of the website and identifies the core of the problem.
                </p>
                <button className="py-4 underline underline-offset-2 font-bold text-base">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SliderNewCro;