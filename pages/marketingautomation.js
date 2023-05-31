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


const MarketingAutomation = () => {
    return (
        <div>

            <Header />
            <BannerCommon
                bgimg="assets/images/autoation.jpg"
                title="Marketing automation in digital marketing to lead more sales "
                pera="Mark higher sales with minor overheads with marketing automation tools that deliver streamlined marketing campaigns. Lead the digital marketing campaigns smoothly."
            />
            <PageTitle title="Automation leading to promotion" sub="Expedite your marketing with advanced automation and marketing strategies" />
            {/* <Connect /> */}
            <FeatureLeft
            title="Deepen your roots with automation"
            peraOne="Build strong roots in marketing with automation services and lead result-oriented marketing campaigns before anyone else. The most tragic barrier to any marketing campaign is delivering the wrong message at the wrong time. The audience is vast and likes to be treated as individuals, not as masses who carry an essential role in the business. "
            peraTwo="To make the clients, customers, and people feel important, marketing automation services are the way to make it happen with accuracy and personalization. Automation tools lead to strategic and analytical marketing. It saves time, reduces human errors, and provides better results by audience augmentation. Pick the best digital marketing company in Melbourne to build an Outranking marketing campaign."
            btn="Get A Free Quote"
            image="https://img.freepik.com/free-photo/automation-production-system-operation-precess-concept_53876-138637.jpg?size=626&ext=jpg&ga=GA1.2.1980201078.1658314525"
              />
              <FeatureRight 
              title="Choose to be clever with marketing automation"
              peraOne="With the refined requirements of the market, choose to simplify your marketing strategies and smarten up your game with marketing automation and proven digital marketing techniques. At Outrank, we have partnered with several automation tools to build end-to-end data and sales simplification. It boosts the conversion and retention rate of the customers with consistency. "
               peraTwo="Marketing automation upskills your digital marketing presence by personalizing your reach to the audience through multi-channels. We build innovative marketing strategies based on analytics and creatives to outrank the competition. The more your approach is influential and creative toward the audience, the more you grab their attention and succeed with your goals. Outrank has the most out-of-the-box thinkers on board as digital marketers in Melbourne.
               "
               btn="Book A Free Strategy Session"
               imageOne="https://img.freepik.com/free-photo/medium-shot-people-shaking-hands_23-2149300663.jpg?t=st=1658731736~exp=1658732336~hmac=f71ab6d868276f782c60b7cf8269b105352bd51b9fca3b37b3090ec6c60f5cee&w=360"
               imageTwo="https://img.freepik.com/free-photo/happy-smiling-businessman-wearing-suit-shaking-female-hand_1163-5388.jpg?size=338&ext=jpg&ga=GA1.2.1980201078.1658314525"
               />
               <FeatureLeft
            title="Be a part of result-oriented marketing to Outrank"
            peraOne="Customer data is like a secret book for any business and marketer as it holds insights into their preferences. Outrank has taken the approach of building a personalized and likeable digital marketing campaign for all types of audiences. It is wholly based on the business, and its audience, as the entire purpose of the campaign is to enlighten the audience about the business. "
            peraTwo="Our team starts with a thorough analysis of the client’s business and mass audience to develop an innovative and creative marketing campaign. We have industry-leading digital marketing experts, to drive traffic, engagement, and sales with the best digital marketing campaigns. Outrank focuses on goals and strategies to deliver outstanding results with automation and innovation."
            btn="Get A Free Quote"
            image="https://images.unsplash.com/photo-1520881363902-a0ff4e722963?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
              />
              <FeatureRight 
              title="Change your approach with better results"
              peraOne="Try Outrank to drive result-oriented digital marketing campaigns and high business and life strategies. We have many proven and innovative techniques to build a well-directed structure for digital marketing campaigns. Our team navigates through an in-depth process of developing a vast digital marketing strategy and follows the journey step-by-step. It simplifies the build-up and smoothens the execution of the goals."
               peraTwo="One’s approach toward digital marketing sets the roots and the core of digital marketing campaigns. The target audience is also defined at the beginning of the whole procedure. It helps businesses in Outranking with their digital presence and marketing campaigns."
               btn="Get A Free Quote"
               imageOne="https://images.pexels.com/photos/3810792/pexels-photo-3810792.jpeg?auto=compress&cs=tinysrgb&w=600"
               imageTwo="https://images.unsplash.com/photo-1521898284481-a5ec348cb555?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
               />
            <Sliderautomation />
            <div className="flex justify-center items-center flex-col space-y-4">

                <p className='italic lg:text-3xl text-[#eb305c] text-md pt-10  text-center'>ANY QUESTIONS</p>
                <div className='lg:text-5xl text-3xl text-[#070b19] w-[90%] text-center font-bold pt-3'>MARKETING AUTOMATION FAQS</div>

                {/* <p className="text-gray-400 max-w-5xl text-center">Our in-house technicians design custom SEO services inline with your goals and your organisation’s growth. So, whether you want to unlock new pools of worldwide customers or enhance your local online presence, we focus on services relevant to you.</p> */}
            </div>
            <div className="grid grid-cols-2 container-outrank py-16">
                {/* faq left */}
                <div className="text-center border-r-2 border-gray-400 space-y-2">
                    <Faq
                        title="What are the main features of marketing automation?"
                        pera="Marketing automation is the production line that links your strategy together and simplifies your process. The best way to describe the main features is through an example:

                              A potential customer searches one of your products and visits your website (SEO). They view your page on ‘marketing automation’ – but don’t sign up. Advertisements follow them on social media (retargeting), until they click one and find your landing page about a free eBook you’re offering and fill in their details (content).
            
                             You send an automated email to them with your eBook (email), before getting your sales team to give them a call (sales). If they’re not interested in anything more than the eBook at this stage, you could automatically schedule a follow-up call or email, or you could wait and only schedule something if they come back to your site. The sky’s the limit."
                    />
                    <Faq
                        title="How do you develop good leads with marketing automation?"
                        pera="Data, data, data.

                        We keep using this word, we know. But it’s the truth. The more information you have about your customers and prospects, the better automation will work. When you work with our agency, we’ll ensure we create forms that encourage visitors to provide as much information as possible. This will then be compiled in your CRM and categorised depending on any rules you have in place.
                        
                        From there, we can qualify your data depending on your business model and goals. This will depend on whether you’re a B2B business targeting other companies, or you’re chasing consumers. It’ll also depend on whether you’re selling products or services. Once we have the information we need, we’ll utilise this to start sending automated emails, planning social media campaigns and a myriad of other services that align with your overall business strategy."
                    />

                </div>
                {/* faq right */}
                <div className="text-center space-y-2">
                    <Faq
                        title="Can SMBs also use marketing automation?"
                        pera="Yes! Marketing automation is not just for large enterprise companies. Whether you’re a small gardening business or a large landscaping corporation, automation can help deliver leads more effectively and ensure your business continues to grow.

                        The best part about marketing automation for SMBs is it means less time spent actually doing marketing. Some small companies don’t have the time to waste. While Outrank can handle the majority for you, contacting your leads is still up to you!
                        
                        But with marketing automation, we can set up a framework that suits your business model and overall marketing strategy. You’ll see leads roll in, and you won’t need to waste any time chasing them with follow-up emails or retargeting – our automation strategy can handle that for you.
                        
                        Once everything is in place, it’s simply a matter of our team reviewing, reporting and tweaking to ensure everything continues to flow and bring you business."
                    />
                    <Faq
                        title="What is an inbound marketing campaign?"
                        pera="Attract. Engage. Delight. That was the original concept behind inbound marketing, and if you’re doing it right, not much has changed. It’s a strategy that focuses heavily on attracting customers through relevant and helpful content. This leads to customers seeking out your company, rather than the other way around.

                        It all sounds a bit “Build it and they will come”, but we promise you there’s more to it than that. The content has to be useful, after all. And it shouldn’t be purely hosted on your website. You need to optimise for keywords, share on social media and even guest blog on other websites to successfully pull off an inbound marketing campaign.
                        
                        Marketing automation can help with this process. Once your content is developed, you can build landing pages to capture customer details, schedule social media posts, automate emails and more. The possibilities are endless."
                    />
                    
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default MarketingAutomation