import React from 'react'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import Banner from '../components/WhoWeAre.js/Banner'
import OurPeople from '../components/WhoWeAre.js/OurPeople'
import YourCustomer from '../components/WhoWeAre.js/YourCustomer'
import ContactSection from '../components/home/ContactSection'
import PartnerSlider from '../components/common/PartnerSlider'
import BannerCommon from '../components/common/BannerCommon'
import WinningTeam from '../components/WhoWeAre.js/WinningTeam'
import SnapGallery from '../components/WhoWeAre.js/SnapGallery'
const WhoWeAre = () => {
  return (
    <div>

<Header/>
{/* <Banner/> */}
<BannerCommon
    
     bgimg="assets/images/whoweare.jpg"
      title=" Find Out More About Outrank"
      pera="We might surprise you with ourselves and our skills."
      />
<YourCustomer/>
<OurPeople/>
<PartnerSlider/>
<WinningTeam/>

<SnapGallery/>
<ContactSection/>
<Footer/>

    </div>
  )
}

export default WhoWeAre