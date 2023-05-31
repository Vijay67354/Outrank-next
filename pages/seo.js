import React from "react";
import Footer from "../components/common/Footer";
import Featured from "../components/seo/Featured";
import Header from "../components/common/Header";
import FeatureLeft from "../components/seo/FeatureLeft";
import FeatureRight from "../components/seo/FeatureRight";
import ServiceSlide from "../components/common/ServiceSlide";
import Faq from "../components/common/Faq";
import BannerCommon from "../components/common/BannerCommon";

const Seo = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      {/* <OurTeam /> */}

      <BannerCommon
        bgimg="assets/images/seofront.jpg"
        title="LET THE TRAFFIC BOOM ON YOUR SITE!"
        pera="Do you think that you are losing to your competitors? Are you finding it tough to get relevant attention? Then SEO is your absolute answer. SEO makes your business BLOOM."
      />
      <Featured />
      <FeatureLeft
        title="We are doing SEO the way you promote your business values"
        sub="Never Lose Your Image."
        peraOne="SEO doesn’t simply target several keywords at once to help your business reach the top but helps build the foundation of your business over the new age media. It takes the right audience searching to fulfill the requirements that you serve to your online business channel."
        peraTwo="The SEO experts build a rigid strategic foundation approach to make it possible. It covers various parameters like valuable keyword search, background analysis on your frontline competitors, and proposing new techniques. We understand what your target audience needs and what can make them look into your business more. OUTRANK paints the picture of the businesses for their target audiences."
        image="assets/images/about.jpg"
        btn="Get Started"
      />
      <FeatureRight
        imageOne="assets/images/program2.png"
        imageTwo="assets/images/program3.png"
        title="Are you ready to unwrap and find what’s beneath?"
        peraOne="We have a team of creative, attentive, and exploring SEO specialists in our digital marketing team. They are enthusiastic about working on competitive websites to get the best on the top among the number of hundreds standing in the queue.         "
        peraTwo="Outrank helps unwrap hidden and thorough SEO strategies to build an original one to attain the vision of a business through the target audience. We mostly say every upper layer of glitter has something more attractive waiting inside."
        btn="Book A Free Strategy Session"
      />
      <FeatureLeft
        subTitle="Targeted Traffic"
        title="Higher Conversion Rate"
        peraOne="Being at the top makes no sense if you are not attracting business from it. Any marketing strategy is successful only if it can increase the sales graph. Our SEO strategists build the specified targets to achieve the rank and sale milestones. "
        peraTwo="Our profound digital marketers in Australia don’t only escalate the business's market value but serve the right audience for the business. It generates traffic, trust, and sales altogether."
        image="assets/images/seotraffice.jpg"
        btn="Get Started"
      />
      <FeatureRight
        imageOne="assets/images/seo-marketing.jpg"
        imageTwo="assets/images/go-digital.jpg"
        title="What is SEO marketing?"
        peraOne="Search Engine Optimization is what it sounds like. It optimizes the search engine and its searches. SEO targets various factors of the Search Engine Page, and the specialists construct a strategic map to route the websites over the page."
        peraTwo="It is also recognized as a more trustworthy form of digital marketing, as here, you don’t pay for the ads or don't generate sponsored businesses for direct traffic. SEO sponsors publicity of the New media with the help of keywords and trends. "
        btn="Get A Free Quote"
      />
      <ServiceSlide />
      <div className="flex justify-center items-center flex-col space-y-4 py-12">
        <div className="lg:text-5xl text-3xl text-[#070b19] w-[90%] text-center font-bold pt-8">
          SEARCH ENGINE OPTIMISATION FAQS
        </div>
        {/* <p className="text-gray-400 max-w-5xl text-center">Our in-house technicians design custom SEO services inline with your goals and your organisation’s growth. So, whether you want to unlock new pools of worldwide customers or enhance your local online presence, we focus on services relevant to you.</p> */}
        <div className="grid grid-cols-2 container-outrank py-12">
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
              title="How will SEO help an ecommerce business grow?"
              pera="SEO redirects the audience indirectly towards your products. As humans tend to trust the one that comes first more than the latter, SEO puts you on the top list of SEP."
              pera1="It helps make the ecommerce business the first to be seen by the target audience, raising the chances of conversion."
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
              pera="Outrank is a digital marketing company in Melbourne that covers all digital marketing services globally. We have a team of expert digital marketers and sub-teams consisting of masters of specific fields/services of digital marketing. "
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
      </div>

      <Footer />
    </>
  );
};

export default Seo;