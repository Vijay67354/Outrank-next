import React from "react";
import {HiLocationMarker} from 'react-icons/hi'
import {BsFillCalendar2CheckFill,BsCalendar3} from 'react-icons/bs';

function CareerJob() {
  return (
    <div className="space-y-6">
        <div className="lg:flex shadow-sm cursor-pointer">
      <div className="sm:w-24 sm:h-24 h-16 w-16 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
        <img src="assets/images/01.png" />
      </div>
      <div className="lg:flex">
        <div className="">
          <h1 className="text-black text-xl title-font font-medium ">
          SEO Manager
          </h1>
          <p className="leading-relaxed text-sm text-gray-400 pr-4">
          We are looking forward to extending our SEO Manager list by adding experts who have worked in the industry for more than five years and can handle a team of freshers and trainees of up to 20.
          </p>
        </div>
        <div className="space-y-2  sm:mr-10 items-center justify-center flex-shrink-0">
          <div className="flex space-x-2">
            <HiLocationMarker/>
            <p className="title-font font-medium text-sm text-gray-400">Gurgaon</p>
          </div>
          <div className="flex space-x-2">
          <BsFillCalendar2CheckFill/>

            <p className="title-font font-medium text-sm text-gray-400">Full time</p>
          </div>
          <div className="flex space-x-2">
          <BsCalendar3/>
            <p className="title-font font-medium text-sm text-gray-400">9 days ago</p>
          </div>
        </div>
      </div>
    </div>
    <div className="lg:flex shadow-sm cursor-pointer">
      <div className="sm:w-24 sm:h-24 h-16 w-16 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
        <img src="assets/images/02.png" />
      </div>
      <div className="lg:flex">
        <div className="">
          <h1 className="text-black text-xl title-font font-medium mb-2">
          Content Writer
          </h1>
          <p className="leading-relaxed text-sm text-gray-400 pr-4">
          Creative content is a never-ending requirement in handling content marketing. We are looking for a writer who is well aware of digital marketing techniques and can get the creative juices flowing through their writings.
          </p>
        </div>
        <div className="space-y-2  sm:mr-10 items-center justify-center flex-shrink-0">
          <div className="flex space-x-2">
            <HiLocationMarker/>
            <p className="title-font font-medium text-sm text-gray-400">Jaipur</p>
          </div>
          <div className="flex space-x-2">
          <BsFillCalendar2CheckFill/>

            <p className="title-font font-medium text-sm text-gray-400">Full time</p>
          </div>
          <div className="flex space-x-2">
          <BsCalendar3/>
            <p className="title-font font-medium text-sm text-gray-400">11 days ago</p>
          </div>
        </div>
      </div>
    </div>
    <div className="lg:flex shadow-sm cursor-pointer">
      <div className="sm:w-24 sm:h-24 h-16 w-16 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
        <img src="assets/images/03.png"  alt=""/>
      </div>
      <div className="lg:flex">
        <div className="">
          <h1 className="text-black text-xl title-font font-medium mb-2">
          Social Media Marketer
          </h1>
          <p className="leading-relaxed text-sm text-gray-400 pr-4">
          The most crucial channel for digital marketing is social media marketing, and we are looking for someone who can handle the given tasks with a bit of uniqueness and have more than four years of experience.
          </p>
        </div>
        <div className="space-y-2  sm:mr-10 items-center justify-center flex-shrink-0">
          <div className="flex space-x-2">
            <HiLocationMarker/>
            <p className="title-font font-medium text-sm text-gray-400">Delhi</p>
          </div>
          <div className="flex space-x-2">
          <BsFillCalendar2CheckFill/>

            <p className="title-font font-medium text-sm text-gray-400">Full time</p>
          </div>
          <div className="flex space-x-2">
          <BsCalendar3/>
            <p className="title-font font-medium text-sm text-gray-400">30 days ago</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default CareerJob;