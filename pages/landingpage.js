import React from 'react'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import ContactSection from '../components/home/ContactSection'
import Connect from '../components/LandingPage/Connect'
import BannerCommon from '../components/common/BannerCommon'
import SliderNewCro from '../components/CRO/SliderNewCro'
import LandingSlider from '../components/LandingPage/LandingSlider'


const Landingpage = () => {
  return (
    <div>

      <Header />
      <BannerCommon
      bgimg="assets/images/banner-image2.png"
        title="Divert your traffic towards conversion simply with landing pages"
        pera="Make it simple, quick, and action-oriented for your audience with higher conversion rates. Landing pages are the destination for your target."
      />
      <Connect />
      <LandingSlider/>
      <ContactSection />
      <Footer />

    </div>
  )
}

export default Landingpage