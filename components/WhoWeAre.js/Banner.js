import React from "react";

const Banner = () => {
  return (
    <>
      <div className="">
        <div className="">
          <div
            className=" w-full h-[400px]  bg-cover "
            style={{
              backgroundImage: `url("assets/images/banner-who-we-are.jpg")`,
            }}
          >
            <p className="text-3xl sm:text-4xl shadowimg font-semibold leading-9 text-white pt-[20%] container-outrank">
              Who We Are
            </p>
            <p className="text-xl shadowimg  font-semibold leading-9 text-white container-outrank">
              WE’RE OBSESSED WITH DIGITAL PERFORMANCE. YOURS.
            </p>

            {/* <img
                            className="hidden sm:block w-full h-[300px]  object-fit"
                            src="assets/images/banner-what-we-do.jpg"
                            alt="sofa"
                        /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;