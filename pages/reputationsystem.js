import React from "react";
import BannerCommon from "../components/common/BannerCommon";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Connect from "../components/MarketingAutomation/Connect";
import Sliderautomation from "../components/MarketingAutomation/Sliderautomation";
import Faq from "../components/common/Faq";
import PageTitle from "../components/common/PageTitle";
import FeatureLeft from "../components/seo/FeatureLeft";
import FeatureRight from "../components/seo/FeatureRight";

const ReputationSystem = () => {
    return ( <
        div >
        <
        Header / >
        <
        BannerCommon bgimg = "assets/images/seo-37.jpg"
        title = "Online Reputation Management Will Bring Up The Game"
        pera = "The reputation of any business in the market plays an important role as it speaks a lot on their behalf. Build it strong from the core to bring viable growth." /
        >
        <
        PageTitle title = "Result-Oriented Strategy"
        sub = "We are all about better outcomes" /
        > { /* <Connect /> */ } <
        FeatureLeft title = "Stand firm like a tree with online reputation management."
        peraOne = "The audience of your business has a massive list of options, and they can switch from you to any other business anytime. One of the significant factors in choosing a brand or doing the opposite is its brand reputation in the market. The intelligent audience prefers the importance of a business over the quality and benefits as they want to associate themselves with a company that doesn’t only fulfil their requirements but also fits their social status.        "
        peraTwo = "At Outrank, we have brand strategists, PRs, and reputation builders to study and build a guideline for online reputation management digital marketing in Melbourne. It helps you be in the good books of the audience, clients, and investors. "
        btn = "Get A Free Quote"
        image = "assets/images/top.jpg" /
        >
        <
        FeatureRight title = "Build the best online reputation, Create a brand"
        peraOne = "Online reputation is more important than just having an online presence, as it builds the roots of your business. The better it is, the stronger you stand in the market field, and our experts believe that even one single wind can destroy it whole. Outrank has an expert team of brand strategists, data analysts, and PR to construct a firm plan for online reputation management.         "
        peraTwo = "Online reputation sets up goodwill in front of clients, audiences, investors, and more. Our team works closely with your business and in-house team to bring out the best-organized structure of your reputation build-up. We make it simplified and understandable for your group, too, to make the whole process convenient for everyone."
        btn = "Book A Free Strategy Session"
        imageOne = "assets/images/top1.jpg"
        imageTwo = "assets/images/kane.jpg" /
        >
        <
        FeatureLeft title = "Make it happen over all the Online Channels."
        peraOne = "The online channel is vast and has massive opportunities for everyone. Only a few are grabbing the right chances and platforms to build a strong reputation and mark your worthy presence. The most effective way to make an online reputation is to track down the previous strategies, your business values, and your customer’s mindsets. Target the most used digital channel and create creative visuals and content. "
        peraTwo = "Our Outrank team delivers long-term and effective results and a massive approach to target a vast audience over the internet. It attracts both employees and clients towards the company. Start as soon as possible with our SEO audit and reputation management to find the best growth possibilities and channel all the resources to your business."
        btn = "Get A Free Quote"
        image = "assets/images/team16.jpg" /
        >

        <
        Sliderautomation / >
        <
        div className = "flex justify-center items-center flex-col space-y-4" >
        <
        p className = "italic lg:text-3xl text-[#eb305c] text-md pt-10  text-center" >
        ANY QUESTIONS <
        /p> <
        div className = "lg:text-5xl text-3xl text-[#070b19] w-[90%] text-center font-bold pt-3" >
        MARKETING AUTOMATION FAQS <
        /div>

        { /* <p className="text-gray-400 max-w-5xl text-center">Our in-house technicians design custom SEO services inline with your goals and your organisation’s growth. So, whether you want to unlock new pools of worldwide customers or enhance your local online presence, we focus on services relevant to you.</p> */ } <
        /div> <
        div className = "grid grid-cols-2 container-outrank py-16" > { /* faq left */ } <
        div className = "text-center border-r-2 border-gray-400 space-y-2" >
        <
        Faq title = "Would my service-based company benefit from Digital Marketing?"
        pera = "Yes, we are dealing with several service-based companies which have experienced some exponential results within a short period. Our team is widely recognized for overcoming the challenges of digital presence via our fresh and reasonable approach."
        pera1 = "For the service-based company, we work on UX, content marketing, lead generation, and many more to build a robust database for the business. " / >
        <
        Faq title = "Why is Digital Marketing in Melbourne essential?"
        pera = "The competition in the market has become broader in several aspects, and online media is one of the major key factors. It's been observed over the years that the audience is shifting towards the new age media to reach the audience and grab their attention to one’s services or products to highlight themselves over the online media."
        pera1 = "Therefore, Digital Marketing in Melbourne is at its peak with a huge demand and supplier list. Outrank is one of the trusted digital marketing agencies." /
        >
        <
        /div> { /* faq right */ } <
        div className = "text-center space-y-2" >
        <
        Faq title = "What are the services provided by Outrank?"
        pera = "Outrank is a digital marketing company in Melbourne that covers all digital marketing services globally. We have a team of expert digital marketers and sub-teams consisting of masters of specific fields/services of digital marketing. "
        pera1 = "Our services are, "
        pera2 = " 1.SEO"
        pera3 = " 2.Content marketing"
        pera4 = " 3.Email marketing"
        pera5 = " 4.Google Ads"
        pera6 = "5.CRM"
        pera7 = "6.Marketing automation"
        pera8 = "7.Reputation management "
        pera9 = "8.UX services"
        pera10 = "9.Social media marketing "
        pera11 = "10.Lead generation" /
        >
        <
        Faq title = "What makes Outrank the best choice for SEO in Australia?"
        pera = "We have a team with the perfect balance of experienced and freshers to accomplish the goal. Together, they explore new trends and strategies to build an SEO modal based on their past experiences and successes."
        pera1 = "At Outrank, our digital marketers stand out from others as we don’t only have the experience to help you outrank but fresh brains who are ready to take calculated risks. 
        "/> <
        /div> <
        /div> <
        Footer / >
        <
        /div>
    );
};

export default ReputationSystem;