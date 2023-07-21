import header from "../../../public/asset/image/header.png";
// import { BsTelephoneForward } from "react-icons/bs";
// import { HiOutlineMail } from "react-icons/hi";
// import { GoLocation } from "react-icons/go";
import Navbar from "../general/Navbar";
import Hero from "./Hero";

const Header = () => {
  return (
    <header
      className="bg-gradient-to-b from-black to-gray-600 relative w-full h-2/3 z-10"
      // id="header-image"
    >
      <img
        loading="eager"
        src={header}
        alt="luxuzy house with pool"
        className="w-full h-full object-cover absolute mix-blend-overlay -z-10"
      />
      {/* <div id="header-image" className="h-full w-full"></div> */}
      <div className="container  mx-auto px-4 md:px-10 w-full h-screen z-20 ">
        {/* <div className=" flex flex-col md:flex-row justify-start  md:justify-end items-start md:items-center font-light text-white gap-2 md:gap-6 md:text-base py-2 md:py-4 text-sm">
          <a
            href="tel:+23480036003600"
            className="inline-flex justify-start items-center cursor-pointer"
          >
            <BsTelephoneForward className="mr-2" />
            <span>Toll Free: 0800 3600 3600 ( 🇳🇬 Only)</span>
          </a>

          <a
            href="mailto:info@dallasville.com"
            className="inline-flex justify-start items-center cursor-pointer"
          >
            <HiOutlineMail className="mr-2" />
            <span>info@dallasville.com</span>
          </a>
          <div className="inline-flex justify-start items-center cursor-pointer">
            <GoLocation className="mr-2" />
            <span>3rd Floor, Novare Central Office, Wuse Zone, Abuja</span>
          </div>
        </div> */}
        {/* navbar */}
        <Navbar />
        <Hero primary={true} />
      </div>
    </header>
  );
};

export default Header;
