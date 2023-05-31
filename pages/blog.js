import React from "react";
import BannerCommon from "../components/common/BannerCommon";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import { BlogCard } from "../components/insight/BlogCard";

const blog = () => {
  return (
    <div>
      <Header />
      <BannerCommon
        bgimg="assets/images/autoation.jpg"
        title=" THE LATEST NEWS"
        pera="Ambitious? Yes. Relentless? Yes. The best growth partner you'll ever have? Absolutely. Book a FREE 30-minute strategy session with an marketer to find out for yourself."
      />

      <section className="text-gray-600  body-font text-center">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 tex-center">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <span className="title-font font-medium text-3xl text-black">
                  FACEBOOK AD TRENDS FOR 2022
                </span>
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 className="text-red-600 text-lg title-font font-medium mb-3 text-left">
                    ROBERT TADROS
                    <br />
                    11/06/2022
                  </h2>
                </div>

                <div className="flex-grow">
                  <p className="font-serif    text-[#18234c] mb-3  text-[18px]  mr-4.5">
                    With almost 3 billion active users on Facebook, the social
                    media platform boasts one of the largest and most diverse
                    audiences on the internet. So, it goes without saying that
                    if you’re not tapping into even a fraction of that audience,
                    then you’re missing out on a huge marketing opportunity. One
                    challenge that every marketer.
                  </p>
                  <a className="mt-3 text-red-600 inline-flex items-center float-right px-4 py-4 text-[22px]">
                    Read More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="md:px-4 grid lg:grid-cols-3">
        <BlogCard />
      </div>

      <Footer />
    </div>
  );
};

export default blog;