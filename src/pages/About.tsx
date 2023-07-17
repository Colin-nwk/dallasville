import TopBanner from "../components/general/TopBanner";
import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import heroBg from "../../public/asset/image/about/about-hero.png";
import WeAre from "../components/about/WeAre";
import OurMission from "../components/about/OurMission";
import OurCore from "../components/about/OurCore";
import Banner from "../components/about/Banner";
import Footer from "../components/general/Footer";
import Brochure from "../components/home/Brochure";
import People from "../components/about/People";
import Team from "../components/about/Team";

const About = () => {
  return (
    <>
      <div className="">
        <header className="bg-gradient-to-b from-black to-gray-600 relative w-full h-screen z-10">
          <img
            loading="eager"
            src={heroBg}
            alt="luxuzy house with pool"
            className="w-full h-full object-cover absolute mix-blend-overlay -z-10"
          />
          <div className="z-20 ">
            <TopBanner />
            <Navbar />
            <Hero />
          </div>
        </header>
        <WeAre />
        <OurMission />
        <OurCore />
        <Banner />
        <People />
        <Team />
        <Brochure />
        <Footer />
      </div>
    </>
  );
};

export default About;
