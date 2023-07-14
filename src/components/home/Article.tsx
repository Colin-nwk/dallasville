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
        <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-col-2 justify-center items-start gap-4 mt-5 md:-mt-14">
          <div className="md:col-span-2 h-full">
            <img src={hotel} alt="" className="w-full h-auto object-contain" />
            <div className="w-full h-32 px-4 py-2 bg-main flex justify-center items-center">
              <p className="font-medium text-xl text-ellipsis text-white">
                Buying or selling a home goes beyond a perfect MOU.
              </p>
            </div>
          </div>
          <div className="h-full">
            <img
              src={maxcenter}
              alt=""
              className="w-full h-auto object-contain"
            />
            <div className="w-full h-32 px-4 py-2 bg-main flex justify-center items-center">
              <p className="font-medium  text-xl text-ellipsis text-white">
                Buying or selling a home goes beyond a perfect MOU.
              </p>
            </div>
          </div>
          <div className="h-full">
            <img
              src={maxcenter2}
              alt=""
              className="w-full h-auto object-contain"
            />
            <div className="w-full h-32 px-4 py-2 bg-main flex justify-center items-center">
              <p className="font-medium  text-xl text-ellipsis text-white">
                Buying or selling a home goes beyond a perfect MOU.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;
