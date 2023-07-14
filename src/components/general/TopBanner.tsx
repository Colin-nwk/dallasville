import { BsTelephoneForward } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
const TopBanner = () => {
  return (
    <div className="container  mx-auto px-4 md:px-10 w-full">
      {" "}
      <div className=" flex flex-col md:flex-row justify-start  md:justify-end items-start md:items-center font-light text-white gap-2 md:gap-6 md:text-base py-2 md:py-4 text-sm">
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
      </div>
    </div>
  );
};

export default TopBanner;
