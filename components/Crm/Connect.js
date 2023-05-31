import React from 'react'
import FeatureLeft from '../seo/FeatureLeft'
import FeatureRight from '../seo/FeatureRight'

const Connect = () => {
  return (
    <div>

<div className='flex justify-center items-center flex-col pt-16 '>
        <div className='lg:text-4xl text-3xl text-[#070b19] w-[90%] text-center font-bold pt-3'>CONNECT WITH CUSTOMERS</div>
        <p className='italic text-3xl font-semibold text-[#eb305c] text-md  pt-3 text-center'>ROI-driven strategies tailored for sales and marketing leaders.</p>
      </div>

<FeatureLeft
 title="THE VALUE OF EFFECTIVE CUSTOMER RELATIONSHIP MANAGEMENT"
 peraOne="Customer relationship management tools are more than just an organisation platform. They’re a means of connecting with and nurturing your existing customer base, to boost not only your retention – but your profit, too. Using intelligent technology and essential segmentation, we provide our clients with access to industry-leading CRM platforms, helping you build your client base with an ROI-driven approach."
 peraTwo="Our team keeps your team on track; ensuring you never lose focus when it comes to delighting and retaining your customers. By maximising the value of every customer, we help you work smarter and not harder, freeing up your time to keep innovating and growing your brand. Your dedicated CRM specialists will take care of the technology, setting up the tracking and monitoring to extract exclusive audience insights and leverage our resources – to maximise yours."
 image={"assets/images/crm1.png"} 
 />

 <FeatureRight

imageOne="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" 
imageTwo="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
title="INDUSTRY EXPERTISE, INTELLIGENT TECHNOLOGY"
peraOne="We partner with CRM providers that harness the power of automation to streamline processes for every member of your team. Through machine-learning technology, we’re able to tailor your unique CRM platform to structure consumer datasets and target them with the most effective messaging, at optimal times in their journey."
peraTwo="CRM marketing combined with automated technology and a performance-driven approach that’s consistently measured against your KPIs builds an environment for marketing managers to grow and nurture their current database and generate quality leads for your sales department."
/>



<FeatureLeft
 title="STREAMLINE YOUR SALES PROCESSES"
 peraOne="We’re a HubSpot Gold Certified Agency Partner, and we’re experts in HubSpot CRM, with knowledge and insights we pass onto our clients to ensure you get maximum value from our partnership. Our in-house teams work together on one unified platform, where we’ll scale your automated strategies and audience segmentation, email campaigns, ad campaigns, and one-to-one conversations to capture more leads and grow your database."
 peraTwo="HubSpot provides one streamlined place to store your contacts and ensure you provide the service they expect. With the ability to contact sectors of your audience using bulk marketing, and view insights through clear and regular reporting, brands can optimise every step of their digital strategy."
 image={"assets/images/sale.process.jpg"} 
 />


    </div>
  )
}

export default Connect