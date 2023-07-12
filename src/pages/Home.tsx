// import logo from "../../public/asset/image/logo.png";
import Banner from "../components/home/Banner";
import Header from "../components/home/Header";
import Projects from "../components/home/Projects";
import HomeValues from "../components/home/HomeValues";
import WeAre from "../components/home/WeAre";
import Services from "../components/home/Services";
import Review from "../components/home/Review";
import Article from "../components/home/Article";

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
    </>
  );
};

export default Home;
