import React from 'react'
import BannerCommon from '../components/common/BannerCommon'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import Connect from '../components/MarketingAutomation/Connect'
import Sliderautomation from '../components/MarketingAutomation/Sliderautomation'
import Faq from "../components/common/Faq";
import PageTitle from '../components/common/PageTitle'
import FeatureLeft from '../components/seo/FeatureLeft'
import FeatureRight from '../components/seo/FeatureRight'
import SliderEmail from '../components/WhatWeDo.js/slider/SliderEmail'


const EmailMarketing = () => {
    return (
        <div>

            <Header />
            <BannerCommon
                bgimg="/assets/images/seo-37.jpg"
                title="Build a planned Email Marketing to achieve and sustain the vision of your business."
            // pera="Ambitious? Yes. Relentless? Yes. The best growth partner you&apos;ll ever have? Absolutely. Book a FREE 30-minute strategy session with an Outrank marketer to find out for yourself."
            />
            <PageTitle title="Stay Connected With Relevancy
"
                sub="Send emails that pitch your audience and help them in connecting" />
            {/* <Connect /> */}
            <FeatureLeft
                title="Send Emails That Are Interactive, Compelling, And Creative"
                peraOne="Connecting with your target audience, public, and customers is how to keep yourself in their minds. It is important to build a strategic relationship with the people and make them feel special with a touch of personalization. Every person likes to stay updated and grab special offers before anyone else. Email Marketing experts at Outrank are utilizing the customer database to construct an effective roadmap for sending personalized and creative content via emails."
                peraTwo="It is a form of one-to-one marketing with the use of Marketing automation tools and data analysts. Businesses can gain sales and returns with compelling, relevant, personalized, and strategic emails. The more one invests in the digital marketing company in Melbourne for Email marketing, the more one attains growth and branding. Outrank leads you to the email boxes of the clients and customers with what they need to hear."
                btn="Get A Free Quote"
                image="assets/images/seon.jpg"
            />
            <FeatureRight
                title="Pull Off ROI With More BRANDING"
                peraOne="Users today are more influenced by the relevancy of any product or service with them. Whether it is a toothbrush or an automobile, if your audience is not related to your business or the email content, there is no conversion and return from them. Our email digital marketing team builds emails that can keep up with the demands and requirements of the target audience and customer databases. "
                peraTwo="When your EDM campaign is backed by real insights and created for your specific audience, your return-on-investment is increased. The email experts at Outrank use an intelligent combination of automation, machine-learning and content created by our human copywriters to ensure your emails are executed efficiently and with the personalisation needed to connect and convert."
                btn="Book A Free Strategy Session"
                imageOne="/assets/images/pexel-1.jpg"
                imageTwo="/assets/images/email2.jpg"
            />
            <FeatureLeft
                title="Delivering Emails That Builds Relations And Brands"
                peraOne="Every business dreams of becoming a brand and spreading trust in its products and services to the audience. The more you stay in touch with your customers, the more you attain their trust and build a strategically strong relationship. The emails you send and your audience receive from your business speak a lot and set the core of your brand value in your audience's minds.            "
                peraTwo="The most important part of one-to-one marketing is the personalization and relevancy of the content. Outrank team is leading the digital marketing campaigns with our custom approach. We send birthday emails, anniversary mails, welcome mails, reminder mails, and many more to grab the audience's attention and make them a part of the happy customer community."
                btn="Get A Free Quote"
                image="/assets/images/pexel-2.jpg"
            />

            <SliderEmail />
            <div className="flex justify-center items-center flex-col space-y-4">

                <p className='italic lg:text-3xl text-[#eb305c] text-md pt-10  text-center'>ANY QUESTIONS</p>
                <div className='lg:text-5xl text-3xl text-[#070b19] w-[90%] text-center font-bold pt-3'>Email Digital Marketing FAQs</div>

                {/* <p className="text-gray-400 max-w-5xl text-center">Our in-house technicians design custom SEO services inline with your goals and your organisation’s growth. So, whether you want to unlock new pools of worldwide customers or enhance your local online presence, we focus on services relevant to you.</p> */}
            </div>
            <div className="grid grid-cols-2 container-outrank py-16">
                {/* faq left */}
                <div className="text-center border-r-2 border-gray-400 space-y-2">
                    <Faq
                        title="Would my service-based company benefit from Digital Marketing?"
                        pera="Yes, we are dealing with several service-based companies which have experienced some exponential results within a short period. Our team is widely recognized for overcoming the challenges of digital presence via our fresh and reasonable approach."
                        pera1="For the service-based company, we work on UX, content marketing, lead generation, and many more to build a robust database for the business. "
                    />
                    <Faq
                        title="Why is Digital Marketing in Melbourne essential?"
                        pera="The competition in the market has become broader in several aspects, and online media is one of the major key factors. It's been observed over the years that the audience is shifting towards the new age media to reach the audience and grab their attention to one’s services or products to highlight themselves over the online media."
                        pera1="Therefore, Digital Marketing in Melbourne is at its peak with a huge demand and supplier list. Outrank is one of the trusted digital marketing agencies."
                    />

                </div>
                {/* faq right */}
                <div className="text-center space-y-2">
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
                        title="What makes Outrank the best choice for SEO in Australia?"
                        pera="We have a team with the perfect balance of experienced and freshers to accomplish the goal. Together, they explore new trends and strategies to build an SEO modal based on their past experiences and successes."
                        pera1="At Outrank, our digital marketers stand out from others as we don’t only have the experience to help you outrank but fresh brains who are ready to take calculated risks.  "
                    />

                </div>

            </div>
            <Footer />
        </div>
    )
}

export default EmailMarketing