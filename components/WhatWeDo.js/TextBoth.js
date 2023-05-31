import React from "react";

function TextBoth({ title, sub, peraOne, peraTwo, peraThree,peraFour,peraFive,perasix, image }) {
  return (
    <section className="py-20 bg-stone-100 my-20">
        <div>
            <h2 className="text-[2.50rem] font-semibold text-center uppercase">Are you still confused about where it went wrong?<br/> Find out now with free SEO audit</h2>

        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        <div className="px-4 md:mr-6">
          <h3 className="text-4xl pr-6 sm:leading-snug tracking-tight font-bold text-black">
            {title}
          </h3>
          <p className=" text-stone-800 text-xl font-medium">
            {sub}
            {/* Don’t fall for the hype. */}
          </p>
          <p className="text-justify text-base font-medium py-6 text-gray-600 mt-7">{peraOne}</p>
          <p className="text-justify text-base font-medium text-gray-600">{peraTwo}</p>
          <p className="text-justify text-base font-medium text-gray-600 pt-8">{peraThree}</p>
        </div>
        <div className="px-4 md:mr-6">
          <h3 className="text-4xl pr-6 sm:leading-snug tracking-tight font-bold text-black">
            {title}
          </h3>
          <p className=" text-stone-800 text-xl font-medium">
            {sub}
            {/* Don’t fall for the hype. */}
          </p>
          <p className="text-justify text-base font-medium py-6 md:-mt-7 text-gray-600">{peraFour}</p>
          <p className="text-justify text-base font-medium text-gray-600">{peraFive}</p>
          <p className="text-justify text-base font-medium text-gray-600">{perasix}</p>
        
        </div>
      </div>
    </section>
  );
}

export default TextBoth;