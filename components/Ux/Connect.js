import React from "react";
import Link from "next/link";

const Connect = () => {
  return (
    <div className=' pt-20'>

      <div className='flex justify-center items-center flex-col '>
        <div className='lg:text-4xl text-3xl text-[#070b19] w-[90%] text-center font-bold pt-3'>Make the users flow through the webpage</div>
        <p className='italic md:text-3xl font-semibold text-[#eb305c] text-md  pt-3 text-center'>A good UX builds every step delightful and remembering</p>
      </div>

      <div className="pt-10">
        <div className="grid md:grid-cols-2 grid-cols-1 container-outrank ">
          <div className="py-5 ">
            <div className="lg:text-4xl text-3xl text-[#070b19] font-bold pt-3">
            Upgrade the user experience to heighten your business
            </div>
            <p className="pt-3 text-justify text-base font-medium text-gray-600">
            Online media is full of options for consumers, and it takes a minute or second for them to switch from one business to another. The UX of your website/webpage or digital marketing campaign should be optimized to deliver an action-based user experience. It is one of the only assurances to convert the audience into consumers.
            </p>

            <p className="pt-3 text-justify text-base font-medium text-gray-600">
            A healthy UX environment drives traffic, sales, retention, and more. Our UX team at Outrank is an expert in creating a professional and binding UX service through their design and development skills. Their primary focus is to deliver a design that satisfies the consumers and the digital marketing strategy.
            </p>
            <div className="pt-6 pb-10">
              <Link href="#">
                <a
                  className="  font-semibold  text-white md:text-lg  text-base px-8 py-2 bg-[#eb305c] hover:bg-[#007bff] uppercase rounded-lg transition duration-500"
                  style={{ boxShadow: "2px 3px 4px rgba(0, 0, 0, 0.5)" }}
                >
                  Get a free Quote
                </a>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center pb-5 floating4">
            <img
              alt="animation-image"
              src="assets/images/ux.jpg"
              className="w-96"
            />
          </div>
        </div>
      </div>

      <div className='pt-10 bg-stone-100'>
        <div className='grid md:grid-cols-2 grid-cols-1 pt-6 pb-16 container-outrank'>

          <div className=" bg-[#eb305c] md:w-[500px] h-64">
            <div className="transform md:rounded-md bg-white -rotate-3 mt-12 mx-4  md:shadow-2xl  space-y-2 ">
              <img alt='animation-image' src='assets/images/ui-images.jpg' className="  md:h-[400px]  h-52 w-[600px]" />
            </div>
          </div>

          <div className=" py-5 ">
            <div className="lg:text-4xl text-3xl text-[#070b19] font-bold pt-3">
            Outrank with customized UX services 
            </div>
            <p className="pt-3 text-justify text-base font-medium text-gray-600 ">
            Our UX services are tailored to accompany the end goal of digital marketing and deliver an action-based user experience to the users. Digital media is vast, and the massive data over it can get lost in the crowd without optimization. The team Outrank believes in outranking the present competition by following the latest research. It also gets us one step ahead of the upcoming competition and keeps the business in their brains. The simple formula of UX service that we follow is to make it attractive for the eyes and soothing for the brain.

            </p>
          
            <div className="pt-6">
              <Link href="#">
                <a
                  className="  font-semibold  text-white md:text-lg  text-base px-8 py-2 bg-[#eb305c] hover:bg-[#007bff] uppercase rounded-lg transition duration-500"
                  style={{ boxShadow: "2px 3px 4px rgba(0, 0, 0, 0.5)" }}
                >
                  BOOK A FREE STRATEGY SESSION
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>





      <div className='pt-10 bg-stone-100'>
        <div className='grid md:grid-cols-2 grid-cols-1 pt-6 pb-16 container-outrank'>

          <div className=" bg-[#eb305c] md:w-[500px] h-64">
            <div className="transform md:rounded-md bg-white -rotate-3 mt-12 mx-4  md:shadow-2xl  space-y-2 ">
              <img alt='animation-image' src='assets/images/bigstock.jpg' className="  md:h-[400px]  h-52 w-[600px]" />
            </div>
          </div>

          <div className=" py-5 ">
            <div className="lg:text-4xl text-3xl text-[#070b19] font-bold pt-3">
            Begin your optimized digital journey with Outrank audits
            </div>
            <p className="pt-3 text-justify text-base font-medium text-gray-600 ">
            A successful digital marketing roadmap follows deep and thorough research on the present market trends and significant data research to build insight into consumer behaviour. 
            </p>
            <p className="pt-3 text-justify text-base font-medium text-gray-600">
            We are providing SEO and UX audits to check the imbalances in your current marketing strategy, and then with our expert team, we will define a structured marketing plan, to begin with. With fresh ideas and experienced professionals, our digital marketing strategy will help you Outrank the rest with the finest. Take on with UX audit to find out what we offer as the best digital marketing agency in Australia.
            </p>
            <div className="pt-6">
              <Link href="#">
                <a
                  className="  font-semibold  text-white md:text-lg  text-base px-8 py-2 bg-[#eb305c] hover:bg-[#007bff] uppercase rounded-lg transition duration-500"
                  style={{ boxShadow: "2px 3px 4px rgba(0, 0, 0, 0.5)" }}
                >
                  BOOK A FREE STRATEGY SESSION
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;