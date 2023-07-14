// import logo from "../../public/asset/image/logo.png";
import Banner from "../components/home/Banner";
import Header from "../components/home/Header";
import Projects from "../components/home/Projects";
import HomeValues from "../components/home/HomeValues";
import WeAre from "../components/home/WeAre";
import Services from "../components/home/Services";
import Review from "../components/home/Review";
import Article from "../components/home/Article";
import Sponsors from "../components/home/Sponsors";
import Brochure from "../components/home/Brochure";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <WeAre />
      <HomeValues />
      <Projects />
      <Services />
      <Review />
      <Article />
      <Sponsors />
      <Brochure />
    </>
  );
};

export default Home;
