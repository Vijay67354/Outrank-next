import React from "react";
import { BsFullscreen } from "react-icons/bs";
import Slider from "react-slick";

const SnapGallery = () => {





  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
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
          initialSlide: 2,
          arrows:false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false
        },
        
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false
        },
      }
    ]
  }; 


  




  return (
   
        <Slider className="w-screen md:w-auto object-cover p-5" {...settings}>
          
        
          <div className="px-4">
            <img
              className="w-auto object-cover"
              src="assets/images/gallery/img8.jpeg"
            />
          </div>
          <div className="px-4">
            <img
              className="w-auto object-cover"
              src="assets/images/gallery/img9.jpeg"
            />
          </div>
          <div className="px-4">
            <img
              className="w-auto object-cover"
              src="assets/images/gallery/img10.jpeg"
            />
          </div>
          <div className="px-4">
            <img
              className="w-auto object-cover"
              src="assets/images/gallery/img11.jpeg"
            />
          </div>
          <div className="px-4">
            <img
              className="w-auto object-cover"
              src="assets/images/gallery/img12.jpeg"
            />
          </div>
          <div className="px-4">
            <img
                className="w-auto object-cover"
              src="assets/images/gallery/img13.jpeg"
            />
          </div> 
        </Slider>
   
  );
};

export default SnapGallery; 



 