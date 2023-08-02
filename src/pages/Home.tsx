// import logo from "../../public/asset/image/logo.png";
import Banner from "../components/home/Banner";

import Projects from "../components/home/Projects";
import HomeValues from "../components/home/HomeValues";
import WeAre from "../components/home/WeAre";
import Services from "../components/home/Services";
import Review from "../components/home/Review";
import Article from "../components/home/Article";
// import Sponsors from "../components/home/Sponsors";
import Brochure from "../components/general/Brochure";
import Footer from "../components/general/Footer";

import PopUp from "../components/general/PopUp";
import Header from "../components/home/Header";
const Home = () => {
  return (
    <div className="">
      {/* popup */}
      <PopUp />
      <Header
        sideCarousel={true}
        headingOne=" Discover Your Dream "
        headingTwo="Home with Ease "
      />
      <Banner />
      <WeAre />
      <HomeValues />
      <Projects />
      <Services />
      <Review />
      <Article />
      {/* <Sponsors /> */}
      <Brochure bg="bg-white" />
      <Footer />
    </div>
  );
};

export default Home;
