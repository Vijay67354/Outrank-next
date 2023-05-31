import React from "react";
import Footer from "../components/common/Footer";
import Featured from "../components/seo/Featured";
import Header from "../components/common/Header";
import FeatureLeft from "../components/seo/FeatureLeft";
import FeatureRight from "../components/seo/FeatureRight";
import ServiceSlide from "../components/common/ServiceSlide";
import Faq from "../components/common/Faq";
import BannerCommon from '../components/common/BannerCommon'
import PageTitle from "../components/common/PageTitle";
import GoogleadsSlider from "../components/WhatWeDo.js/slider/GoogleadsSlider";


const Googleads = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      {/* <OurTeam /> */}

      <BannerCommon
        bgimg="assets/images/bannerseo-5.jpg"
        title="Divert the right traffic that fits for conversion"
        pera="Google Ads digital marketing campaign effectively distributes your ads among the target audience and lets you redirect the targeted audience towards desired actions and engage them throughout. "

      />
      <br />
      <PageTitle title="Run Super Fast And Successful Google Ads" sub="Double your traffic and sales" />
      <FeatureLeft
        title="Are you looking for more actionable visitors?"

        peraOne="Google ads are targeted online ad campaigns that work on keyword searches. Therefore it reaches the person looking for your keyword services and products. It runs in any form like text, video, image, or a combination to engage the audience with your Google Ads and take them to the final action button. The digital marketing company in Melbourne attaches a link/URL of the business's landing page to Google Ads for desired action and conversion."
        peraTwo="Google advertising is famously known for its budget-friendly and ranking-based arrangement in Digital marketing. Here, the business pays only for the traffic redirected from the Google Ads and can reach more users simultaneously without running unpaid SEO campaigns. Moreover, Google Ads are ranked based on relevancy and quality, leading the best ad to Outrank the rest."
        image={"assets/images/seo-leads.jpg"}
        btn="Get Free Quote"
      />
      <FeatureRight
        imageOne="assets/images/seo-image.png"
        imageTwo="assets/images/seo12.jpg"
        title="What does an Ad Campaign bring to your table?"
        peraOne="It generates more than expectations."
        peraTwo="Every dollar you spend on a Google Ad campaign is worth 50% or even less to your benefits from it. The better Google Ad you run, the more your spread and the more sales/business you generate. You better start building your ad campaign to Outrank in the digital competition."
        btn="Book A Free Strategy"
      />
      <FeatureLeft
        title="Choose the best to win the rest"
        /* sub="Don’t fall for the hype." */
        peraOne="There are hundreds of digital marketing companies in Australia, and they all are doing great jobs in their fields. But the business needs to find one that works closely with similar approaches in the business market. The close connection between the client and service provider leads to the creation of creative, innovative, relevant, and valuable digital marketing campaigns that further deliver brand value."
        image={"assets/images/seo-33.png"}
        btn="Get A Free Quote"
      />
      {/* <FeatureRight
      imageOne="assets/images/images-seo.png"
      imageTwo="assets/images/images-seo-2.png"
      title="what is seo marketing"
      peraOne="Search Engine Optimisation – or SEO, as it’s known in the business – is exactly what it sounds like. It’s the use of practices that are designed to optimise the way your website appears in search engine results pages.We are strategists, designers and developers. Innovators and problem
      solvers. Small enough to be simple and quick, but big enough to
      deliver the scope you want at the pace you need. Small enough to be
      simple and quick, but big enough to deliver the scope you want at
      the pace you need."
      
      peraTwo="We are strategists, designers and developers. Innovators and problem
      solvers. Small enough to be simple and quick."
      /> */}
      <GoogleadsSlider />

      <div className="flex justify-center items-center flex-col space-y-4">
        <div className='lg:text-5xl text-3xl text-[#070b19] w-[90%] text-center font-bold pt-8'>GOOGLE ADS FAQS</div>
        {/* <p className="text-gray-400 max-w-5xl text-center">Our in-house technicians design custom SEO services inline with your goals and your organisation’s growth. So, whether you want to unlock new pools of worldwide customers or enhance your local online presence, we focus on services relevant to you.</p> */}
      </div>
      <div className="grid grid-cols-2 container-outrank py-16">
        {/* faq left */}
        <div className="text-center border-r-2 border-gray-400 space-y-2">
          <Faq
            title="How do Google Ads work?"
            pera="Google ads work similarly to SEO, i.e. they work on the keywords. The more relevant keywords you use and the better your advertisement is optimized, The better it will perform.  "
            pera1="It works based on a user's searches in a whole day or month. For example, suppose the user is searching for a hoodie on another ecommerce site, and you are selling the same hoodie or anything similar to the hoodie. In that case, your google ad will come to their screen as they are your potential customers. 
            According to the budget one must set a budget, as Google ads open up several options and close down many.
             "
          />
          <Faq
            title="
            What makes Outrank the best choice for Google Ads in Australia?
            "
            pera="We have a team with the perfect balance of experienced and freshers to accomplish the goal. Together, they explore new trends and strategies to build a Google Ads modal based on their past experiences and successes."
            pera1="At Outrank, our digital marketers stand out from others as we don’t only have the experience to help you outrank but fresh brains who are ready to take calculated risks. " />
          <Faq
            title="Why is Digital Marketing in Melbourne essential?"
            pera="The competition in the market has become broader in several aspects, and online media is one of the major key factors. It's been observed over the years that the audience is shifting towards the new age media to reach the audience and grab their attention to one’s services or products to highlight themselves over the online media.
      "
            pera1='Therefore, Digital Marketing in Melbourne is at its peak with a huge demand and supplier list. Outrank is one of the trusted digital marketing agencies.            '
          />

        </div>
        {/* faq right */}
        <div className="text-center space-y-2">
          <Faq
            title="Why should you consider hiring a Digital Marketing Agency?"
            pera="The demand for digital marketing agencies is higher than ever, as with the COVID waves, the market has realised the potential of digital marketing in the world. Today, most businesses are available on the internet via different means and looking forward to being the next big label in their fields.
      "
            pera1="Digital marketing agencies in Australia have become a huge help in accomplishing goals and reaching the target audience. They have full-fledged plans built as per your business’s digital marketing requirements."
          />
          <Faq
            title="How is the Budget decided in Google Ads?"
            pera="While adding the Google Ad, there will be several options to check depending upon your requirements from the advertisements. For example, if you are looking forward to advertising your ad worldwide, the Budget will vary compared to the Budget for Google ads in Australia."
            pera1="The Budget of Google Ads also depends on the location, number of locations, Duration, etc."
          />
          <Faq
            title="What are the services provided by Outrank?"
            pera="Outrank is a digital marketing company in Melbourne that covers all digital marketing services globally. We have a team of expert digital marketers and sub-teams consisting of masters of specific fields/services of digital marketing."
            pera1="Our services are, "
            pera2=" 1.SEO"
            pera3=" 2.Content marketing"
            pera4=" 3.Email marketing"
            pera5=" 4.Google Ads"
            pera6="5.CRM"
            pera7="6.Marketing automation"
            pera8="7.Reputation management "
            pera9="8.UX services"
            pera10="9.Social media marketing "
            pera11="10.Lead generation"
          />

        </div>

      </div>
      <Footer />
    </>
  );
};

export default Googleads;