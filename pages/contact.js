import React from "react";
import BannerCommon from "../components/common/BannerCommon";
import ContactForm from "../components/common/ContactForm";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

const Contact = () => {
  return (
    <>
     <Header/>
     <BannerCommon
    bgimg="assets/images/contactbanner.jpg"
     title="Come, Build your Digital Marketing Campaign"
     pera="Don’t wait anymore; the more you delay it, the more you will need to work. Outrank in the digital world with us NOW!"
     />

      <div className="container md:px-12 mx-auto md:grid grid-cols-4 gap-4 ">
        <div className="m-auto my-20 w-full max-w-lg items-center justify-center overflow-hidden rounded-2xl bg-[#da2d55] shadow-xl hover:scale-95 transition duration-700">
          <div className="h-24 bg-white"></div>
          <div className="-mt-20 flex justify-center">
            <img
              className="h-32 rounded-full"
              src="assets/images/contactbanner2.jpg" alt="" />
          </div>
          <div className="mt-5 text-white mb-1 px-3 text-center text-lg shadow-sm font-semibold">
            MELBOURNE
          </div>
          <ul className="text-center text-white font-semibold tracking-wider py-4">
            <li>Level 4,</li>
            <li>11 Wilson St,</li>
            <li>South Yarra VIC 3141</li>
          </ul>
        </div>
        <div className="m-auto my-20 w-full max-w-lg items-center justify-center overflow-hidden rounded-2xl bg-[#da2d55] shadow-xl hover:scale-95 transition duration-700">
          <div className="h-24 bg-white"></div>
          <div className="-mt-20 flex justify-center">
            <img
              className="h-32 rounded-full"
              src="assets/images/contactbanner2.jpg" />
          </div>
          <div className="mt-5 text-white mb-1 px-3 text-center text-lg shadow-sm font-semibold">
          SYDNEY
          </div>
          <ul className="text-center text-white font-semibold tracking-wider py-4">
            <li>Suite 563,</li>
            <li>41/464-480 Kent St</li>
            <li>Sydney NSW 2000</li>
          </ul>
        </div>
        <div className="m-auto my-20 w-full max-w-lg items-center justify-center overflow-hidden rounded-2xl bg-[#da2d55] shadow-xl hover:scale-95 transition duration-700">
          <div className="h-24 bg-white"></div>
          <div className="-mt-20 flex justify-center">
            <img
              className="h-32 rounded-full"
              src="assets/images/contactbanner2.jpg" />
          </div>
          <div className="mt-5 text-white mb-1 px-3 text-center text-lg shadow-sm font-semibold">
          BRISBANE
          </div>
          <ul className="text-center text-white font-semibold tracking-wider py-4">
            <li>123 Eagle St,</li>
            <li>Brisbane City,</li>
            <li>QLD 4000</li>
          </ul>
        </div>
        <div className="m-auto my-20 w-full max-w-lg items-center justify-center overflow-hidden rounded-2xl bg-[#da2d55] shadow-xl hover:scale-95 transition duration-700">
          <div className="h-24 bg-white"></div>
          <div className="-mt-20 flex justify-center">
            <img
              className="h-32 rounded-full"
              src="assets/images/contactbanner2.jpg"
            />
          </div>
          <div className="mt-5 mb-1 px-3 text-white text-center text-lg shadow-sm font-semibold">
          AUSTIN
          </div>
          <ul className="text-center text-white font-semibold tracking-wider py-4">
            <li>14205 N Mopac Expy</li>
            <li>4th Floor,</li>
            <li>Austin,</li>
            <li>TX 78728, USA</li>
          </ul>
        </div>
        
      </div>

      <ContactForm/>  
<section className="text-gray-600 body-font relative">
  <div className=" inset-0 bg-gray-300 h-screen">
    <iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.6719049991!2d76.99120271440293!3d28.459305198652242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d172350ec3afb%3A0x148d1fd9cc2a979c!2sVashishth%20White%20House!5e0!3m2!1sen!2sin!4v1657706164816!5m2!1sen!2sin"></iframe>
  </div>
  {/* <div className="container px-5 py-24 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
      <div className="relative mb-4">
        <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
    </div>
  </div> */}
</section>


      <Footer />
   
    </>
  );
};

export default Contact;