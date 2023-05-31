import React from "react";
import Link from "next/link";

const Footer = () => {  
  return (
  <div className=" bg-[#070b19]">
      <div className="container-outrank">
        <div className="flex flex-col lg:flex-row lg:gap-32 gap-10  w-[100%] text-[#007bff] px-5 lg:px-0 container-reddington py-16">
          <div className="lg:w-[30%] md:w-[60%] ">
            {/* <img src='/assets/images/logo.png' alt='' /> */}
            <p className="text-4xl text-white font-bold">OUTRANK </p>
            <div className="text-xs text-white text-justify leading-relaxed pt-8">
              Outrank is the best digital marketing agency with a team of
              virtuosos in the field. We put our devotaion and excellency when
              we are serving you the perfect tools and Strategies with assured
              result and growth.
            </div>
          </div>
          <div className="grid lg:grid-cols-4 gap-8 justify-start items-start md:grid-cols-2 md:w-[100%] py-8">
            <div className="flex flex-col justify-start items-start gap-4">
              <div className="uppercase text-sm font-semibold text-[#007bff]">
                Menu
              </div>
              <Link href="/whoweare">
                <a className="text-xs text-white uppercase pt-5 hover:text-[#eb305c]">
                  Who we are
                </a>
              </Link>
              <Link href="/careers">
                <a className="text-xs text-white uppercase hover:text-[#eb305c]">
                  Careers
                </a>
              </Link>
              {/* <Link className='text-xs text-white uppercase '>Reviews</Link> */}
              <Link href="/uxservice">
                <a className="text-xs text-white uppercase hover:text-[#eb305c]">
                  UX Services
                </a>
              </Link>

              <Link href="/blog">
                <a className="text-xs text-white uppercase hover:text-[#eb305c]">
                  Blog{" "}
                </a>
              </Link>
              <Link href="/">
                <a className="text-xs text-white uppercase hover:text-[#eb305c]">
                  Contact Us{" "}
                </a>
              </Link>
            </div>
            <div className="flex flex-col justify-start items-start gap-4">
              <div className="uppercase text-sm font-semibold text-[#007bff]">
                Services
              </div>
              {/* <Link href="/seo"><a className='text-xs text-white uppercase hover:text-[#eb305c] pt-5'>SEO </a></Link> */}

              <div className="dropdown inline-block relative pt-4">
                <button className="text-white rounded inline-flex items-center">
                  <span className="mr-1 text-sm">SEO</span>
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                  </svg>
                </button>
                <ul className="dropdown-menu text-sm absolute bg-[#e03960] z-50 space-y-2 py-4 hidden w-52 h-52 overflow-auto rounded divide-y-[1px] text-gray-700 pt-1">
                  <li className="">
                    <Link href="/seo">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        Seo Services
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/ecommerceseo">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        E-Commerce Seo
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/contentwriting">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        Content Writing
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/localseo">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        Local Seo
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/internationalseo">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        International Seo
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/enterpriseseo">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        Enterprise Seo
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/mobileseo">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        Mobile Seo
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/videoseo">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        Video Seo
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/leadgeneration">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        Lead Generation
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/googlepenaltyassessment">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        Google Penalty Removal
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/shopifyseo">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        Shopify SEO
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/magentoseo">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        Magento SEO
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/wordpressseo">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        WordPress SEO
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/bigcommerce">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        BigCommerce SEO
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="dropdown inline-block relative z-40">
                <button className="text-white rounded inline-flex items-center">
                  <span className="mr-1 text-sm">Social Media</span>
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                  </svg>
                </button>
                <ul className="dropdown-menu text-sm absolute bg-[#e03960]  space-y-2 py-4 hidden w-52 h-32 overflow-auto rounded divide-y-[1px] text-gray-700 pt-1">
                  <li className="">
                    <Link href="/socialmediamarketing">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        Social Media Marketing
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/facebookmarketing">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        Facebook Advertising
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/instagrammarketing">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        Instagram Advertising
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/youtubemarketing">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        YouTube Advertising
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="dropdown inline-block relative z-30">
                <button className="text-white rounded inline-flex items-center">
                  <span className="mr-1 text-sm">PPC</span>
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                  </svg>
                </button>
                <ul className="dropdown-menu text-sm absolute bg-[#e03960]  space-y-2 py-4 hidden w-52 h-52 overflow-auto rounded divide-y-[1px] text-gray-700 pt-1">
                  <li className="">
                    <Link href="/ppc">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        PPC
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/googleads">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        Google Ads
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/googleshopping">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                       Google Shopping
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/googleremarketing">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        Google Remarketing
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/googledisplaynetwork">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        Google Display Network
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/microsoftadvertising">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        Microsoft Advertising
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/programmaticadvertising">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        Programmatic Advertising
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/taboolaadvertising">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        Taboola Advertising
                      </a>
                    </Link>

                    <Link href="/melbourne/ppcmelbourne">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        PPC Melbourne
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="dropdown inline-block relative z-20">
                <button className="text-white rounded inline-flex items-center">
                  <span className="mr-1 text-sm">Landing Pages</span>
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                  </svg>
                </button>
                <ul className="dropdown-menu text-sm absolute bg-[#e03960] space-y-2 py-4 hidden w-52 h-16 rounded divide-y-[1px] text-gray-700 pt-1">
                  <li className="">
                    <Link href="/landingpage">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        Landing Pages
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/emailmarketing">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        Email Marketing
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="dropdown inline-block relative z-10">
                <button className="text-white rounded inline-flex items-center">
                  <span className="mr-1 text-sm">CRM & Loyalty</span>
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                  </svg>
                </button>
                <ul className="dropdown-menu text-sm absolute bg-[#e03960] space-y-2 py-4 hidden w-52 h-24  rounded divide-y-[1px] text-gray-700 pt-1">
                  <li className="">
                    <Link href="/marketingautomation">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        Marketing Automation
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/hubspotcrm">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        Hubspot CRM
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/ecommercecrm">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        eCommerce CRM
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

              <Link href="/reputationsystem">
                <a className="text-xs text-white uppercase hover:text-[#eb305c] ">
                  Reputation Management
                </a>
              </Link>
            </div>

            <div className="flex flex-col justify-start items-start gap-4">
              <div className="uppercase text-sm font-semibold text-[#007bff]">
                Location
              </div>
              {/* <Link href="/seo"><a className='text-xs text-white uppercase hover:text-[#eb305c] pt-5'>SEO </a></Link> */}

              <div className="dropdown inline-block relative pt-4">
                <button className="text-white rounded inline-flex items-center">
                  <span className="mr-1 text-sm">Melbourne</span>
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                  </svg>
                </button>
                <ul className="dropdown-menu text-sm absolute bg-[#e03960] z-50 space-y-2 py-4 hidden w-52 h-22 overflow-auto rounded divide-y-[1px] text-gray-700 pt-1">
                  <li className="">
                    <Link href="/melbourne/seomelbourne">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        Seo Melbourne
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/melbourne/ppcmelbourne">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        PPC Melbourne
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/melbourne/socialmediamelbourne">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        Social Media Melbourne
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="dropdown inline-block relative ">
                <button className="text-white rounded inline-flex items-center">
                  <span className="mr-1 text-sm">Sydney</span>
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                  </svg>
                </button>
                <ul className="dropdown-menu text-sm absolute bg-[#e03960] z-50 space-y-2 py-4 hidden w-52 h-22 overflow-auto rounded divide-y-[1px] text-gray-700 pt-1">
                  <li className="">
                    <Link href="/sydney/seosydney">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        Seo Sydney
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/sydney/ppcsydney">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        PPC Sydney
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/sydney/socialmediasydney">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        Social media Sydney
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="dropdown inline-block relative ">
                <button className="text-white rounded inline-flex items-center">
                  <span className="mr-1 text-sm">Brisbane</span>
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                  </svg>
                </button>
                <ul className="dropdown-menu text-sm absolute bg-[#e03960] z-50 space-y-2 py-4 hidden w-52 h-22 overflow-auto rounded divide-y-[1px] text-gray-700 pt-1">
                  <li className="">
                    <Link href="/brisbane/seobrisbane">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        Seo Brisbane
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/brisbane/ppcbrisbane">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        PPC Brisbane
                      </a>
                    </Link>
                  </li>

                  <li className="">
                    <Link href="/brisbane/socialmediabrisbane">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        Social Media Brisbane
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="dropdown inline-block relative z-40">
                <button className="text-white rounded inline-flex items-center">
                  <span className="mr-1 text-sm">Perth</span>
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                  </svg>
                </button>
                <ul className="dropdown-menu text-sm absolute bg-[#e03960] space-y-2 py-4 hidden w-52 h-26 rounded divide-y-[1px] text-gray-700 pt-1">
                  <li className="">
                    <Link href="/perth/seoperth">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        SEO Perth
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/perth/ppcperth">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        PPC Perth
                      </a>
                    </Link>
                  </li>

                  <li className="">
                    <Link href="/perth/socialmediamarketingperth">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        Social Media Marketing Perth
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="dropdown inline-block relative z-20">
                <button className="text-white rounded inline-flex items-center">
                  <span className="mr-1 text-sm">Gold Coast</span>
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                  </svg>
                </button>
                <ul className="dropdown-menu text-sm absolute bg-[#e03960] space-y-2 py-4 hidden w-52 h-22  rounded divide-y-[1px] text-gray-700 pt-1">
                  <li className="">
                    <Link href="/goldcoast/seogoldcoast">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        SEO Gold Coast
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/goldcoast/semgoldcoast">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        PPC Gold Coast
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="dropdown inline-block relative z-10">
                <button className="text-white rounded inline-flex items-center">
                  <span className="mr-1 text-sm">Adelaide</span>
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                  </svg>
                </button>
                <ul className="dropdown-menu text-sm absolute bg-[#e03960] space-y-2 py-4 hidden w-52 h-22  rounded divide-y-[1px] text-gray-700 pt-1">
                  <li className="">
                    <Link href="/adelaide/seoadelaide">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        SEO Adelaide
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="dropdown inline-block relative ">
                <button className="text-white rounded inline-flex items-center">
                  <span className="mr-1 text-sm">Hobart</span>
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                  </svg>
                </button>
                <ul className="dropdown-menu text-sm absolute bg-[#e03960] space-y-2 py-4 hidden w-52 h-22  rounded divide-y-[1px] text-gray-700 pt-1">
                  <li className="">
                    <Link href="/hobart/seohobart">
                      <a className=" hover:underline underline-offset-2 px-4 block whitespace-no-wrap">
                        SEO Hobart
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col justify-start items-start gap-4">
              <div className="uppercase text-sm font-semibold text-[#007bff]">
                Contact Us
              </div>
              <Link href="/">
                <a className="text-xs text-white uppercase pt-5 hover:text-[#eb305c]">
                  +91-4734858637
                </a>
              </Link>
              <div className="text-xs text-white uppercase">
                359, Golf Course Road, Gurugram
              </div>
              <Link href="/">
                <a className="text-xs text-white uppercase hover:text-[#eb305c]">
                  info@bizzeonline.com
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#007bff] w-full h-1"></div>
      <div className="text-xs text-center text-white py-8 ">
        Copyright ©2022 Outrank. All Rights Reserved Copyright
      </div>
    </div>
  );
};

export default Footer;