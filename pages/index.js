import Head from "next/head";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Header from "../components/common/Header";
import PartnerSlider from "../components/common/PartnerSlider";
import Banner from "../components/home/Banner";
import ContactSection from "../components/home/ContactSection";
import LetsGetStarted from "../components/home/LetsGetStarted";
import Services from "../components/home/Services";
import Story from "../components/home/Story";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Work from "../components/home/Work";

export default function Home() {
  return (
    <div className="">
      {/* <Navbar/> */}
      <Header />
      <Banner />
      <WhyChooseUs />
      <Services />
      <Story />
      <LetsGetStarted />
      <Work />
      <PartnerSlider />
      <ContactSection />
      <Footer />
    </div>
  );
}