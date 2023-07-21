import WeAre from "../components/about/WeAre";
import OurMission from "../components/about/OurMission";
import OurCore from "../components/about/OurCore";
import Banner from "../components/about/Banner";
import Footer from "../components/general/Footer";
import Brochure from "../components/general/Brochure";
import People from "../components/about/People";
import Team from "../components/about/Team";
import Header from "../components/home/Header";

const About = () => {
  return (
    <>
      <div className="">
        <Header />
        <WeAre />
        <OurMission />
        <OurCore />
        <Banner />
        <People />
        <Team />
        <Brochure bg="bg-[#FFF1F8]" />
        <Footer />
      </div>
    </>
  );
};

export default About;
