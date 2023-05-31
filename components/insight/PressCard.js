import React from "react";
import Header from "../common/Header";

export const PressCard = () => {
  const pressing = [
    {
      id: 1,
      title:"ACHIEVE 7 NOMINATIONS!",
      img: "assets/images/logo1.png",
      header:
        "Made up of a passionate team of digital marketers with diverse backgrounds, comes with the skills and experience needed for success. Every day, our Melbourne-based team of digital marketing experts work together to deliver intelligent, data-driven results that support our client’s objectives and vision and help businesses across Australia flourish.",
      strip: "Jul",
      strip1: "08",
      strip2: "2022",
      strip3: "1 min Read",
    },
    {
      id: 2,

      title:
        "CEO ROBERT TADROS ON LEADING A PROUDLY INDEPENDENT AGENCY",

      img: "assets/images/logo2.png",

      blogname: "ROBERT TADROS",
      header:
        "He also spoke about the agency’s growth,  achievements, and outlook for 2022 Robert Tadros established his independent agency, in March 2016. His vision for the agency was to define the future of performance marketing.",
      strip: "JUN",
      strip1: "12",
      strip2: "2022",
      strip3: "1 min Read",
    },
    {
      id: 3,
      title: "AGENCY PROFILE – ",
      img: "assets/images/logo3.png",
      blogname: "ROBERT TADROS",
      header:
        "Vision: To define the future of performance marketing. We help brands and marketers expand their growth potential to create their own tomorrow.",
      strip: "June",
      strip1: "08",
      strip2: "2022",
      strip3: "1 min Read",
    },
    {
      id: 4,
      title:
        " CEO ROBERT TADROS ON WHAT MAKES HIS AGENCY A GREAT PLACE TO WORK",
      img: "assets/images/logo8.png",
      blogname: "ROBERT TADROS",
      header:
        " was recognised by Great Place to Work on Certification Nation Day, a national celebration of outstanding workplaces on May 17. The Melbourne-based independent full-service agency was one of many businesses across the country that celebrated being certified.",
      strip: "JUN",
      strip1: "30",
      strip2: "2022",
      strip3: "1 min Read",
    },
    {
      id: 5,
      title: "IT’S GREAT PLACE TO WORK ON TIME TO UP OUR MEASUREMENT GAME, OR RISK LOSING BUDGETS",
      img: "assets/images/logo5.jpg",
      blogname: "ROBERT TADROS",

      header:
        "If you’re struggling to achieve your sales targets then it’s high time you looked into your measurement strategy.",
      strip: "MAY",
      strip1: "18",
      strip2: "2022",
      strip3: "1 min Read",
    },
    {
      id: 6,
      title: "WHY IT’S TIME TO RECLAIM PERFORMANCE MARKETING FROM THE BIN",
      img: "assets/images/logo6.jpg",
      blogname: "ROBERT TADROS",
      header:
        "Performance marketing has been dragged through the gutter in recent years with questions over ‘black boxes’ for media spend and attention pivoting to brand marketing.",
      strip: "Apr",
      strip1: "11",
      strip2: "2022",
      strip3: "1 min Read",
    },
  ];
  return (
    <>
      {pressing.map((obj, e) => {
        return (
          <div key={e} className="">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg py-12 overflow-hidden relative  ">
              <img
                src={obj.img}
                className="md:w-full object-cover object-center md:h-28"
              />

              <div className="absolute w-[92px] h-[150px] flex flex-col top-0 right-4 shadow-xl border-x border-gray-300  text-center drop-shadow-lg bg-white pt-2">
                <h1 className="text-[#18234c] font-bold text-2xl ">
                  {obj.strip}
                </h1>
                <h2 className="text-[30px] font-bold text-[#18234c]">
                  {obj.strip1}
                </h2>
                <h3 className=" text-black text-semibold text-[20px]">
                  {obj.strip2}
                </h3>
                <h4 className="text-[#cf2e2e]  font-semibold">{obj.strip3}</h4>
              </div>

              <div className="p-6 ">
                <h1 className="  text-[#18234c] mb-3 md:text-[16px] text-[18px] md:ml-9 pt-7 font-bold ">
                  {obj.title}
                </h1>
                <div className="flex items-center mb-3">
                  <div className="w-20 h-20 md:mr-3 inline-flex items-center justify-center rounded-full  text-white  "></div>
                  <h1 className=" font-serif    text-[#18234c] mb-3  text-[18px]  mr-4.5 md:ml-3">
                    {obj.header}
                  </h1>

                  <br />
                </div>

                <a className=" text-bold inline-flex items-center md:mb-2 lg:mb-0 float-right pl-11 text-[#eb305c]  font-semibold text-1xl">
                  READ MORE
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};