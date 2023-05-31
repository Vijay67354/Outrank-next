import React from "react";
import Footer from "../components/common/Footer";
 /*import Featured from "../components/seo/Featured";*/
import Header from "../components/common/Header";
import FeatureLeft from "../components/seo/FeatureLeft";
import FeatureRight from "../components/seo/FeatureRight";
import ServiceSlide from "../components/common/ServiceSlide";
import Faq from "../components/common/Faq";
import BannerCommon from '../components/common/BannerCommon'


const SocialMedia = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Header/>
      {/* <OurTeam /> */}
    
      <BannerCommon
      bgimg="assets/images/seo-18.png"
      title="Pick your audience from social media..."
      pera="Are you searching for the right platform to promote your business? Then try social media marketing as the channel for generating leads and sales."
 
      />
     {/* <Featured/> */}
      <FeatureLeft
      title="FACEBOOK MARKETING"
      peraOne="Facebook Marketing has proven itself over the years as one of the very effective means of digital advertisements. It grabs the attention of millions of users at the same time in a cost-effective manner. Plus, it requires some simple steps to publish your Facebook advertisement and then the official team will run an authentication test before making it live."
      peraTwo="Main features,"
      peraThree="It generates more traffic to the website."
      peraFour="It spreads Brand awareness." 
      peraFive="It builds loyalty among the audience."
       peraSix="Local businesses should capture local audiences."
      peraSeven="Non-profit organizations can also spread awareness about their campaigns and movements.
      "
      image={"assets/images/facebook-image.jpg"} 
      btn="Get Free Quote"
      />
      <FeatureRight
      imageOne="assets/images/instagram.jpg"
      imageTwo="assets/images/instagram-img1.jpg"
      title="INSTAGRAM LEADS"
      peraOne="Instagram has become a very handy and renowned platform for all age groups and has been a good marketing source. It has become a platform for many small businesses and the direct touch platform between consumers and businesses. The audience feels that Instagram marketing helps in promoting formally and informally to your audience. Moreover, it offers features like ads, short reels, videos, pictures, live sessions, and influencers on board."
      btn="Book A Free Strategy"
      />

      <FeatureLeft
      title="LINKEDIN FOR B2B MARKETING"
     /* sub="Don’t fall for the hype." */
      peraOne="LinkedIn is a networking platform for professionals, providing a single connecting media for companies and professionals. It is the world's largest professional network channel, and your business can definitely use it to promote among other businesses."
      peraTwo="Australian businesses can add a new dimension to their digital presence by incorporating professional social sites. LinkedIn advertising is the most effective social media platform for lead generation in B2B industries and is your laneway for building long-term professional relationships."
      image={"assets/images/youtube-banner.jpg"} 
      btn="Get Free Quote"
      />
      <FeatureRight
      imageOne="assets/images/youtube.jpg"
      imageTwo="assets/images/youtube2.jpg"
      title="
      YOUTUBE CAMPAIGNS"
      peraOne="Audio-visual media has been a great source of entertainment and information for a huge audience. It is expanding its reach over time, and youtube campaigns have become a trend."
      
      peraTwo="If you want to know more about the benefits, then answer one question: whether you will watch a video with audio or a post? The audio-video content has more impact on the audience than the other forms of media."
      btn="Get A Free Quote"
      />
      { <ServiceSlide/> }
      
      <div className="flex justify-center items-center flex-col space-y-4">
      <div className='lg:text-5xl text-3xl text-[#070b19] w-[90%] text-center font-bold pt-8'>GOOGLE ADS FAQS</div>
          {/* <p className="text-gray-400 max-w-5xl text-center">Our in-house technicians design custom SEO services inline with your goals and your organisation’s growth. So, whether you want to unlock new pools of worldwide customers or enhance your local online presence, we focus on services relevant to you.</p> */}
        </div>
      <div className="grid grid-cols-2 container-outrank py-16">
      {/* faq left */}
      <div className="text-center border-r-2 border-gray-400 space-y-2">
      <Faq
      title="How is Social Media Marketing different from Google Ads?" 
      pera="Social Media Marketing and Google ads are both ways to highlight the business profile and lead more traffic to your website. They both build brand awareness, but the difference is their media."
      pera1="Google ads are presented over the google search engine, whereas social media marketing is done over social media platforms. Google ads are always paid, and SMM has some unpaid options too. SMM is more trustworthy and gains more attention than Google Ads."
      />
      <Faq
      title="What makes Outrank the best choice for Social Media Marketing in Australia?" 
      pera="We have a team with the perfect balance of experienced and freshers to accomplish the goal. Together, they explore new trends and strategies to build a SMM modal based on their past experiences and successes."
     pera1="At Outrank, our digital marketers stand out from others as we don’t only have the experience to help you outrank but fresh brains who are ready to take calculated risks. "
     />
      <Faq
      title="Why is Digital Marketing in Melbourne essential?" 
      pera="The competition in the market has become broader in several aspects, and online media is one of the major key factors. It's been observed over the years that the audience is shifting towards the new age media to reach the audience and grab their attention to one’s services or products to highlight themselves over the online media."
      pera1="Therefore, Digital Marketing in Melbourne is at its peak with a huge demand and supplier list. Outrank is one of the trusted digital marketing agencies.
      "
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
      {/* faq right */}
      <div className="text-center space-y-2">
      <Faq
      title="Who is the SEO team of Outrank?" 
      pera="The SEO team at Outrank is full of brilliant brains with a great sense of marketing over the internet. They are skilled in handling all sized websites and applications with prominent skills.
      "
      pera1="All of our team members have different years of experience and work in a team to cover every aspect of the project before beginning to figure out the perfect road map for any business's digital marketing."
      />
      <Faq
      title="What's the RoI?" 
      pera="We don’t make promises on results as every business is different. We can however provide you with estimations based off our current clients – it’s very likely we’ve worked with a business just like yours!"
      />
      <Faq
      title="Why is social media better than traditional advertising?" 
      pera="While traditional advertising still has a place in some businesses’ marketing strategies, social media marketing is a must. Social media has remarkable capabilities to accurately segment your audience, meaning that you can focus your efforts on the relevant people. You don’t need to wait patiently, hoping that your target audience will stumble across your ads, you can go straight to them. "
      pera1="Social media marketing is also a lot cheaper than traditional marketing and gives you much more bang for your buck. Traditional ads reach a small percentage of your audience and cost a lot of money to create. "
      pera2="With social media, you can spend less time worrying about your ad budget and more time improving your business."
      />
    
      </div>
      
      </div>
      <Footer />
    </>
  );
};

export default SocialMedia;