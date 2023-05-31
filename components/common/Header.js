import React, { useState } from "react";
import { HiCursorClick } from "react-icons/hi";
import { SiConvertio, SiGoogleads } from "react-icons/si";
import { FaChartLine, FaRegEdit, FaRobot } from "react-icons/fa";
import { AiOutlineTeam, AiTwotoneMail } from "react-icons/ai";
import { RiSearch2Fill } from "react-icons/ri";
import { TbSocial } from "react-icons/tb";
import { BsFillPersonPlusFill, BsSpeedometer2 } from "react-icons/bs";
import { RiPagesFill, RiPageSeparator } from "react-icons/ri";
import { GrSystem } from "react-icons/gr";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

function Header() {
  function shownav() {
    document.querySelector(".response").style.left = "0";

    document.querySelector(".barline").style.display = "none";

    document.querySelector(".closeline").style.display = "block";
  }

  function hidenav() {
    document.querySelector(".response").style.left = "-100%";

    document.querySelector(".barline").style.display = "block";

    document.querySelector(".closeline").style.display = "none";
  }

  const [hide, setHide] = useState(true);
  //const addclassName=()=>{
  //    var element = document.getElementsByclassName(".exo-menu");
  //    element.classNameList.toggle("display");
  // }
  return (
    <>
      <div className="exo-menu-gagan flex justify-between md:justify-around items-center z-50 h-[100px] w-[100%]">
        <div>
          <p className="text-3xl text-white font-bold cursor-pointer pl-4 md:pl-0">
            <Link href="/">OUTRANK</Link>{" "}
          </p>
        </div>
        <ul className="exo-menu response">
          <li className="drop-down">
            <a className="cursor-default">WHO WE ARE</a>

            <ul className="drop-down-ul animated fadeIn">
              <li>
                <Link href="/careers">
                  <a href="#">Careers</a>
                </Link>
              </li>
              <li>
                <Link href="/whoweare">
                  <a href="#">About Us</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="drop-down ">
            <a className="cursor-default">WHAT WE DO</a>

            <ul className="drop-down-ul animated fadeIn z-10">
              <li>
                <Link href="/whatwedo">
                  <a href="#" className="space-x-2">
                    <RiPagesFill />
                    <span> Our Work</span>
                  </a>
                </Link>
              </li>
              <li className="flyout-right">
                <a href="#" className="space-x-2">
                  <HiCursorClick />
                  <span>Generate More Traffic</span>
                </a>
                <ul className="animated fadeIn">
                  <div className=" w-30 md:w-96 bg-white">
                    <h2 className="px-4">
                      <span className="inline-block w-full text-lg font-semibold py-2 border-b-2 border-red-500">
                        Genrate More Traffic
                      </span>
                    </h2>
                    <div className="grid md:grid-cols-2 p-2 grid-cols-1  divide-x-[1px]">
                      <div className=" divide-y-[1px]">
                        <li>
                          <Link href="/seo">
                            <a className="ank flex items-center p-4 gap-2">
                              <RiSearch2Fill className="animate-bounce-slow w-6 h-6" />
                              Seo
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/googleads">
                            <a className="ank flex items-center p-4 gap-2">
                              <SiGoogleads className="animate-bounce-slow w-6 h-6" />
                              Google ADS
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/socialmedia">
                            <a className="ank flex items-center p-4 gap-2">
                              <TbSocial className="animate-bounce-slow w-6 h-6" />
                              Social Media
                            </a>
                          </Link>
                        </li>
                      </div>
                      <div className=" divide-y-[1px]">
                        <li>
                          <Link href="/freeseoaudit">
                            <a className="ank flex items-center p-4 gap-2">
                              <BsSpeedometer2 className="animate-bounce-slow w-6 h-6" />
                              Free Seo Audit
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/contentwriting">
                            <a className="ank flex items-center p-4 gap-2">
                              <FaRegEdit className="animate-bounce-slow w-6 h-6" />
                              Content Writing
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/leadgeneration">
                            <a className="ank flex items-center p-4 gap-2">
                              <BsFillPersonPlusFill className="animate-bounce-slow w-6 h-6" />
                              Lead  Generation
                            </a>
                          </Link>
                        </li>
                      </div>
                    </div>
                  </div>
                </ul>
                {/* <ul className="animated fadeIn">
                  <li>
                    <Link href="/seo">
                      <a href="#">Seo</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/googleads">
                      <a href="#">Google Ads</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/socialmedia">
                      <a href="#">Social Media</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/freeseoaudit">
                      <a href="#">Free Seo Audit</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contentwriting">
                      <a href="#">Content Writing</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/leadgeneration">
                      <a href="#">Lead Gereration</a>
                    </Link>
                  </li>
                </ul> */}
              </li>

              <li className="flyout-right">
                <a href="#" className="space-x-2">
                  <SiConvertio />
                  <span>Convert More Leads & Sales</span>
                </a>
                <ul className="animated fadeIn">
                  <div className="w-30 md:w-96 bg-white">
                    <h2 className="px-4">
                      <span className="inline-block w-full text-lg font-semibold py-2 border-b-2 border-red-500">
                        Convert More Leads & Sales
                      </span>
                    </h2>
                    <div className="p-2 ">
                      <div className=" md:flex-col items-center divide-y-[1px] md:divide-y-[0px] md:divide-x-[1px]">
                        <li>
                          <Link href="/cro">
                            <a className="ank flex items-center p-4 gap-2">
                              <BsSpeedometer2 className="animate-bounce-slow w-6 h-6" />
                              CRO
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/landingpage">
                            <a className="ank flex items-center p-4 gap-2">
                              <RiPagesFill className="animate-bounce-slow w-6 h-6" />
                              Landing Pages
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/uxservice">
                            <a className="ank flex items-center p-4 gap-2">
                              <RiPageSeparator className="animate-bounce-slow w-6 h-6" />
                              UX Services
                            </a>
                          </Link>
                        </li>
                      </div>
                    </div>
                  </div>
                </ul>
                {/* <ul className="animated fadeIn">
                  <li>
                    <Link href="/cro">
                      <a href="cro">CRO</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/landingpage">
                    <a href="landingpage">Landing Pages</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/uxservice">
                    <a href="uxservice">UX Services</a>
                    </Link>
                  </li>
                </ul> */}
              </li>

              <li className="flyout-right">
                <a href="#" className="space-x-2">
                  <FaChartLine />
                  <span>Retain & Grow</span>
                </a>
                <ul className="animated fadeIn">
                  <div className=" w-30 md:w-100 bg-white">
                    <h2 className="px-4">
                      <span className="inline-block w-full text-lg font-semibold py-2 border-b-2 border-red-500">
                        Retain & Grow
                      </span>
                    </h2>
                    <div className="p-2 ">
                      <div className=" md:flex items-center divide-y-[1px] md:divide-y-[0px] md:divide-x-[1px]">
                        <li>
                          <Link href="/crm">
                            <a className="ank flex items-center p-4 gap-2">
                              <GrSystem className="animate-bounce-slow w-6 h-6" />
                              CRM
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/marketingautomation">
                            <a className="ank flex items-center p-4 gap-2">
                              <FaRobot className="animate-bounce-slow w-10 h-10" />
                              Marketing Automation
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/emailmarketing">
                            <a className="ank flex items-center p-4 gap-2">
                              <AiTwotoneMail className="animate-bounce-slow w-8 h-8" />
                              Email Marketing
                            </a>
                          </Link>
                        </li>
                      </div>
                    </div>
                  </div>
                </ul>
                {/* <ul className="animated fadeIn">
                  <li>
                    <Link href="/crm">
                      <a href="#">CRM</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/marketingautomation">
                      <a href="#">Marketing Automation</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/emailmarketing">
                      <a href="#">Email marketing</a>
                    </Link>
                  </li>
                </ul> */}
              </li>
              <li className="flyout-right">
                <a href="#" className="space-x-2">
                  <AiOutlineTeam />
                  <span>Delight More Customers</span>
                </a>
                <ul className="animated fadeIn">
                  <div className="w-96 bg-white">
                    <h2 className="px-4">
                      <span className="inline-block w-full text-lg font-semibold py-2 border-b-2 border-red-500">
                        Delight More Customers
                      </span>
                    </h2>
                    <div className="p-2 ">
                      <div className="flex items-center divide-x-[1px]">
                        <li>
                          <Link href="/crm">
                            <a className="ank flex items-center p-4 gap-2">
                              <GrSystem className="animate-bounce-slow w-6 h-6" />
                              CRM
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/reputationsystem">
                            <a className="ank flex items-center p-4 gap-2">
                              <SiGoogleads className="animate-bounce-slow w-6 h-6" />
                              Reputation Managment
                            </a>
                          </Link>
                        </li>
                      </div>
                    </div>
                  </div>
                </ul>
                {/* <ul className="animated fadeIn lg:-top-12">
                  <li>
                    <Link href="/crm">
                      <a href="#">CRM</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/reputationsystem">
                      <a href="#">Reputation Managment</a>
                    </Link>
                  </li>
                </ul> */}
              </li>
            </ul>
          </li>
          <li className="case_studies">
            <a href="#">CASE STUDIES</a>
          </li>
          <li className="drop-down">
            <a className="cursor-default"> INSIGHTS</a>
            <ul className="drop-down-ul animated fadeIn">
              <li>
                <Link href="blog">
                  <a href="#">Blog</a>
                </Link>
              </li>
              <li>
                <Link href="pressmedia">
                  <a href="#">PressMedia</a>
                </Link>
              </li>
              <li>
                <Link href="podcasts">
                  <a href="#">PODCASTS</a>
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="contact">
              <a href="#">
                <i className="fa fa-envelope"></i> CONTACT
              </a>
            </Link>
          </li>
          {/* <a
            href="#"
            className="toggle-menu md:hidden block"
            onClick={() => setHide(!hide)}
          >
            btn close
          </a> */}
        </ul>
        <div>
          <li className="">
            <Link href="/contact">
              <button
                type="button"
                className=" hidden md:block border propbtn text-md px-8 py-2 rounded-md hover:scale-105 duration-500 text-white transition-all hover:bg-red-300  font-medium"
                style={{ boxShadow: "2px 4px 12px rgba(0, 0, 0, 0.25" }}
              >
                GET PROPOSAL
              </button>
            </Link>

            <div>
              <GiHamburgerMenu
                className="text-white text-3xl mr-8 md:hidden barline"
                onClick={() => shownav()}
              />
            </div>
            <div>
              <CgClose
                className="text-white hidden text-3xl mr-8 md:hidden closeline"
                onClick={() => hidenav()}
              />
            </div>
          </li>
        </div>
      </div>

      <div className=" ">
        <ul className="exo-menu md:hidden block z-50">
          <li className="">
            <a className="active" href="#">
              <i className="fa fa-home"></i> Home
            </a>
          </li>
          <li className="drop-down">
            <a href="#">
              <i className="fa fa-cogs"></i> Flyout
            </a>

            <ul className="drop-down-ul animated fadeIn">
              <li className="flyout-right">
                <a href="#">Flyout Right</a>
                <ul className="animated fadeIn">
                  <li>
                    <a href="#">Mobile</a>
                  </li>
                  <li>
                    <a href="#">Computer</a>
                  </li>
                  <li>
                    <a href="#">Watch</a>
                  </li>
                </ul>
              </li>

              <li className="flyout-left">
                <a href="#">Flyout Left</a>
                <ul className="animated fadeIn">
                  <li>
                    <a href="#">Mobile</a>
                  </li>
                  <li>
                    <a href="#">Computer</a>
                  </li>
                  <li>
                    <a href="#">Watch</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#">No Flyout</a>
              </li>
            </ul>
          </li>
          {/* <li>
            <a href="#">
              <i className="fa fa-cogs"></i> Services
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-briefcase"></i> Portfolio
            </a>
          </li>

          <li>
            <a href="#">
              <i className="fa fa-envelope"></i> Contact
            </a>
            <div className="contact"></div>
          </li> */}
        </ul>
      </div>
    </>
  );
}

export default Header;