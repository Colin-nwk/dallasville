import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import logo from "../../../public/asset/image/logo_white.png";
import sbo from "../../../public/asset/image/sbo.png";
const Footer = () => {
  return (
    <div className="bg-[#171719] text-white">
      <footer className="container  mx-auto p-4 md:p-10 w-full h-fit">
        <div id="footer-top" className="my-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4  md:gap-14 items-center justify-between">
            <div className="flex flex-col justify-start items-start gap-4 md:col-span-2 w-full h-full">
              <img src={logo} alt="dallasville" className="w-fit h-fit" />
              <p className="">
                At Dallasville, we believe in the power of smart homes and
                connected living. Our smart real estate solutions integrate home
                automation technology, offering a seamless and intelligent
                living experienc
              </p>
            </div>
            <div className="grid grid-cols-2 md:col-span-2">
              <div className="flex flex-col justify-start items-start gap-2 w-full h-full">
                <p className="font-semibold mb-4">About Us</p>
                <p className="text-left">The company</p>
                <p className="text-left">The people</p>
                <p className="text-left">The culture</p>
                <p className="text-left">CSR projects</p>
                <p className="text-left">Sales partners</p>
              </div>
              <div className="flex flex-col justify-start items-start gap-2 w-full h-full">
                <p className="font-semibold mb-4">Projects</p>
                <p className="text-left">La Vogue</p>
                <p className="text-left">Hackberry</p>
                <p className="text-left">Sycamore</p>
                <p className="text-left">Dewberry</p>
                <p className="text-left">Edgefield</p>
              </div>
            </div>
            {/* <div className="flex flex-col justify-start items-start gap-2 w-full h-full">
              <p className="font-semibold mb-4">About Us</p>
              <p className="text-left">The company</p>
              <p className="text-left">The people</p>
              <p className="text-left">The culture</p>
              <p className="text-left">CSR projects</p>
              <p className="text-left">Sales partners</p>
            </div>
            <div className="flex flex-col justify-start items-start gap-2 w-full h-full">
              <p className="font-semibold mb-4">Projects</p>
              <p className="text-left">La Vogue</p>
              <p className="text-left">Hackberry</p>
              <p className="text-left">Sycamore</p>
              <p className="text-left">Dewberry</p>
              <p className="text-left">Edgefield</p>
            </div> */}

            <div className="flex flex-col justify-start items-start gap-6 md:col-span-2 w-full h-full">
              <p className="">
                Get real time accurate information on property investments and
                news
              </p>
              <div className="flex w-full">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter Email"
                  className="px-3 py-2.5 bg-white rounded-l-3xl w-4/6"
                />
                <input
                  type="submit"
                  value="Submit"
                  className="px-3 py-2.5 bg-main rounded-r-3xl cursor-pointer w-1/4"
                />
              </div>
              <div className="grid grid-cols-2">
                <div className="flex flex-col gap-3">
                  <img src={sbo} alt="sbo" className="w-fit h-fit" />
                  <h5>Trusted Busines</h5>
                </div>
                <div className="flex flex-col gap-3">
                  <h5>Address</h5>
                  <p className="">
                    3rd Floor, Novare Central Office, Wuse Zone, Abuja
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer-bottom">
          <p className="text-xs text-left md:text-center">
            At Dallasville Resources Ltd, we are dedicated to delivering
            unparalleled quality and customer satisfaction. That's why we
            proudly offer a comprehensive 12-month Money Back Guarantee. If,
            within 12 months of your purchase, you find yourself less than fully
            satisfied with our real estate development, we will gladly refund
            your investment without any hesitation or inquiries. We firmly
            believe in the excellence of our projects and the transformative
            experiences they offer. Your peace of mind and utmost satisfaction
            are at the forefront of our commitment, and we are devoted to
            ensuring your confidence in your investment with us
          </p>
          <div className=" flex justify-center md:justify-between items-center flex-wrap gap-4 mt-5">
            <p className="order-3 md:order-1">
              @2023 Dallasville ResourceS Limited
            </p>
            <div className="flex justify-center gap-4 order-1 md:order-2">
              <a href="" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                Terms of Services
              </a>
            </div>
            <div className="flex justify-center items-center gap-8 order-2 md:order-3">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className=" bg-white h-6 w-6 rounded-full flex justify-center items-center ring-4 ring-opacity-50 ring-white hover:ring-8 duration-300 ease-in-out transition-all"
              >
                <BiLogoFacebook className="text-main " />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className=" bg-white h-6 w-6 rounded-full flex justify-center items-center ring-4 ring-opacity-50 ring-white hover:ring-8 duration-300 ease-in-out transition-all"
              >
                <AiOutlineTwitter className="text-main " />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className=" bg-white h-6 w-6 rounded-full flex justify-center items-center ring-4 ring-opacity-50 ring-white hover:ring-8 duration-300 ease-in-out transition-all"
              >
                <AiOutlineInstagram className="text-main " />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
