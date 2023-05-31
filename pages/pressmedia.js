import React from 'react'
import BannerCommon from '../components/common/BannerCommon'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import { PressCard } from '../components/insight/PressCard'

const pressmedia = () => {
  return (
    <div>
         
  <Header />
  <BannerCommon
      bgimg="assets/images/servicse.jpg"
      title="  PRESS & MEDIA"
      pera="Ambitious? Yes. Relentless? Yes. The best growth partner you'll ever have? Absolutely. Book a FREE 30-minute strategy session with an marketer to find out for yourself"

      />
          


          <div className='md:px-10 grid md:gap-8 lg:grid-cols-3 mt-9 mb-9'>
<PressCard/>
</div>

      <Footer/>
    </div>

    
  )
}

export default pressmedia