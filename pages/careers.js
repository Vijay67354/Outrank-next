import React from "react";
import FeatureLeft from "../components/seo/FeatureLeft";
import Navbar from "../components/common/Navbar";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import OurTeam from "../components/seo/OurTeam";
import CareerHome from "../components/WhoWeAre.js/CareerHome";
import SubTitle from "../components/common/SubTitle";
import TitlePer from "../components/common/TitlePer";
import EmployeeSay from "../components/common/EmployeeSay";
import CareerJob from "../components/WhoWeAre.js/CareerJob";
import SnapGallery from "../components/WhoWeAre.js/SnapGallery";
import CareerContact from "../components/WhoWeAre.js/CareerContact";

function Careers() {
  return (
    <>
      {/* <Navbar/> */}
      <Header />
      <div className="relative">
        <div className="lg:sticky top-0 lg:h-screen flex flex-col items-center justify-center bg-[#eb305c]">
          <div className="max-w-6xl mx-auto">
            <CareerHome />
          </div>
        </div>
        <div className="lg:sticky top-0 lg:h-screen flex flex-col items-center justify-center bg-[#eb305c]">
          <div className="max-w-6xl h-screen px-12 bg-white p-12 mx-auto">
            <div className="grid lg:grid-cols-2 pt-12">
              <div className="flex flex-col justify-center space-y-4 p-4">
                <SubTitle title="About Us" />
                <TitlePer title="Your Growth, Our Strategies" className="" />
                <p className="text-justify tracking-wider">
                  Digital marketing is the leading marketing business, and we are leading in digital marketing with our excellent team and out-of-the-box thinkers. Several rigid strategies can get you defined results, but what if we don’t put creativity into it? Outrank is not just a name as it does what it sounds like. It helps you outrank in the present market competition and takes you to the apex.
                </p>
                <p className="text-justify tracking-wider">
                  Lead generation, Search Engine Optimization, Content Marketing, Cross-channel Marketing, PPC, and every other digital marketing trick is our tip for the growth of all businesses.
                </p>
              </div>
              <div className="w-100 flex items-center">
                <img
                  className="md:max-w-md md:mx-auto"
                  src="assets/images/images-3.jpg"
                  alt=""
                />
                {/* assets/images/cro-images.jpg */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="lg:sticky top-0 lg:h-screen flex flex-col items-center justify-center bg-[#eb305c]">
          <div className="max-w-6xl h-screen px-12 bg-white mx-auto">
            <div className="grid lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4 p-4">
                <SubTitle title="About Us" />

                <TitlePer title="WHAT OUR EMPLOYEES SAY" />

                <p className="text-justify tracking-wider">
                  You’re only as strong as the people you roll with, and we’re
                  looking for performance-driven individuals to join Australia’s
                  fastest-growing digital marketing agency as we expand our
                  horizons and take on the U.S, too. It’s our diverse culture
                  and unique voice that sets us apart, with our family coming
                  together as one unified force every day in our Melbourne
                  office.
                </p>
              </div>
              <div className="w-100 flex items-center">
                <img
                  className="max-w-md mx-auto"
                  src="https://
                  .com.au/wp-content/uploads/2022/03/Maree-1.jpg"
                />
              </div>
            </div>
          </div>
        </div> */}
        <div className="lg:sticky top-0 lg:h-screen flex flex-col items-center justify-center bg-[#eb305c]">
          <div className="w-full py-24 px-12 bg-white mx-auto">

            <EmployeeSay />
          </div>
        </div>
        <div className="lg:sticky top-0 lg:h-screen flex flex-col items-center justify-center bg-[#eb305c]">
          <div className="max-w-6xl h-screen px-12 py-12 bg-white mx-auto">
            <div className="grid lg:grid-row-2">
              <div className="flex flex-col justify-center space-y-4 p-4">
                <div>
                  <div className="text-center space-y-2">
                    <p className="text-lg font-semibold">WE&apos;RE HIRING</p>
                    <p className="flex text-center justify-center">
                      <span className=" w-16 h-1 rounded bg-[#eb305c]"></span>
                      <span className=" w-4 h-1 rounded ml-1 bg-[#eb305c]"></span>
                      <span className=" w-1 h-1 rounded ml-1 bg-[#eb305c]"></span>
                    </p>
                    <TitlePer title="Get On Board As" />
                  </div>


                </div>

                <CareerJob />
              </div>
              <div className="text-center pt-4">
                <button className="bg-[#eb305c] hover:bg-[#b32546] p-2 rounded-md text-center font-semibold text-white">Join Our Talent Community</button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:sticky top-0 lg:h-screen flex flex-col items-center justify-center bg-[#eb305c]">
          <div className="max-w-6xl   bg-white mx-auto">
            <SnapGallery />
          </div>
        </div>
        <div className="lg:sticky top-0 flex flex-col items-center justify-center bg-[#eb305c]">
          <div className="max-w-6xl w-full mx-auto">
            {/* <div className="">
              <h2>Contact Us</h2>
            </div> */}
            <CareerContact />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Careers;