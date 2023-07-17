import people from "../../../public/asset/image/about/people.svg";
import sitting from "../../../public/asset/image/about/sitting.png";
import {
  IoMdArrowDroprightCircle,
  IoMdArrowDropleftCircle,
} from "react-icons/io";
const People = () => {
  return (
    <>
      <section className="container  mx-auto px-4 md:px-10 w-full py-4 md:py-10 relative">
        {/* <div className="flex justify-start md:justify-between items-center gap-4"> */}
        <h3 className="text-left font-bold text-xl md:text-3xl py-5 text-main ">
          The People
        </h3>
        <img
          src={people}
          alt="The People"
          className="md:block hidden object-contain absolute right-0 w-72 h-72 -top-10 "
        />
        {/* </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center h-full md:max-h-[500px] overflow-hidden">
          <div className=" h-fit w-fit md:h-96 md:w-96">
            <img src={sitting} alt="The People" className="object-contain   " />
          </div>
          <div className=" flex flex-col gap-4">
            <h4 className="text-left font-bold text-xl">
              Expertise and Experience
            </h4>
            <p className="">
              {" "}
              With years of experience in the real estate industry, our team of
              professionals brings a wealth of knowledge and expertise to the
              table. From our skilled agents to our dedicated support staff, we
              are committed to staying ahead of market trends, understanding
              local nuances, and providing you with comprehensive insights. We
              leverage our expertise to help you make informed decisions and
              ensure a smooth transaction process.
            </p>
            <div className="w-36 ml-auto">
              <div className="flex justify-between gap-4 items-start">
                <IoMdArrowDropleftCircle className="h-6 w-6 cursor-pointer" />
                <IoMdArrowDroprightCircle className="h-6 w-6 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default People;
