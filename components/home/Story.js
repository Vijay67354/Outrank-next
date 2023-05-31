import React from "react";
import Link from "next/link";

const Story = () => {
  return (
    <div className="lg:px-20 px-5  bg-white py-16 relative">
      {/* <img
                src="assets/images/bubbleleft.png"
                className="absolute left-0 bottom-40 z-30 floating"
            /> */}
      <div
        className="grid grid-cols-1 md:grid-cols-2  rounded-[30px] md:h-[400px] z-40 "
        style={{ boxShadow: "5px 5px 40px rgba(0, 0, 0, 0.35)" }}
      >
        <div className="relative lg:left-20 -left-2 md:h-96 h-72 md:top-24">
          <img
            src="/assets/images/about-image.png"
            width="55%"
            alt=""
            className="absolute lg:-top-24 top-6 lg:right-auto right-16 2xl:left-16 z-30"
          />
          <img
            src="/assets/images/aboutleftimagee.png"
            width="55%"
            alt=""
            className="absolute lg:top-[-3.6rem] top-12 z-10 lg:-left-20 left-4"
          />
          <img
            src="/assets/images/aboutrightimagee.png"
            width="55%"
            alt=""
            className="absolute lg:-top-16 top-8 z-20 lg:right-[10rem] right-0"
          />
        </div>
        {/* <div className=' flex flex-col  justify-center items-start px-8 relative -left-24 z-30'> */}
        <div className="lg:-ml-24 z-20 px-5">
          <div className="flex justify-center items-center flex-col ">
            <p className="italic lg:text-3xl text-[#eb305c] text-md pt-10  text-center">
            Our People
            </p>
            <div className="lg:text-4xl text-xl text-[#070b19] w-[90%] text-center font-bold pt-3">
            What makes us Outrank the rest?
            </div>
          </div>
          <div className="w-full  h-[2px] bg-secondary mb-4 mt-2"></div>
          <div className=" text-lg font-normal leading-loose md:px-9 md:pl-20">
          The one thing that makes us the top digital marketing agency in Melbourne is our devotion to the growth of a business through the successful medium and strategy.
          </div>
          {/* <div className="text-xl font-semibold cursor-pointer py-6 px-9">
                        Know More about us &rarr;
                    </div> */}
          <Link href="/contact">
            <button className="relative group overflow-hidden px-6 h-12 rounded flex space-x-2 items-center">
              <span className="relative text-base text-black font-semibold pl-16">
                Know More
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Story;