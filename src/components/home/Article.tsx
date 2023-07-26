import articles from "../../../public/asset/image/article.svg";
// import hotel from "../../../public/asset/image/hotel.png";
// import maxcenter from "../../../public/asset/image/mayexcenter.png";
// import maxcenter2 from "../../../public/asset/image/mayexcenter2.png";

// import newInterior from "../../../public/asset/image/interior/newinterior.jpg";
// import newInteriorThree from "../../../public/asset/image/interior/newinteriorThree.jpg";
// import newInteriorTwelve from "../../../public/asset/image/interior/newinteriorTwelve.jpg";

import d from "../../../public/asset/image/home/grid/d.png";
import b from "../../../public/asset/image/home/grid/b.png";
import e from "../../../public/asset/image/home/grid/e.png";

const Article = () => {
  return (
    <section className="container  mx-auto p-4 md:p-10 w-full h-fit">
      <div className="relative">
        <div className="flex justify-end item-center -z-10">
          <img src={articles} alt="our articles" className="" />
        </div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-start gap-4 mt-5 md:-mt-14">
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
        </div> */}

        {/* new  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  md:-mt-10">
          <div className="  w-full h-96 md:col-span-1 relative">
            <img src={d} alt="" className="w-full h-full object-cover" />
            <div className="w-full h-20 px-4 py-2 bg-main flex justify-center items-center absolute bottom-0">
              <h4 className="font-medium  text-lg text-ellipsis text-white">
                Buying or selling a home goes beyond a perfect MOU.
              </h4>
              <h3 className="text-white absolute -top-5 md:-top-8 right-2 md:right-4 text-3xl md:text-5xl border-b-8 border-[#DC0000]">
                01
              </h3>
            </div>
          </div>
          <div className="flex gap-8 overflow-x-scroll md:overflow-x-hidden">
            <div className=" w-4/5 md:w-full h-96 col-span-1 flex-shrink-0 md:flex-shrink relative">
              <img src={b} alt="" className="w-full h-full object-cover" />
              <div className="w-full h-36 px-4 py-2 bg-main flex justify-center items-center absolute bottom-0">
                <h4 className="font-medium  text-lg text-ellipsis text-white">
                  Buying or selling a home goes beyond a perfect MOU.
                </h4>
                <h3 className="text-white absolute -top-5 md:-top-8 left-2 md:left-4 text-3xl md:text-5xl border-b-8 border-[#DC0000]">
                  02
                </h3>
              </div>
            </div>
            <div className="  w-4/5 md:w-full h-96 col-span-1 flex-shrink-0 md:flex-shrink relative">
              <img src={e} alt="" className="w-full h-full object-cover" />
              <div className="w-full h-36 px-4 py-2 bg-main flex justify-center items-center absolute bottom-0">
                <h4 className="font-medium  text-lg  text-ellipsis text-white">
                  Buying or selling a home goes beyond a perfect MOU.
                </h4>
                <h3 className="text-white absolute -top-5 md:-top-8 left-2 md:left-4 text-3xl md:text-5xl border-b-8 border-[#DC0000]">
                  03
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* end new  */}
      </div>
    </section>
  );
};

export default Article;
