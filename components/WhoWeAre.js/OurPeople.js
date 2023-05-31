import React from "react";

const OurPeople = () => {
  return (
    <div className="container-outrank ">
      <div className="flex justify-center items-center flex-col ">
        <p className="italic lg:text-3xl text-[#eb305c] text-md pt-10  text-center">
          OUR PEOPLE
        </p>
        <div className="lg:text-5xl text-3xl text-[#070b19] w-[90%] text-center font-bold pt-3">
          MEET OUR LEADERSHIP TEAM
        </div>
      </div>
      <div>
        <div className="row-people py-12  ">
          <div className="flex flex-col justify-center items-center  ">
            <div className="product--blue">
              <div className="product_inner">
                <img src="assets/images/member1.png" />
              </div>
            </div>
            <p className=" lg:text-2xl text-[#070b19] text-md font-semibold  ">
              Erica Tan
            </p>
            <p className=" lg:text-base text-[#070b19]  ">
              Head of Finance & Operations
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="product--orange">
              <div className="product_inner">
                <img src="assets/images/member3.png" />
              </div>
            </div>
            <p className=" lg:text-2xl text-[#070b19] text-md font-semibold  ">
              Bronwyn Bowen
            </p>
            <p className=" lg:text-base text-[#070b19]  ">
              People & Culture Manager
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="product--red">
              <div className="product_inner">
                <img src="assets/images/member5.png" />
              </div>
            </div>
            <p className=" lg:text-2xl text-[#070b19] text-md font-semibold  ">
              Priyanka Paul
            </p>
            <p className=" lg:text-base text-[#070b19]  ">Head of Digital</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="product--green">
              <div className="product_inner">
                <img src="assets/images/member7.png" />
              </div>
            </div>
            <p className=" lg:text-2xl text-[#070b19] text-md font-semibold  ">
              Robert Tadros
            </p>
            <p className=" lg:text-base text-[#070b19]  ">CEO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPeople;