import React from "react";
import SubTitle from "../common/SubTitle";
import Link from "next/link";

function FeatureLeft({ title, sub, peraOne, peraTwo, image, btn,subTitle,peraThree,peraFour,peraFive,peraSix,peraSeven}) {
  return (
    <section className="md:py-20 py-10 bg-stone-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        <div className="px-4 md:mr-6 ">
          {
            subTitle?<SubTitle title={subTitle} />:""
          }
          <h3 className="text-2xl sm:text-4xl uppercase pr-6 sm:leading-snug tracking-tight font-bold text-black ">
            {title}
          </h3>
          {
            sub?<p className="mt-4 text-stone-800 text-xl font-medium">
            {sub}
            
          </p>:""
          }
          <div className="space-y-4 py-4">
          <p className="text-justify text-base font-medium text-gray-600">
            {peraOne}
          </p>
          <p className="text-justify text-base font-medium text-gray-600">
            {peraTwo}
          </p>

          <p className="text-justify text-base font-medium text-gray-600">
            {peraThree}
          </p>

          <p className="text-justify text-base font-medium text-gray-600">
            {peraFour}
          </p>

          <p className="text-justify text-base font-medium text-gray-600">
            {peraFive}
          </p>
          <p className="text-justify text-base font-medium text-gray-600">
            {peraSix}
          </p>
          <p className="text-justify text-base font-medium text-gray-600">
            {peraSeven}
          </p>
          </div>
          {btn ? (
            <p className="pt-8">
             <Link href="/contact">
              <button className="relative group overflow-hidden px-6 h-12 rounded flex space-x-2 items-center bg-gradient-to-r from-[#e03960] to-[#e5375f] hover:bg-[#f02957]">
                <span className="relative text-base text-white font-semibold">
                  {btn}
                </span>
                <div className="flex items-center -space-x-3 translate-x-3">
                  <div className="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
              </Link>
            </p>
          ) : (
            ""
          )}
        </div>
        <div>
          <div className=" bg-[#eb305c] transform -translate-x-10 relative md:h-64 h-52 "></div>
          <div className="transform md:rounded-md bg-white rotate-3 scale-110 translate-x-10 md:shadow-2xl md:mr-12 -mt-44 space-y-2 mr-32 ">
            <img src={image} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureLeft;