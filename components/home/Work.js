import React from "react";

const Work = () => {
  const carddata = [
    {
      id: "1",
      head: "Lorem Ipsum",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
      image: "/assets/images/01.png",
      addclass: "floating2",
    },
    {
      id: "2",
      head: "Lorem Ipsum",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
      image: "/assets/images/02.png",
      addclass: "relative floating3",
    },

    {
      id: "3",
      head: "Lorem Ipsum",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
      image: "/assets/images/03.png",
      addclass: "floating4",
    },
    {
      id: "4",
      head: "Lorem Ipsum",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
      image: "/assets/images/04.png",
      addclass: "relative  floating3",
    },
  ];
  return (
    <>
      <div className="container-outrank px-5 mx-auto ">
        <div className="flex justify-center items-center flex-col md:pt-20 pt-8 ">
          <p className="italic lg:text-3xl text-[#eb305c] text-md pt-10  text-center">
            OUR WORK
          </p>
          <div className="lg:text-5xl text-3xl text-[#070b19] text-center font-bold pt-3">
          Learn from the one who chose to Outrank in the market with their right digital marketing partner, Outrank
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 md:space-y-10 lg:space-y-0  md:grid-cols-2 lg:grid-cols-4 pt-20 md:pt-20 relative pb-20 ">
          {carddata.map((item) => (
            <div className={item.addclass} key={item.id}>
              <div className="relative ">
                <img
                  src="/assets/images/servicecard.png"
                  alt=""
                  className="mx-auto"
                />
                <div
                  className="absolute -top-10 lg:left-6 left-16 md:left-32 xl:left-[2.2rem] group"
                  alt=""
                >
                  <img
                    src="/assets/images/yellowservicecard.png"
                    alt=""
                    className="group-hover:scale-110 transition-all duration-1000 "
                  />
                  <div className="z-20 text-white text-xl absolute top-0 px-5 py-8 text-center group-hover:scale-105 transition-all duration-1000">
                    {" "}
                    {item.head}
                  </div>
                  <p className="z-20 absolute top-16 text-white text-[13px] px-4 text-justify tracking-tighter lowercase">
                    {" "}
                    {item.text}
                  </p>
                  <div className="flex  justify-center items-center">
                    <button className="z-20 absolute top-40 px-4 py-1 bg-[#070b19] text-white text-xs ">
                      {" "}
                      Read More
                    </button>
                  </div>
                  {/* <div className='z-20 absolute top-0 px-5 py-8 text-lg group-hover:scale-105 transition-all duration-1000 '>{item.text}</div> */}
                </div>

                <img
                  src={item.image}
                  alt=""
                  className="absolute z-20 bottom-20 left-20 md:left-44 lg:left-28"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Work;