// import logo from "../../public/asset/image/logo.png";
import Banner from "../components/home/Banner";
// import Header from "../components/home/Header";
import Projects from "../components/home/Projects";
import HomeValues from "../components/home/HomeValues";
import WeAre from "../components/home/WeAre";
import Services from "../components/home/Services";
import Review from "../components/home/Review";
import Article from "../components/home/Article";
import Sponsors from "../components/home/Sponsors";
import Brochure from "../components/home/Brochure";
import Footer from "../components/general/Footer";
import header from "../../public/asset/image/header.png";
import TopBanner from "../components/general/TopBanner";
import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
const Home = () => {
  return (
    <div className="">
      <header className="bg-gradient-to-b from-black to-gray-600 relative w-full h-screen z-10 overflow-clip">
        <img
          loading="eager"
          src={header}
          alt="luxuzy house with pool"
          className="w-full h-full object-cover absolute mix-blend-overlay -z-10"
        />
        <div className="container mx-auto px-4 md:px-10 w-ful w-full  -z-20 ">
          <div className=" container grid grid-cols-3  w-full h-full absolute top-28 md:top-14 -z-20 ">
            {/* <div className="border-l-[.5px] border-l-white/40"></div> */}
            {/* <div className="border-l-[.5px] border-l-white/40"></div> */}
            <div className="border-l border-white/20"></div>
            <div className="border-l border-white/20"></div>
            <div className="border-l border-white/20 border-r"></div>
            {/* <div className="border-r border-white/20"></div> */}
            {/* <div className="border-l-[.5px] border-r-white/40 bg-red-400"></div> */}
          </div>
        </div>
        <div className="z-20 ">
          <TopBanner />
          <Navbar />
          <Hero />
        </div>
      </header>

      {/* <Header /> */}
      <Banner />
      <WeAre />
      <HomeValues />
      <Projects />
      <Services />
      <Review />
      <Article />
      <Sponsors />
      <Brochure />
      <Footer />
    </div>
  );
};

export default Home;
