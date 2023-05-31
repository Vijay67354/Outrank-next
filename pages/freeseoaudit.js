import React from "react";
import Footer from "../components/common/Footer";
import Featured from "../components/seo/Featured";
import Header from "../components/common/Header";
import FeatureLeft from "../components/seo/FeatureLeft";
import FeatureRight from "../components/seo/FeatureRight";
import ServiceSlide from "../components/common/ServiceSlide";
import Faq from "../components/common/Faq";
import BannerCommon from "../components/common/BannerCommon";
import TextBoth from "../components/WhatWeDo.js/TextBoth";

const FreeseoAudit = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      {/* <OurTeam /> */}

      <BannerCommon
        bgimg="assets/images/seo-banner1.png"
        title="Beginning anything new is harder than continuing with the traditional one..."
        pera="the ambition to build your business into a brand can’t stick with it. Digital Marketing is the solution, and the free audit helps you find more.        "
      />

      <section className="py-20 bg-stone-100 my-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <div className="px-4 md:mr-6 space-y-12">
            <h1 className="text-6xl pr-6  font-bold text-black">
              Report Featured
            </h1>
            <ul>
              <li className="text-justify text-base font-medium text-gray-600">
                A review of site’s current usability and SEO
              </li>

              <li className="text-justify text-base font-medium text-gray-600">We help you get the most convenient report based on the free SEO audit to guide you through the requirements, planning, and involvement of the Digital marketing agency. It will convey all the complex terms in simple words as we know that only we are the field experts. </li>
              <li className="text-justify text-base font-medium text-gray-600">Outrank has taken the initiative to be the partner of several businesses as their digital marketing virtuosos. The report is well organized under the title, heading, paragraph, table, and more varied sections.</li>
            </ul>


          </div>
          <div className=" pl-2">
            <div className=" bg-[#eb305c] transform -translate-x-7 relative h-60"></div>
            <div className="transform md:rounded-md bg-white rotate-3 scale-110 translate-x-5 md:shadow-2xl mr-12 -mt-44 space-y-2 ">
              <img src="assets/images/image-banner4.jpg" />
            </div>

          </div>
        </div>




      </section>

      <div className="pb-24">
        <Featured />
      </div>


      <TextBoth
        title=""
        peraOne="Over 85% of the population uses the internet as their source of information and access to several resources. Over 75% of online users never go beyond page 1 of the search engine result page. "
        peraTwo="Digital marketing of your business is equally important to the presence of the business over the internet. The business's presence in the new media is useless if it cannot grab the audience's attention. SEO finds the perfect way to engage the audience with your website/business and makes the viewers generate more traffic and sales. "
        peraFour="Our expert team runs several audits to determine the perfect strategy required to attain the peak and utilize digital media wholly for the growth of their businesses. "
        peraFive="Free SEO Audit is our gift or initiative for the people still stuck with second thoughts on the beginning of the SEO. It will generate a report based on the audit to deliver an understanding of the purpose and result of the whole process. It will also guide you in the further process."
      />


      {/* <FeatureRight
      imageOne="assets/images/social-media-images.png" 
      imageTwo="https://img.freepik.com/free-photo/influencer-posting-social-media_23-2149194122.jpg?t=st=1658475215~exp=1658475815~hmac=8bd236abbf460867ef79e8fe655b34ee384c54d38939d1a0a4c2259b62b27c30&w=740"
      title="INSTAGRAM LEADS"
      peraOne="Everyone and their dog is on Instagram. While you probably don’t want to market to Siberian huskies, you may want to direct your brand to the 9 million monthly active users in Australia through the power of Instagram advertising."
      peraTwo="In 8 short years, Instagram has gone from being a place for filtered, pretty photos to a platform for businesses to humanise their content and direct their target audience to their website. Insta-success."
  /> */}
      {/* <FeatureLeft
      title="LINKEDIN FOR B2B MARKETING"
    
      peraOne="LinkedIn is the networking event you can attend without leaving your chair. It’s the world’s largest professional network you can use to rub shoulders with the 4 out of 5 Australian professionals that move in that circle.."
      peraTwo="Make LinkedIn a part of your social media management. Australia businesses can add a new dimension to their digital presence when they incorporate professional social sites. LinkedIn advertising is the most effective social media platform for lead generation in B2B industries and is your laneway to building long-term professional relationships."
      image={"https://idigdigital.com/wp-content/uploads/2020/04/greg-bulla-auITmXWF3Qw-unsplash.jpg"} 
      />
      <FeatureRight
      imageOne="assets/images/youtube-campaigns.jpg"
      imageTwo="assets/images/images.youtube.jpg"
      title="
      YOUTUBE CAMPAIGNS"
      peraOne="If we told you about the benefits of YouTube marketing in a video format, you’d probably pay more attention. So we’ll keep it short. Online video traffic accounts for around 80% of all consumer traffic.."
      
      peraTwo="Press play on new ways to engage consumers with a nifty YouTube campaign. Reach more people in more places and show more of what your business can offer.."
      />
{ <ServiceSlide/> } */}

      <div className="flex justify-center items-center flex-col space-y-4">
        <div className="lg:text-5xl text-3xl text-[#070b19] w-[90%] text-center font-bold pt-8">
          GOOGLE ADS FAQS
        </div>
        {/* <p className="text-gray-400 max-w-5xl text-center">Our in-house technicians design custom SEO services inline with your goals and your organisation’s growth. So, whether you want to unlock new pools of worldwide customers or enhance your local online presence, we focus on services relevant to you.</p> */}
      </div>
      <div className="grid grid-cols-2 container-outrank py-16">
        {/* faq left */}
        <div className="text-center border-r-2 border-gray-400 space-y-2">
          <Faq
            title="What makes Outrank the best choice for SEO in Australia?"
            pera="We have a team with the perfect balance of experienced and freshers to accomplish the goal. Together, they explore new trends and strategies to build an SEO modal based on their past experiences and successes."
            pera1="At Outrank, our digital marketers stand out from others as we don’t only have the experience to help you outrank but fresh brains who are ready to take calculated risks. "
          />
          <Faq
            title="How SEO helps you Outrank in the market?"
            pera="SEO is a form of inorganic and unpaid marketing that builds more audience trust. It keeps the businesses up in the eyes of online users without making them think this is a smart source of advertisement."
          />
          <Faq
            title="Why is Digital Marketing in Melbourne essential?"
            pera="The competition in the market has become broader in several aspects, and online media is one of the major key factors. Its been observed over the years that the audience is shifting towards the new age media to reach the audience and grab their attention to one’s services or products to highlight themselves over the online media."
            pera1="Therefore, Digital Marketing in Melbourne is at its peak with a huge demand and supplier list. Outrank is one of the trusted digital marketing agencies."
          />
          <Faq
            title="How will free SEO audit work?"
            pera="In a free SEO Audit of your website, our expert team will run a thorough analysis of your website to generate a report based on the same. 
            The SEO audit report will be represented to you for a smooth understanding. Plus, it will be divided under the following headings, Titles
            1.Table of content
            2.Headings
            3.Paragraphs
            4.Tables
            5.Graphs
            6.Conclusion
            7.Requirement
            "
          />
        </div>
        {/* faq right */}
        <div className="text-center space-y-2">
          <Faq
            title="Who is the SEO team of Outrank?"
            pera="The SEO team at Outrank is full of brilliant brains with a great sense of marketing over the internet. They are skilled in handling all sized websites and applications with prominent skills."
            pera1="All of our team members have different years of experience and work in a team to cover every aspect of the project before beginning to figure out the perfect road map for any business's digital marketing."
          />
          <Faq
            title="How do keywords work in SEO?"
            pera="All the search engine operations are based on the keywords one types and use in their search and content. These keywords can be both short and long, depending on the competition and requirements of your business’s digital marketing strategy."
            pera1="Outrank is a digital marketing agency in Australia with a team of brilliant digital marketers. They keep exploring the usage and competitive opportunities of the keywords to build proficient keywords-based data."
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
          <Faq
            title="Why should you consider hiring a Digital Marketing Agency?"
            pera="The demand for digital marketing agencies is higher than ever, as with the COVID waves, the market has realised the potential of digital marketing in the world. Today, most businesses are available on the internet via different means and looking forward to being the next big label in their fields."
            pera1="Digital marketing agencies in Australia have become a huge help in accomplishing goals and reaching the target audience. They have full-fledged plans built as per your business’s digital marketing requirements."
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FreeseoAudit;