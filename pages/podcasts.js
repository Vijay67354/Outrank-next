import React from 'react'
import BannerCommon from '../components/common/BannerCommon'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import { PodCard } from '../components/insight/PodCard'


const podcasts = () => {
  return (
    <div>
    <Header />
    <BannerCommon
        bgimg="assets/images/seo-image-4.jpg"
        title=" PODCASTS  "
        pera="Ambitious? Yes. Relentless? Yes. The best growth partner you'll ever have? Absolutely. Book a FREE 30-minute strategy session with an marketer to find out for yourself"
   
        />
  
     
  
       
  
 
  
  <div className='md:px-12 grid lg:grid-cols-3 mt-9'>
  <PodCard/>
  </div>
  
  
  
  
  
  
  
  
  
      
  
  
  
  
   <Footer />
    </div> 
  )
}

export default podcasts