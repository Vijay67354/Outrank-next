import React from 'react'
import Footer from '../components/common/Footer'
// import Navbar from '../components/common/Navbar'
// import Banner from '../components/WhatWeDo.js/Banner'
import Offer from '../components/WhatWeDo.js/Offer'
import WhatWeOffer from '../components/WhatWeDo.js/WhatWeOffer'
import Work from '../components/home/Work'
import ContactSection from '../components/home/ContactSection'
import PartnerSlider from '../components/common/PartnerSlider'
import OurTeam from '../components/seo/OurTeam'
import Header from '../components/common/Header'
const WhatweDo = () => {
  return (
    <dv>

   <Header/>

   <OurTeam/>

  
   <WhatWeOffer/>
   <Offer/>
   <Work/>
   <PartnerSlider/>
 <ContactSection/>
   <Footer/>
    </dv>
  )
}

export default WhatweDo