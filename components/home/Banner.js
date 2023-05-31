import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <>
      <div className="">
        <div className=" h-full  bg-no-repeat w-full justify-between items-center">
          <div className=" w-full">
            <img
              src="assets/images/banner-image2.png"
              alt="homeimages"
              className="w-screen md:h-auto h-72"
            />
          </div>
          <div className="container-outrank">
            <div className="absolute top-[18%] md:top-[20%] lg:top-[22%] md:grid md:grid-cols-2 px-6">
              <div>
                <div className=" md:text-5xl text-lg text-white  w-[100%]  md:leading-[50px]">
                  {" "}
                  <span className="font-normal italic">
                    Give Yourself The
                  </span>{" "}
                  <span className="font-bold">
                    <br />
                    BIG BREAK,
                  </span>{" "}
                </div>
                <div className=" md:text-5xl text-lg py-4 text-white  w-[100%]  md:leading-[50px]">
                  {" "}
                  <span className="font-normal italic"> Get Into The</span>{" "}
                  <span className="font-bold">
                    <br />
                    DIGITAL WORLD!
                  </span>{" "}
                </div>

                <div className="md:block hidden md:text-xl text-sm  text-white  w-[80%] lg:leading-[30px] ">
                  {" "}
                  Are you looking forward to spicing up your sales? Are you
                  tired of the old marketing tactics? Do you want to hear the
                  secret strategy that every business is using to grow
                  exponentially? Then come on board with us NOW!
                </div>

                <div className="flex gap-1 md:gap-3 py-4 items-center pr-10 md:w-[50%] w-[100%] "></div>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Enter Your Website..."
                    className="rounded-l-lg
                                    w-[50%]
                                    p-2
                                    text-gray-800
                                    dark:text-gray-50
                                    dark:bg-slate-700
                                    border-gray-300
                                    dark:border-slate-600
                                    outline-none
                                    focus-visible:shadow-none
                                    focus:border-primary
                                    "
                    name="email"
                    id="email"
                  />
                  <Link href="#">
                    <a
                      className=" font-semibold  text-white md:text-lg text-base md:px-12 px-4 py-2 bg-[#eb305c] hover:bg-[#c0183f] uppercase rounded-r-lg ]"
                      style={{ boxShadow: "2px 3px 4px rgba(0, 0, 0, 0.5)" }}
                    >
                      Impress Me
                    </a>
                  </Link>
                </div>
              </div>

              {/* form start */}
              <div className="md:block hidden 2xl:mx-auto 2xl:container">
                <div className="w-full flex items-center justify-center">
                  <div className="bg-gray-800 bg-opacity-50 space-y-4 lg:py-8 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
                    <h1 className="text-xl font-semibold leading-9 text-white text-center">
                      Contact Us
                    </h1>

                    <div className="border-b border-teal-500 space-y-4 sm:space-y-0">
                      <input
                        className="transition ease-in-out delay-5 hover:-translate-y-1 hover:scale-4 duration-300 border  sm:border-transparent text-base w-72 font-medium leading-none text-white p-2 focus:outline-none bg-transparent placeholder-gray-300"
                        placeholder="Enter Name"
                      />
                    </div>
                    <div className="border-b border-teal-500 space-y-4 sm:space-y-0">
                      <input
                        className="transition ease-in-out delay-5 hover:-translate-y-1 hover:scale-4 duration-300 border sm:border-transparent text-base w-72 font-medium leading-none text-white p-2 focus:outline-none bg-transparent placeholder-gray-300"
                        placeholder="Phone no."
                      />
                    </div>
                    <div className="border-b border-teal-500 space-y-4 sm:space-y-0">
                      <select className="transition ease-in-out delay-5 hover:-translate-y-1 hover:scale-4 duration-300 border sm:border-transparent text-base w-72 font-medium leading-none p-2 focus:outline-none text-white bg-transparent placeholder-gray-300">
                        <option className="text-gray-500">
                          Select Services
                        </option>
                        <option className="text-gray-500">CRM</option>
                        <option className="text-gray-500">Seo</option>
                        <option className="text-gray-500">Google Ads</option>
                        <option className="text-gray-500">
                          Free Seo Audit
                        </option>
                        <option className="text-gray-500">
                          Reputation Managment
                        </option>
                        <option className="text-gray-500">
                          Content Writing
                        </option>
                        <option className="text-gray-500">Social Media</option>
                        <option className="text-gray-500">
                          Lead Gereration
                        </option>
                        <option className="text-gray-500">CRO</option>
                        <option className="text-gray-500">UX Services</option>
                        <option className="text-gray-500">Landing Pages</option>
                        <option className="text-gray-500">
                          Marketing Automation
                        </option>
                        <option className="text-gray-500">
                          Email Marketing
                        </option>
                      </select>
                    </div>
                    <div className="border-b border-teal-500 space-y-4 sm:space-y-0">
                      <textarea
                        row="5"
                        className="transition ease-in-out delay-5 hover:-translate-y-1 hover:scale-4 duration-300 border border-white sm:border-transparent text-base w-72 font-medium leading-none text-white p-2 focus:outline-none bg-transparent placeholder-gray-300"
                        placeholder="Message"
                      />
                    </div>
                    <div className="rounded-lg space-y-4 sm:space-y-0">
                      <button className="motion-safe:animate-wiggle focus:outline-none text-white focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto bg-[#eb305c] hover:bg-[#c0183f] py-2 px-6 hover:bg-opacity-75">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* form end */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;