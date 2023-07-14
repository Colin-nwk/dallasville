import guardian from "../../../public/asset/image/guardian.png";
import punch from "../../../public/asset/image/punch-newspaper.png";
import buj from "../../../public/asset/image/bujnews-green.png";
import ontex from "../../../public/asset/image/ontex.png";
const Sponsors = () => {
  return (
    <>
      <div className="border-t border-b my-10">
        <section className="container  mx-auto p-4 md:p-10 w-full h-fit">
          <div className="flex justify-start md:justify-between items-center gap-4 flex-wrap ">
            <div>
              <p className="text-3xl font-bold ">As featured in</p>
            </div>

            <img
              src={punch}
              alt="punch"
              className="w-fit h-fit object-contain aspect-auto"
            />
            <img
              src={guardian}
              alt="guardian"
              className="w-fit h-fit object-contain aspect-auto"
            />
            <img
              src={buj}
              alt="buj"
              className="w-fit h-fit object-contain aspect-auto"
            />
            <img
              src={ontex}
              alt="ontex"
              className="w-fit h-fit object-contain aspect-auto"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Sponsors;
