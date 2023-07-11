import logo from "../../public/asset/image/logo.png";
import Header from "../components/home/Header";

const Home = () => {
  return (
    <>
      <Header />
      <img src={logo} className="logo" alt="Dallasville" />
      Home
    </>
  );
};

export default Home;
