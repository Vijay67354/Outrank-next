import React from "react";

export const BlogCard = () => {
  const blogging = [
    {
      id: 1,
      title:
        "GET LINKEDIN WITH IMPRESSIVE’S TOP 5 TIPS FOR LINKEDIN ADVERTISING.",
      img: "assets/images/images-8.jpg",
      date: "06/05/2022",
      strip: "JUl",
      strip1: "05",
      strip2: "2022",
      strip3: "1 min Read",
    },
    {
      id: 2,
      title: "CUSTOMERFIRST DATA – RELATIONSHIPS THAT ARE BUILT, NOT BOUGHT.",
      img: "assets/images/seo-13.png",
      blogname: "ROBERT TADROS",
      date: "22/04/2022",
      strip: "JAN",
      strip1: "08",
      strip2: "2022",
      strip3: "1 min Read",
    },
    {
      id: 3,
      title: "4 MAJOR TECH SEO STRATEGIES IN 2022 YOU NEED TO KNOW.",
      img: "assets/images/aim.png",
      blogname: "ROBERT TADROS",
      date: "08/04/2022",
      strip: "MAR",
      strip1: "02",
      strip2: "2022",
      strip3: "1 min Read",
    },
    {
      id: 4,
      title:
        "INTEGRATED MARKETING – EVERYTHING YOU NEED TO KNOW AND WHY IT’S A WIN FOR YOUR BUSINESS.",
      img: "assets/images/seo-2.png",
      blogname: "ROBERT TADROS",
      date: "01/04/2022",
      strip: "JAN",
      strip1: "06",
      strip2: "2022",
      strip3: "1 min Read",
    },
    {
      id: 5,
      title: "EMAIL AUTOMATION: THE INSIDER TRICKS OF THE TRADE.",
      img: "assets/images/seo-50.png",
      blogname: "ROBERT TADROS",
      date: "25/03/2022",
      strip: "Jul",
      strip1: "07",
      strip2: "2022",
      strip3: "1 min Read",
    },
    {
      id: 6,
      title: "THE FUTURE OF SEO: MULTIMEDIA FIRST SEO STRATEGY.",
      img: "assets/images/seo-8.png",
      blogname: "ROBERT TADROS",
      date: "18/03/2022",
      strip: "MAR",
      strip1: "09",
      strip2: "2022",
      strip3: "1 min Read",
    },
  ];
  return (
    <>
      {blogging.map((obj, e) => {
        return (
          <div key={e} className="p-4">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden relative">
              <img
                src={obj.img}
                className="md:w-full object-cover object-center md:h-72 h-60"
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

              <div className="p-6">
                <h1 className="title-font  font-bold text-gray-900 mb-3 text-[15px]">
                  {obj.title}
                </h1>
                <div className="md:flex items-center mb-3">
                  <div className=" mr-3 inline-flex items-center justify-center rounded-full  text-white">
                    <img
                      className="rounded-full md:w-18 md:h-[70px]  h-[50px] "
                      src="assets/images/human.image.jpg"
                    ></img>
                  </div>
                  <h2 className="text-[#eb305c] text-bold text-sm title-font font-bold mb-3 text-left ">
                    ROBERT TADROS
                    <br />
                    {obj.date}
                  </h2>

                  <a className="text-[#eb305c] text-bold  items-center md:mb-2 lg:mb-0 float-right pl-11 font-bold">
                    Read More
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
          </div>
        );
      })}
    </>
  );
};