import React from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import ContactSection from "../components/home/ContactSection";
import Connect from "../components/Ux/Connect";
import BannerCommon from "../components/common/BannerCommon";
import UxSlider from "../components/Ux/UxSlider";

const UxService = () => {
  return (
    <div>
      <Header />
      <BannerCommon
        bgimg="assets/images/ux-banner.jpg"
        title="Deliver a smooth and engaging experience to your customers"
        pera="Do you want to get your viewers to stick with your presence? Then start giving them the best UX services as it builds an experience that leads to conversions."
      />
      <Connect />
      <UxSlider/>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default UxService;