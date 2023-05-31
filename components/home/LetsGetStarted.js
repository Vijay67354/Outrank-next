import React from "react";

const LetsGetStarted = () => {
  return (
    <>
      <div className="bg-[#070b19] lg:mt-20">
        <div className="container-outrank">
          <div className="flex justify-center items-center flex-col ">
            <p className="italic lg:text-3xl text-[#eb305c] text-md pt-10  text-center">
              LET&apos;S GET STARTED
            </p>
            <div className="lg:text-5xl md:text-3xl text-2xl text-[#fff]  text-center font-bold pt-3">
              Everyone is doing digital marketing <br/> What makes us different?
            </div>
            <p className="italic lg:text-2xl text-white text-md lg:pt-6 pt-2 semibold text-center">
              Here is how we are your perfect investors, Literally
            </p>
          </div>
          <div className="l-container md:grid space-y-4 mx-auto">
            <div className="b-game-card">
              <div className="b-game-card__cover">
                <div className="md:py-10">
                  <img
                    src="/assets/images/graph.png"
                    className="mx-auto pt-2"
                    alt=""
                    width={40}
                    height={40}
                  ></img>
                  <div className="  lg:px-6 px-4  text-white">
                    <div className="capitalize font-semibold text-xl text-center py-2">
                      Thorough Analysis
                    </div>
                    <p className="text-base text-justify tracking-tighter pb-2">
                      First, we will run an analysis on all your digital
                      marketing channels. It will help us in preparing a
                      strategically proven and result-oriented marketing
                      strategy for your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="b-game-card">
              <div className="b-game-card__cover">
                <div className="md:py-10">
                  <img
                    src="/assets/images/graphic-progression.png"
                    className="mx-auto pt-2"
                    alt=""
                    width={40}
                    height={40}
                  ></img>
                  <div className="  lg:px-6 px-4  text-white">
                    <div className="capitalize font-semibold text-xl text-center py-2">
                      Process blueprint
                    </div>
                    <p className="text-base text-justify tracking-tighter pb-2">
                      We will share the blueprint of our strategic digital
                      marketing process to ensure that you know what we are
                      doing to reach your target audience, fulfilling more than
                      expectations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="b-game-card">
              <div className="b-game-card__cover">
                <div className="md:py-10">
                  <img
                    src="/assets/images/graph.png"
                    className="mx-auto pt-2"
                    alt=""
                    width={40}
                    height={40}
                  ></img>
                  <div className="  lg:px-6 px-4  text-white">
                    <div className="capitalize font-semibold text-xl text-center py-2">
                      Growth Demonstration
                    </div>
                    <p className="text-base text-justify tracking-tighter pb-2">
                      Once the digital marketing campaign is completed, we will
                      share a thorough representaions of a proper analysis of
                      how it has affected and succeeded your business via
                      digital media.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LetsGetStarted;