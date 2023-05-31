import React from "react";
import Slider from "react-slick";

const UxSlider = () => {

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
        Our strategy from the first touch to the final sales
        </h2>
        <p className="text-gray-400 max-w-5xl text-center">
        The smooth UX service enhances the user experience and chances of their conversion to 100%. Our Outrank team identifies the audience&apos;s touch points and builds the best UX.     </p>
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
                            Our Team
                        </h1>
                        <p className="text-base tracking-tight font-medium text-gray-600 leading-6">
                            We have a team of designers and developers who work together to create Ux services that satisfy the user experience. There are experienced content writers, expert data scientists, and many more who are critically building a profound online place for the target audience.                </p>
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
                            Our Approach
                        </h1>
                        <p className="text-base tracking-tight font-medium text-gray-600 leading-6">
                            We define our approach as the action-oriented approach through our UX services in digital marketing. Our thorough background research, analysis, and understanding of the specific business and its audience takes the users to the final action without hassle.                </p>
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
                            Our Focus
                        </h1>
                        <p className="text-base tracking-tight font-medium text-gray-600 leading-6">
                            The webpage and digital marketing campaign define your presence and impression in the market. Therefore it is critical to maintaining a smooth and soothing experience for the user, not only for conversion but for remembrance of fantastic delivery.                </p>
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

                            Our Target


                        </h1>
                        <p className="text-base tracking-tight font-medium text-gray-600 leading-6">
                            A good UX converts businesses into brands and audiences into consumers. We simply target the user&apos;s experience through our UX services in digital marketing. The main aim is to build a long-lasting, hassle-free experience that can calmly achieve the digital marketing goal.
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
  )
}

export default UxSlider