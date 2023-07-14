import articles from "../../../public/asset/image/article.svg";
import hotel from "../../../public/asset/image/hotel.png";
import maxcenter from "../../../public/asset/image/mayexcenter.png";
import maxcenter2 from "../../../public/asset/image/mayexcenter2.png";

const Article = () => {
  return (
    <section className="container  mx-auto p-4 md:p-10 w-full h-fit">
      <div className="relative">
        <div className="flex justify-end item-center -z-10">
          <img src={articles} alt="our articles" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-start gap-4 mt-5 md:-mt-14">
          <div className="w-full h-full">
            <img src={hotel} alt="" className="w-full h-auto object-contain" />
            <div className="w-full h-32 mb-2 px-4 py-2 bg-main flex justify-center items-center relative">
              <h4 className="font-medium text-xl text-ellipsis text-white">
                Buying or selling a home goes beyond a perfect MOU.
              </h4>
              <h3 className="text-white absolute -top-8 right-4 text-5xl border-b-8 border-[#DC0000]">
                01
              </h3>
            </div>
          </div>
          {/* desktop */}
          <div className=" hidden md:flex gap-4 h-full overflow-x-scroll md:overflow-x-hidden">
            <div className="w-[80%] md:w-full h-full">
              <img src={maxcenter} alt="" className="w-full object-contain" />
              <div className="w-full h-52 px-4 py-2 bg-main flex justify-center items-center relative">
                <h4 className="font-medium  text-xl text-ellipsis text-white">
                  Buying or selling a home goes beyond a perfect MOU.
                </h4>
                <h3 className="text-white absolute -top-8 left-4 text-5xl border-b-8 border-[#DC0000]">
                  02
                </h3>
              </div>
            </div>
            <div className="w-[80%] md:w-full h-full">
              <img src={maxcenter2} alt="" className="w-full object-contain" />
              <div className="w-full h-52 px-4 py-2 bg-main flex justify-center items-center relative">
                <h4 className="font-medium  text-xl text-ellipsis text-white">
                  Buying or selling a home goes beyond a perfect MOU.
                </h4>
                <h3 className="text-white absolute -top-8 left-4 text-5xl border-b-8 border-[#DC0000]">
                  03
                </h3>
              </div>
            </div>
          </div>
          {/* mobile */}
          <div className="flex md:hidden gap-4 h-full overflow-x-scroll md:overflow-x-hidden">
            <div className="min-w-[80%]  h-full">
              <img src={maxcenter} alt="" className="w-full object-contain" />
              <div className="w-full h-52 px-4 py-2 bg-main flex justify-center items-center relative">
                <h4 className="font-medium  text-xl text-ellipsis text-white">
                  Buying or selling a home goes beyond a perfect MOU.
                </h4>
                <h3 className="text-white absolute -top-8 left-4 text-5xl border-b-8 border-[#DC0000]">
                  02
                </h3>
              </div>
            </div>
            <div className="min-w-[80%]  h-full">
              <img src={maxcenter2} alt="" className="w-full object-contain" />
              <div className="w-full h-52 px-4 py-2 bg-main flex justify-center items-center relative">
                <h4 className="font-medium  text-xl text-ellipsis text-white">
                  Buying or selling a home goes beyond a perfect MOU.
                </h4>
                <h3 className="text-white absolute -top-8 left-4 text-5xl border-b-8 border-[#DC0000]">
                  03
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;
