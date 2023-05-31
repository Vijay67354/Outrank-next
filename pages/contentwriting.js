import React from "react";
import Footer from "../components/common/Footer";
/*import Featured from "../components/seo/Featured";*/
import Header from "../components/common/Header";
import FeatureLeft from "../components/seo/FeatureLeft";
import FeatureRight from "../components/seo/FeatureRight";
/*import ServiceSlide from "../components/common/ServiceSlide";*/
import Faq from "../components/common/Faq";
import PageTitle from "../components/common/PageTitle";
import Content from "../components/seo/Content";
import ContentSlider from "../components/WhatWeDo.js/slider/ContentSlider";
import BannerCommon from "../components/common/BannerCommon";
import ContactSection from "../components/home/ContactSection";
// import SeoLocation from "../components/common/SeoLocation";

const ContentWriting = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      {/* <OurTeam /> */}

      <BannerCommon
        bgimg="assets/images/seo-banner6.jpg"
        title="  Put meaning to marketing with your words."
        pera="Do you know that words can do half of your ease? In marketing, the words wear the crown as they magnify the impact of graphics and make them inviting."
      />

      <PageTitle
        title="Cover more than SEO with content marketing"
        sub="Outrank your digital marketing performance with SEO-based interactive content"
      />
      {/* <Featured/> */}
      <FeatureLeft
        title="Make your content exclusively SEO-friendly"
        peraOne="Content marketing makes the words play around with your business strategy and make sense."
        peraTwo="Whether your website or advertisement, each sentence is crafted carefully to set your business values and marketing strategy right with the words. The content should be engaging and interactive to bind the reader/audience to your platform for a little longer.         "
        peraThree="In SEO content, the complex part is to put the keywords in a way that they are mixed in the sentence. Like when we are highlighting the word Digital Marketing Company, it should be like it is supposed to be in it. Simply put, the keywords shouldn’t be stuffed forcefully into the sentence as neither the search bots nor the audience likes it."
        perafour="Our content marketers are experienced in putting keywords like they were always supposed to be."
        image={"assets/images/content-image1.jpg"}
        btn="Get Free Quote"
      />
      <FeatureRight
        imageOne="assets/images/seo-content3.jpg"
        imageTwo="assets/images/content-3.jpg"
        title="Content is the window for your audience to you,
        Make it OUTRANKING!"
        peraOne="There are billions of digital marketing agencies, and they all believe in the importance of content. As the content grabs the audience's attention, keep them on it while they learn more about your business offerings."
        peraTwo="SEO content writing gets you up on the search engine page, and fantastic content keeps you in the audience's mind.        "
        btn="Start building the content"
      />

      <FeatureLeft
        title="We do SEO copywriting without Keyword stuffing."
        /* sub="Don’t fall for the hype." */
        peraOne="The search engine keeps on crawling the data present over the internet via keywords. Whether you type a whole sentence in the search or one word, you and your audience will find the way through it."
        peraTwo="Just as the number of keywords in your content gets you closer to your audience's searches, keyword stuffing gets you out of their minds. Our content experts put the keywords in use according to the length of the content and its requirements.        "
        peraThree="And we never compromise on quality and engagement with our readers."
        perafour="We know how to keep readers engaged. Your assigned web content writer will create the layout that reads like a dream. Through eye-catching headings and a structure that follows a typical user’s eye tracking, we keep your visitors around."
        image={"assets/images/content-7.jpg"}
        btn="Get Free Quote"
      />
      <Content
        title="We are an SEO content marketing agency 
        that delivers results that 
        speaks the success"
        peraOne="The primary goal of SEO content marketing is to grab the attention of both the search engine and the audience. At Outrank, we have a team of specialists who have been writing ENGAGING, INTERACTIVE, AND MEANINGFUL SEO content."
        btn="Get A Free Quote"
      />

      <FeatureLeft
        title="Let’s write about your triumph"
        /* sub="Don’t fall for the hype." */
        peraOne="Join hands with the content specialists, their vast experience, and our creative team to build your triumph journey through successful digital marketing strategies. Let’s get you to Outrank the competition and make it all true right through the words."
        image={"assets/images/seo-target.jpg"}
        btn="Get Free Quote"
      />
      {/* <SeoLocation /> */}
      <ContentSlider />
      <ContactSection />
      <Footer />
    </>
  );
};

export default ContentWriting;