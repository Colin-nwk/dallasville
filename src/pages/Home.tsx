// import logo from "../../public/asset/image/logo.png";
import Banner from "../components/home/Banner";
import Header from "../components/home/Header";
// import Projects from "../components/home/Projects";
import HomeValues from "../components/home/HomeValues";
import WeAre from "../components/home/WeAre";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <WeAre />
      <HomeValues />
      {/* <Projects /> */}
    </>
  );
};

export default Home;
