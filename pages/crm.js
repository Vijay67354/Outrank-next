import React from 'react'


import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import Slidercrm from '../components/Crm/Slidercrm'
import ContactSection from '../components/home/ContactSection'
import PageTitle from '../components/common/PageTitle'
import FeatureLeft from '../components/seo/FeatureLeft'
import FeatureRight from '../components/seo/FeatureRight'
import BannerCommon from '../components/common/BannerCommon'



const Crm = () => {
  return (
    <div>

<Header/>
<BannerCommon
bgimg="assets/images/crm1.jpg"
 title="Build customer relations to build the core of business on trust and loyalty"
 pera="Are you able to gain customers through digital marketing? But are you able to retain your customers? If not, find the best CRM tools to optimize your relations with them."
 
/>
<PageTitle title="Keep your relationships interesting" sub="Build a rigid core of bespoke ties with your audience for more results." />
<FeatureLeft
 title="Connecting with your audience is linking your business to its growth."
 peraOne="The relationship with your existing and potential customers plays a vital role in business strategy and success. It builds the roots of your business in the market and the trust of your public. Our CRM tools can professionally keep up with the personal touch of belief and satisfactory delivery of the product and services. "
 peraTwo="Outrank helps build a rigid base for CRM in a strategic and tailored way to achieve the end goal. A good Customer-relation leads to more lead generation, conversion, and sales with futuristic support brand management. "
 image="assets/images/crm2.jpg"
  btn="Get A Free Quote"
 />
 <FeatureRight

imageOne="assets/images/crm3.jpg" 
imageTwo="assets/images/crm4.jpg"
title="CRM with automation builds inter and intra- relations"
peraOne="Our partnership with several automation CRM tools leads to a successive approach toward customer-centric marketing. It streamlines the customer and team process with machine learning and an advanced structured consumer database."
peraTwo="The CRM team at Outrank drives the process in a performance-driven manner to build a seamless environment for the managers and customers. CRM also simplifies the collection of data from the customers and potential customers or the data gathered from the digital marketing campaign. Book a free session to explore the need for your business growth."
btn="Book A Free Strategy Session"
/>
<FeatureLeft
 title="Accelerate your sales process"
 peraOne="Outrank helps to drive the streamlined sales process through digital marketing strategies and research analysis. We develop a deep understanding of your business to inculcate value-driven methods with your current operations. It targets existing and potential customers and some similar or look-alike audiences. "
 peraTwo="Develop an understanding of digital marketing agencies in Melbourne with Outrank to determine the possibilities you can achieve from digital media. We first run a thorough R&D to simplify the process and understand the solutions to future challenges. The team will guide you through the process smoothly and will build a roadmap to follow."
 image="assets/images/crm5.jpg" 
  btn="Get A Free Quote"
 />
<Slidercrm/>
<ContactSection/>
<Footer/>
    </div>
  )
}

export default Crm