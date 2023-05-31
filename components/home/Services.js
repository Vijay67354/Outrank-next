import React from "react";

const Services = () => {
  return (
    <div className="bg-[#070b19]">
      <div className="flex justify-center items-center flex-col ">
        <p className="italic lg:text-3xl text-[#eb305c] text-md pt-10  text-center">
          HOW WE HELP
        </p>
        <div className="lg:text-5xl md:text-3xl text-2xl text-white w-[90%] text-center font-bold pt-3">
          WE BUILD THE BEST WITH PERFECTION
        </div>
      </div>

      <div className=" lg:py-12 pb-12">
        <div className="lg:grid-cols-2 grid gap-8 relative lg:px-20 px-8 py-12">
          <div className="lg:w-[70%]">
            <div className="text-white lg:text-5xl text-2xl pb-6 font-semibold">
              With our services for your business
            </div>
            <p className="italic text-white text-justify leading-loose">
              Outrank is working with a team of professionals and expert digital
              marketers in Melbourne. They are specialists in various digital
              marketing services and are strategy makers to find you a top-notch
              approach to achieving your target.
              <span className="text-sm text-[#eb305c] cursor-pointer">
                {" "}
                Get Started &gt;
              </span>
            </p>
          </div>
          <div className="flex justify-center items-center relative">
            <div
              className="floating2 bg-[#eb305c]  lg:w-[60%] rounded-xl"
              style={{ boxShadow: "3px 4px 13px rgba(0, 0, 0, 0.35)" }}
            >
              <div className="  lg:px-6 px-4 py-6 space-y-6 text-white">
                <div className="capitalize font-bold text-xl lg:pl-5 pl-12">
                  <h2>Get more clicks</h2> <h2>More sales</h2>
                </div>
                <p className="text-base">
                  The more you are visible on the search engine results, the
                  more you have chances to gain sales from the internet. We will
                  help you outrank your competitors present over the internet.
                </p>
              </div>
              <div className="lg:px-6 px-4 py-1 text-white">
                <p className="text-base font-semibold">Start With.</p>
                <p className="text-sm">SEO</p>
                <p className="text-sm">Google Ads</p>
                <p className="text-sm">Social media Ads</p>
              </div>
              <div className="lg:px-6 px-4 mb-16 ">
                <button
                  type="button"
                  className=" float-right bg-white text-secondary rounded-md hover:scale-105 duration-500 px-12 py-2"
                  style={{ boxShadow: "5px 5px 10px #3d3d3d" }}
                >
                  Get Started &gt;
                </button>
              </div>
              <div
                className=" bg-white p-6 rounded-full absolute inline-block -top-[15%] -left-[10%]"
                style={{ boxShadow: "2px 4px 17px rgba(0, 0, 0, 0.35)" }}
              >
                <img
                  src="/assets/images/icon1.png"
                  alt=""
                  width={40}
                  height={40}
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 relative lg:px-20 px-8 gap-8 py-10">
          <div className="w-72 lg:block hidden">
            <img className="" src="/assets/images/arrow1.gif" alt=""></img>
          </div>

          <div
            className=" floating3 relative bg-[#007bff]  h-fit  rounded-xl lg:-top-[30%] -top-[10%] lg:-left-[25%]"
            style={{ boxShadow: "3px 4px 13px rgba(0, 0, 0, 0.35)" }}
          >
            <div className="  lg:px-6 px-4 py-6 space-y-6 text-white">
              <div className="capitalize font-semibold text-xl lg:pl-5 pl-12">
                <h2>Interact to convert the</h2>{" "}
                <h2>Visitors into customers</h2>
              </div>
              <p className="text-base">
                Our interactive and enggaing content will help you convert the
                audience into customers and will take on charts. We will help
                you Outrank in your customer&apos;s eyes.
              </p>
            </div>
            <div className="lg:px-6 px-4 py-1 text-white">
              <p className="text-base font-semibold">Start With.</p>
              <p className="text-sm">Content Marketing</p>
              <p className="text-sm">CRO</p>
              <p className="text-sm">Email Marketing</p>
            </div>
            <div className="lg:px-6 px-4 mb-16 ">
              <button
                type="button"
                className=" float-right bg-white text-secondary rounded-md hover:scale-105 duration-500 px-12 py-2"
                style={{ boxShadow: "5px 5px 10px #3d3d3d" }}
              >
                Get Started &gt;
              </button>
            </div>
            <div
              className=" bg-white p-6 rounded-full absolute inline-block -top-[20%] -left-[10%]"
              style={{ boxShadow: "2px 4px 17px rgba(0, 0, 0, 0.35)" }}
            >
              <img
                src="/assets/images/icon2.png"
                alt=""
                width={40}
                height={40}
              ></img>
            </div>
          </div>

          <div
            className="floating4 lg:relative bg-[#007bff]  h-fit  rounded-xl top-[4%]"
            style={{ boxShadow: "3px 4px 13px rgba(0, 0, 0, 0.35)" }}
          >
            <div className="  lg:px-6 px-4 py-6 space-y-6 text-white">
              <div className="capitalize font-semibold text-xl lg:pl-5 pl-12">
                <h2>Become a magnet to</h2>
                <h2>Your target audience</h2>
              </div>
              <p className="text-base">
                The audience on the internet is full of choices, and they have
                vast options to run off and switch their previous interests. We
                help you stay trendy and attractive in the market.
              </p>
            </div>
            <div className="lg:px-6 px-4 py-1 text-white">
              <p className="text-base font-semibold">Start With.</p>
              <p className="text-sm">Social Media</p>
              <p className="text-sm">UX</p>
              <p className="text-sm">Marketing Automation</p>
            </div>
            <div className="lg:px-6 px-4 mb-16 ">
              <button
                type="button"
                className=" float-right bg-white text-secondary rounded-md hover:scale-105 duration-500 px-12 py-2"
                style={{ boxShadow: "5px 5px 10px #3d3d3d" }}
              >
                Get Started &gt;
              </button>
            </div>
            <div
              className=" bg-white p-6 rounded-full absolute inline-block -top-[20%] -left-[10%]"
              style={{ boxShadow: "2px 4px 17px rgba(0, 0, 0, 0.35)" }}
            >
              <img
                src="/assets/images/icon3.png"
                alt=""
                width={40}
                height={40}
              ></img>
            </div>
          </div>
        </div>

        <div className="lg:grid-cols-3 grid gap-4 relative lg:px-10 px-8">
          <div></div>
          <div className="flex justify-start items-center lg:relative -top-[20%]">
            <div
              className="floating bg-[#eb305c]  rounded-xl"
              style={{ boxShadow: "3px 4px 13px rgba(0, 0, 0, 0.35)" }}
            >
              <div className="  lg:px-6 px-4 py-6 space-y-6 text-white">
                <div className="capitalize font-semibold text-xl lg:pl-5 pl-12">
                  <h2>Delight more customers</h2>
                  <h2> Be their first choice</h2>
                </div>
                <p className="text-base">
                  At Outrank, we have a devoted team designing and developing
                  customer engagement models. The more peasant they feel through
                  you, the more preferable you become for them.
                </p>
              </div>
              <div className="lg:px-6 px-4 py-1 text-white">
                <p className="text-base font-semibold">Start With.</p>
                <p className="text-sm">SEO</p>
                <p className="text-sm">Lead Generation</p>
                <p className="text-sm">Content Writing</p>
              </div>
              <div className="lg:px-6 px-4 mb-16 ">
                <button
                  type="button"
                  className=" float-right bg-white text-secondary rounded-md hover:scale-105 duration-500 px-12 py-2"
                  style={{ boxShadow: "5px 5px 10px #3d3d3d" }}
                >
                  Get Started &gt;
                </button>
              </div>
              <div
                className=" bg-white p-6 rounded-full absolute inline-block -top-[10%] -left-[10%]"
                style={{ boxShadow: "2px 4px 17px rgba(0, 0, 0, 0.35)" }}
              >
                <img
                  src="/assets/images/icon4.png"
                  alt=""
                  width={40}
                  height={40}
                ></img>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Services;