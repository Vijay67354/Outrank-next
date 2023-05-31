import React from "react";

const ContactSection = () => {
  return (
    <div className="  lg:px-0 px-5 container-outrank  py-20">
      <div className="bg-[#070b1984] py-12  rounded-2xl relative shadow-contact">
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-5 items-center justify-items-center">
          <div className="col-span-1 h-full w-full relative  hidden md:flex">
            <img
              alt=""
              src="assets/images/contact-img.png"
              className="w-full absolute left-10 floating z-30"
            />
          </div>

          <div className="md:col-span-2 md:px-24 px-5 text-center">
            <h4 className="lg:text-4xl md:text-3xl text-2xl font-bold text-white">
              Contact Us Now
            </h4>
            <p className="pt-3 font-medium md:pr-20 text-white">
              Why are you still holding onto your massive business growth? Come
              Abroad With Us, NOW!
            </p>

            <div className="py-5">
              <button className="bg-black hover:bg-[#eb305c] hover:text-black px-10 py-2 rounded text-white font-semibold">
                Connect with us !
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;