import call from "../../../public/asset/image/general/call.svg";
import sms from "../../../public/asset/image/general/sms.svg";
// import location from "../../../public/asset/image/general/location.svg";
const TopBanner = () => {
  return (
    <div className="border-b-[.5px] border-white/20 z-50">
      <div className="container  mx-auto px-4 md:px-10 w-full ">
        {" "}
        <div className=" flex flex-col md:flex-row justify-start  md:justify-end items-start md:items-center font-light text-white gap-2 md:gap-6 md:text-base py-2 md:py-4 text-sm">
          <a
            href="tel:+23480036003600"
            className="inline-flex justify-start items-center cursor-pointer"
          >
            <img
              src={call}
              alt="call icon"
              className="object-contain mr-1 text-xs"
            />
            <span className="text-xs">
              Toll Free: 0800 3600 3600 ( 🇳🇬 Only)
            </span>
          </a>
          <a
            href="tel:+23408067812338"
            className="inline-flex justify-start items-center cursor-pointer"
          >
            <img
              src={call}
              alt="call icon"
              className="object-contain mr-1 text-xs"
            />
            <span className="text-xs">Mobile: 0806 781 2338</span>
          </a>

          <a
            href="mailto:info@dallasville.com"
            className="inline-flex justify-start items-center cursor-pointer"
          >
            {/* <HiOutlineMail className="mr-2" /> */}
            <img
              src={sms}
              alt="sms icon"
              className="object-contain mr-2 text-xs"
            />
            <span className="text-xs">info@dallasville.com</span>
          </a>
          {/* <div className="inline-flex justify-start items-center cursor-pointer">

            <img
              src={location}
              alt="location icon"
              className="object-contain mr-1 text-xs"
            />
            <span className="text-xs">
              3rd Floor, Novare Central Office (301i), Wuse Zone 5, Abuja
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
