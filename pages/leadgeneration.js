import React from "react";
import Footer from "../components/common/Footer";
/*import Featured from "../components/seo/Featured";*/
import Header from "../components/common/Header";
import FeatureLeft from "../components/seo/FeatureLeft";
import FeatureRight from "../components/seo/FeatureRight";
/*import ServiceSlide from "../components/common/ServiceSlide";*/
import Faq from "../components/common/Faq";
import BannerCommon from '../components/common/BannerCommon'
/* import Content from "../components/seo/Content"; */
import Lead from "../components/seo/Lead";
import Leadgenerationtitle from "../components/common/Leadgenerationtitle";
import LeadgenerationSlider from "../components/WhatWeDo.js/LeadgenerationSlider";
// import SeoLocation from "../components/common/SeoLocation";
import ContactSection from "../components/home/ContactSection";

const LeadGeneration = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      {/* <OurTeam /> */}

      <BannerCommon
        bgimg="assets/images/seo-marketing5.jpg"
        title="Lead Generation can take your graphs high by converting strangers into customers and promoters"
        pera="We at Outrank have built a vast network of collectivity where we run research and put out of the box ideas into reality to ensure the graphs pointing to infinite possibilities."

      />
      <Leadgenerationtitle />
      {/* <Featured/> */}
      <FeatureLeft
        title="Take lead generation to the next level"

        peraOne="Our team of digital marketers in Australia specializes in generating result-oriented leads to achieve higher customer graphs. The lead generation without end-result is useless and follows a campaign that targets strangers and potential customers to convert them into customers and promoters. ."
        peraTwo="At Outrank, the team is highly motivated to deliver the vast aspects of Digital Marketing towards business growth and success. We design a campaign to achieve the goal, and it is a highly analytical and creative campaign to differentiate your presence and image from your competitors."

        image={"assets/images/inbound-marketing.jpg"}
        btn="Get A Free Quote"
      />
      <FeatureRight
        imageOne="assets/images/social2.jpg"

        imageTwo="assets/images/digital-marketing2.jpg"
        title="Don’t follow the old steps,
        Mark your new footprints
        "
        peraOne="Several Digital Marketing Agencies in Melbourne follow the same old lead generation marketing techniques, and the audience is done with it. But we at Outrank have a team of new, experienced, creative, and venturesome digital marketers. They are ready to explore and build a success-oriented strategy. "
        peraTwo="We keep it simple and uniquely delightful, as converting a stranger into a potential customer and then a customer is a diplomatic task. The audience is smarter than the businesses; thus, we create custom strategies for the clients by keeping every detail in mind. "
        btn="Get Free Quote"
      />

      <FeatureLeft
        title="Drive sales to your ecommerce business"
        /* sub="Don’t fall for the hype." */
        peraOne="There are billions of e-commerce websites selling similar products and targeting similar audiences. To outrank in this digital competition of lead generation, you need to fascinate the audience and let them know how you are there to help them better than the competition. Outrank is a digital marketing agency in Melbourne that follows a different approach towards marketing and lead generation marketing. "
        peraTwo="Our SEO content experts, senior digital marketing experts, creative freshers, and e-mail marketing team have something unique and compelling to serve the marketing purpose right to your core. They go with the value of the ecommerce platform and keep up the pace by trying to run a little ahead of the trend. "
        peraThree="The more you are available for the customers and potential customers, the more they will work for you again. Through paid ads, landing pages, EDMS, high-conversion sites, and other techniques, we successfully stand out as Melbourne's best digital marketing agency.

      ."

        image={"assets/images/ecomerce2.jpg"}
        btn="Book A Free Strategy"
      />
      <Lead


        title="LEAD GENERATING SEO SERVICES."
        peraOne="SEO covers the vast segments of Digital marketing by optimizing the searches over the search engine, and it refines the traffic that visits your website, landing page, ads, and emails. It segregates the audience into massive segments and simplifies lead generation marketing in Melbourne."

        peraTwo="Local Lead Generation SEO"
        peraThree="If you want to restrict your approach at a local level, then local SEO will help you get the audience based on the collective geographical location. "

        perafour="Free SEO Audit"
        perafive="We are currently running free SEO audits for our clients. It will guide you through the SEO process and the strategies you need to follow. "
        btn="Book  Free Strategy"
      />






      <FeatureLeft
        title="Deliver the best shopping experience with
        Lead generation marketing
        "
        /* sub="Don’t fall for the hype." */
        peraOne="We help businesses to embrace digital technology and reach their audience present at any corner of the world. Lead generation is a new way of getting people interested in your business. We are following several techniques to accomplish the objective of converting the target audience into customers and promoters."
        peraTwo="At Outrank, we first gain the audience's attention and engage them with creative styling and content. It further leads to their conversion and booming high sales. Outrank is a digital marketing agency in Melbourne, Australia, with its services at several locations. We have a vast team with a perfect combination of fresh ideas and experienced guidance to provide unique, creative, and satisfactory results."
        peraThree="Improve your conversion rate and place yourself at the forefront of your customers’ thoughts with powerful modern content writing services.."
        perafour="Let us transform your strategy with copy that engages, excites and converts.."
        image={"assets/images/Ecommerce.jpg"}
        btn="Book A Free Strategy"
      />



      {/* <SeoLocation /> */}
      <LeadgenerationSlider />
      <ContactSection />

      <Footer />
    </>
  );
};

export default LeadGeneration;