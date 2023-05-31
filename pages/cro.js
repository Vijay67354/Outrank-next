import React from 'react'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import Features from "../components/CRO/Features"
import Connect from "../components/CRO/Connect"
import Faq from "../components/common/Faq";
import BannerCommon from '../components/common/BannerCommon'
import SliderNewCro from '../components/CRO/SliderNewCro'
const Cro = () => {
  return (
    <div>
      assets/images/image-banner4.jpg
      <Header />
      <BannerCommon
        bgimg="assets/images/images (1).jpg"
        title="Drive traffic to your business that generates business with its action"
        pera="Are you tired of spending on digital marketing techniques that rushes traffic but the least conversion? Then it would be best if you optimized your traffic conversion with Outrank."
      />
      <Connect />
      <Features />
      <SliderNewCro />
      <div className="flex justify-center items-center flex-col space-y-4">

        <p className='italic lg:text-3xl text-[#eb305c] text-md pt-10  text-center'>Conversion rate….</p>
        <div className='lg:text-5xl text-3xl text-[#070b19] w-[90%] text-center font-bold pt-3'>Find your answers here in FAQs</div>

        {/* <p className="text-gray-400 max-w-5xl text-center">Our in-house technicians design custom SEO services inline with your goals and your organisation’s growth. So, whether you want to unlock new pools of worldwide customers or enhance your local online presence, we focus on services relevant to you.</p> */}
      </div>
      <div className="grid grid-cols-2 container-outrank py-16">
        {/* faq left */}
        <div className="text-center border-r-2 border-gray-400 space-y-2">
          <Faq
            title="Would my service-based company benefit from Digital Marketing?"
            pera="Yes, we are dealing with several service-based companies which have experienced some exponential results within a short period. Our team is widely recognized for overcoming the challenges of digital presence via our fresh and reasonable approach."
            pera1="For the service-based company, we work on UX, content marketing, lead generation, and many more to build a robust database for the business. " />
          <Faq
            title="How can CRO be helpful for an ecommerce? "
            pera="Conversion Rate Optimization is the most essential method for ecommerce websites as their principal motive is to generate sales from the audience. Outrank helps in analyzing consumer behaviour and runs a campaign satisfying the requirements. This altogether works to attract the audience’s brain and make them take to making some action. "
          />
             <Faq
            title="How is social media marketing better?"
            pera="Social media has become a vast, welcoming platform for all audiences. Therefore, it has become a very resourceful and impactful means of digital marketing. It develops more trust and conversions in comparison to other forms of Digital marketing. Outrank has a dedicated team to run SMM for all types of businesses."
          />

        </div>
        {/* faq right */}
        <div className="text-center space-y-2">
          <Faq
            title="Do I need a dedicated SEO team?  "
            pera="SEO is the best method if you are looking forward to inorganic marketing. But you don’t need a dedicated in-house team for it, as the SEO team of Outrank can do much better in less time. Our team will be an extension of inorganic marketing."
          />
          <Faq
            title="How do keywords work?"
            pera="Every search engine works on the keywords and searches the data from the digital platform based on the same. In Digital Marketing, we use specific keywords similar to your business or targeting your services. The more often the keyword will be searched by the audience, the more your website/landing page will be displayed on the search engine page."
          />
           <Faq
            title="Are Google ads a good source for lead generation?"
            pera="Yes, Google ads run on their own analytics and reach a maximum audience in less time. Digital marketing companies in Melbourne are also working on CPC ads that are budget friendly and generate more conversions."
          />
        </div>

      </div>
      <Footer />

    </div>
  )
}

export default Cro