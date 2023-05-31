import React from "react";
import Link from 'next/link';

function FeatureRight({
  imageOne,
  imageTwo,
  title,
  peraOne,
  peraTwo,
  btn,
  peraThree,
}) {
  return (
    <section className="bg-white container-outrank md:py-20 py-10">
      <div className="gap-16 items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:px-6">
        <div className="grid md:grid-cols-2  grid-cols-1 gap-4 mt-8 floating4">
          <img
            className="w-full rounded-lg h-[260px]"
            src={imageOne}
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg h-[260px]"
            src={imageTwo}
            alt="office content 2"
          />
        </div>
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400 space-y-4">
          <h3 className="md:text-4xl text-2xl uppercase md:pt-0 pt-10 pr-6 sm:leading-snug tracking-tight font-bold text-black">
            {title}
          </h3>
          <p className="text-justify text-base font-medium text-gray-600">{peraOne}</p>
          <p className="text-justify text-base font-medium text-gray-600">{peraTwo}</p>

          <p className="text-justify text-base font-medium text-gray-600">{peraThree}</p>

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
      </div>
    </section>
  );
}

export default FeatureRight;