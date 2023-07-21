import guardian from "../../../public/asset/image/guardian.png";
import punch from "../../../public/asset/image/punch-newspaper.png";
import buj from "../../../public/asset/image/bujnews-green.png";
import ontex from "../../../public/asset/image/ontex.png";
const Sponsors = () => {
  return (
    <>
      <div className="border-t border-b my-10">
        <section className="container  mx-auto p-4 md:p-10 w-full h-fit">
          <div>
            <h4 className="text-xl font-bold text-center py-5">
              As featured in
            </h4>
          </div>
          <div className="flex justify-start md:justify-between items-center gap-4 flex-wrap no-scroll ">
            <img
              src={punch}
              alt="punch"
              className="w-fit md:w-44 h-fit object-contain aspect-auto"
            />
            <img
              src={guardian}
              alt="guardian"
              className="w-fit md:w-56 h-fit object-contain aspect-auto"
            />
            <img
              src={buj}
              alt="buj"
              className="w-fit md:w-44 h-fit object-contain aspect-auto"
            />
            <img
              src={ontex}
              alt="ontex"
              className="w-fit md:w-44 h-fit object-contain aspect-auto"
            />
          </div>
          {/* <div className="grid md:grid-cols-4 grid-cols-2 gap-4 justify-center items-center">
            <div className="w-full h-full bg-red-400 ">
              <img
                src={punch}
                alt="punch"
                className="w-fit h-fit object-contain "
              />
            </div>
            <div className="w-full h-full bg-yellow-400 ">
              <img
                src={guardian}
                alt="guardian"
                className="w-fit h-fit object-contain bg-yellow-400"
              />
            </div>
            <div className="w-full h-full bg-blue-400 ">
              <img
                src={buj}
                alt="buj"
                className="w-fit h-fit object-contain bg-green-400"
              />
            </div>
            <div className="w-full h-full bg-green-400 ">
              <img
                src={ontex}
                alt="ontex"
                className="w-fit h-fit object-contain aspect-auto"
              />
            </div>
          </div> */}
        </section>
      </div>
    </>
  );
};

export default Sponsors;
