// import Footer from "../components/general/Footer";
// import Navbar from "../components/general/Navbar";
import { Link } from "react-router-dom";
import TopBanner from "../components/general/TopBanner";

const NotFound = () => {
  return (
    <div className="bg-gradient-to-b from-black to-main h-screen overflow-hidden ">
      <TopBanner />
      {/* <Navbar /> */}
      <section className="container mx-auto px-4 md:px-10  w-full h-full">
        <div className="flex justify-center items-center w-full h-full flex-col">
          <h3 className="text-6xl text text-purple-400 text-center mb-10">
            {" "}
            Not Found
          </h3>
          <Link
            to="/"
            className="backdrop-blur-md drop-shadow rounded-full py-2.5 px-4 text-purple-400 hover:border-white/50 duration-300 transition-all ease-in-out border border-white/10  uppercase"
          >
            go to home
          </Link>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default NotFound;
