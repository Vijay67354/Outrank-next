import React from "react";
import Link from "next/link";

const Connect = () => {
  return (
    <div className=" pt-20">
      <div className="flex justify-center items-center flex-col ">
        <div className="lg:text-4xl text-3xl text-[#070b19] w-[90%] text-center font-bold pt-3">
          Direct Action And Conversion
        </div>
        <p className="italic text-3xl font-semibold text-[#eb305c] text-md  pt-3 text-center">
          Mould the visitors towards action and uplift your conversion rate
        </p>
      </div>

      <div className="pt-10">
        <div className="grid md:grid-cols-2 grid-cols-1 container-outrank ">
          <div className="py-5 ">
            <div className="lg:text-4xl text-3xl text-[#070b19] font-bold pt-3">
              Revamp your sales to Outrank
            </div>
            <p className="pt-3 text-justify text-base font-medium text-gray-600">
              Are you satisfied with your digital marketing results? Or do you want more out of it? Many clients are stuck with only one displeasure at the end of the marketing: low conversion rates. There is no problem with the digital marketing agencies in Australia, but with the bouncing back of the visitors once they are on the landing page or are going to take action.
            </p>
            <p className="pt-3 text-justify text-base font-medium text-gray-600">
              At Outrank, our team optimises the conversion rate by targeting potential visitors and testing the website or the landing page. It leads us to the user experience that builds the roots in the viewer&apos;s mind for the business. CRO has evolved in considerable demand as it doesn&apos;t work with the old tactics but needs fresh minds with pre-proofed techniques to thrill the audience towards action.
            </p>
            <div className="pt-6">
              <Link href="/contact">
                <button className="relative group overflow-hidden px-6 h-12 rounded flex space-x-2 items-center bg-gradient-to-r from-[#e03960] to-[#e5375f] hover:bg-[#f02957]">
                  <span className="relative text-base text-white font-semibold">
                    Get a Free quote
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
            </div>
          </div>

          <div className="flex items-center justify-center pb-5 floating4">
            <img
              alt="animation-image"
              src="assets/images/cro-images.jpg"
            />
          </div>
        </div>
      </div>
      {/* assets/images/image-banner4.jpg */}
      <div className="pt-10 bg-stone-100">
        <div className="grid md:grid-cols-2 grid-cols-1 pt-6 pb-16 container-outrank">
          <div className=" bg-[#eb305c] md:w-[500px] h-64 ">
            <div className="transform md:rounded-md bg-white -rotate-3 mt-12 mx-4   md:shadow-2xl  space-y-2 ">
              <img
                alt="animation-image"
                src="assets/images/seoAnalysis.jpg"
                className=" h-[360px]"
              />
            </div>
          </div>

          <div className=" py-5 ">
            <div className="lg:text-4xl text-3xl text-[#070b19] font-bold pt-3">
              Convert your website traffic into business sales and raise the bars
            </div>
            <p className="pt-3 text-justify text-base font-medium text-gray-600">
              Our CRO team is the expert in Conversion Rate Optimization to make maximum gain out of the traffic landing on the site. We first analyse the audience and their requirements from the business site to take action. The duration of the research varies depending on the size of the target audience and the business competition.
            </p>
            <p className="pt-3 text-justify text-base font-medium text-gray-600">
              We believe in improvement with a strategic approach towards digital marketing methodologies, as the audience has grown smart with digital media. We offer free SEO audits and more to introduce our clients and visitors to the world of Digital marketing in Melbourne in the best hands.
            </p>
            <div className="pt-6">
              {/* <Link href="/contact">
                <button className="relative group overflow-hidden px-6 h-12 rounded flex space-x-2 items-center bg-gradient-to-r from-[#e03960] to-[#e5375f] hover:bg-[#f02957]">
                  <span className="relative text-base text-white font-semibold">
                    Get a Free quote
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
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;