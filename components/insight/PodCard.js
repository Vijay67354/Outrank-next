import React from "react";
import Header from "../common/Header";

export const PodCard = () => {
  const predding = [
    {
      id: 1,
      title: "EPISODE 14: SEO SUCCESS STORIES WITH KEVIN INDIG FROM SHOPIFY.",
      img: "assets/images/Dennis-1.jpg",
      header:
        "“I think one of the biggest challenges facing SEOs in 2022 is getting an accurate understanding of what’s going on in the search results.” – Kevin Indig.",
      strip: "Jul",
      strip1: "09",
      strip2: "2022",
      strip3: "1 min Read",
    },
    {
      id: 2,
      title: "EPISODE 13: SEO SUCCESS STORIES WITH LINDSAY SAKRAIDA.",
      img: "assets/images/image-3.jpg",
      blogname: "ROBERT TADROS",
      header:
        "“I think one of the biggest challenges [facing SEOs in 2022] is one of the biggest opportunities as well: organic marketing has a real opportunity to push for and get buy-in for further investment.” – Lindsay Sakraida.",
      strip: "MAR",
      strip1: "12",
      strip2: "2022",
      strip3: "1 min Read",
    },
    {
      id: 3,
      title: "EPISODE 10: SEO SUCCESS STORIES WITH ELI SCHWARTZ.",
      img: "assets/images/game.jpg",
      blogname: "ROBERT TADROS",
      header:
        "Listen as show host Russ Macumber talks with the guru Tom Critchlow about his experience as a consultant working with senior leaders, and his journey to starting The SEO MBA program.",
      strip: "June",
      strip1: "08",
      strip2: "2022",
      strip3: "1 min Read",
    },
    {
      id: 4,
      title: "EPISODE 11: SEO SUCCESS STORIES WITH STEVE WIIDEMAN OF IHOP.",
      img: "assets/images/image-3.jpg",
      blogname: "ROBERT TADROS",
      header:
        "Friend of the show, Steve Wiideman, returns for another episode to give us an update on what he has been doing and his experience working with International House of Pancakes (IHOP). –",
      strip: "JUN",
      strip1: "30",
      strip2: "2022",
      strip3: "1 min Read",
    },
    {
      id: 5,
      title: "EPISODE 10: SEO SUCCESS STORIES WITH ELI SCHWARTZ.",
      img: "assets/images/game.jpg",
      blogname: "ROBERT TADROS",
      header:
        "“The biggest challenge [facing SEOs in 2022] is getting things done, making things happen.” – Eli Schwartz",
      strip: "May",
      strip1: "18",
      strip2: "2022",
      strip3: "1 min Read",
    },
    {
      id: 6,
      title: "EPISODE 9: SEO SUCCESS STORIES WITH SPECIAL GUEST KATE TOON.",
      img: "assets/images/podcast.image.jpg",
      blogname: "ROBERT TADROS",
      header:
        "Listen as show hosts Russ Macumber & Gabriel Grossman talks with author, podcast host and SEO teacher Kate Toon about how she got into the industry and what tips she has for budding SEO ninjas.",
      strip: "Apr",
      strip1: "11",
      strip2: "2022",
      strip3: "1 min Read",
    },
  ];
  return (
    <>
      {predding.map((obj, e) => {
        return (
          <div key={e} className="p-4 ">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden relative  ">
              <img
                src={obj.img}
                className="w-full object-cover object-center h-60"
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

              <div className="md:p-6 ">
                <h1 className="title-font   text-gray-900 mb-3 md:text-[15px] md:ml-8 pt-4 font-bold ">
                  {obj.title}
                </h1>
                <div className="flex items-center mb-3">
                  <div className="md:w-20 md:h-20 md:mr-5 inline-flex items-center justify-center rounded-full  text-white  "></div>
                  <h1 className=" font-serif    text-[#18234c] mb-3  text-[18px]  md:mr-4.5">
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