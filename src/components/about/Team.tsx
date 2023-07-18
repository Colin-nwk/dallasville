import efe from "../../../public/asset/image/team/architect_efe.jpeg";
import ceo from "../../../public/asset/image/team/ceo_samuel_dallas.jpg";
import surveyor from "../../../public/asset/image/team/quantity_surveyor_Itori.jpeg";
import adeola from "../../../public/asset/image/team/business_developer_adeola.jpg";
import naomi from "../../../public/asset/image/team/communication_pr_naomi.jpg";
import jamiu from "../../../public/asset/image/team/jamiu_architect.jpeg";
import sarah from "../../../public/asset/image/team/sarah_architect.jpeg";

const Team = () => {
  return (
    <>
      {" "}
      <section className="container  mx-auto px-4 md:px-10 w-full py-4 md:py-10">
        <h3 className="text-left md:text-center font-bold text-xl md:text-3xl py-10 text-main">
          Meet our Team of Experts
        </h3>
        {/* <div className="mt-5 overflow-hidden">
          <div className="w-full gap-8 bg-red-600  flex justify-between items-center overflow-y-scroll">
            <div className="relative bg-green-500 h-72">
              <img
                src={teamMember}
                alt=""
                className="h-full w-full object-center"
              />
            </div>
            <div className="relative bg-green-500 h-72">
              <img
                src={teamMember}
                alt=""
                className="h-72 w-56 object-center"
              />
            </div>
          </div>
        </div> */}
        <div className="flex overflow-x-auto justify-between gap-4 items-center no-scroll cursor-pointer">
          {/* Add your scrollable elements here */}
          <div className="flex-none w-56 md:w-fit h-72 relative">
            <img
              src={ceo}
              alt="  Chief Executife Officer"
              className="h-full w-full object-cover mix-blend-overlay  -z-10"
            />
            <div className="absolute bottom-0 inset-x-0 text-white p-2">
              <h5 className="text-center ">Samuel Dallas Ojuckwu</h5>
              <p className="text-center text-sm text-white/70 ">
                Chief Executife Officer
              </p>
            </div>
            <div className="absolute bg-gradient-to-t from-black to-gray-400 w-full h-full -z-20 inset-0 bg-transparent"></div>
          </div>
          <div className="flex-none w-56 md:w-fit h-72 relative">
            <img
              src={surveyor}
              alt="surveyor"
              className="h-full w-full object-contain mix-blend-overlay  -z-10"
            />
            <div className="absolute bottom-0 inset-x-0 text-white p-2">
              {" "}
              <h5 className="text-center ">Itori</h5>
              <p className="text-center text-sm text-white/70 ">
                Quantity Surveyor
              </p>
            </div>
            <div className="absolute bg-gradient-to-t from-black to-gray-400 w-full h-full -z-20 inset-0 bg-transparent"></div>
          </div>
          <div className="flex-none w-56 md:w-fit h-72 relative">
            <img
              src={naomi}
              alt="naomi"
              className="h-full w-full object-contain mix-blend-overlay  -z-10"
            />
            <div className="absolute bottom-0 inset-x-0 text-white p-2">
              {" "}
              <h5 className="text-center ">Naomi</h5>
              <p className="text-center text-sm text-white/70 ">
                Communications & PR
              </p>
            </div>
            <div className="absolute bg-gradient-to-t from-black to-gray-400 w-full h-full -z-20 inset-0 bg-transparent"></div>
          </div>
          <div className="flex-none w-56 md:w-fit h-72 relative">
            <img
              src={adeola}
              alt=""
              className="h-full w-full object-contain mix-blend-overlay  -z-10"
            />
            <div className="absolute bottom-0 inset-x-0 text-white p-2">
              {" "}
              <h5 className="text-center ">Adeola</h5>
              <p className="text-center text-sm text-white/70 ">
                Business Developer
              </p>
            </div>
            <div className="absolute bg-gradient-to-t from-black to-gray-400 w-full h-full -z-20 inset-0 bg-transparent"></div>
          </div>
          <div className="flex-none w-56 md:w-fit h-72 relative">
            <img
              src={efe}
              alt="efe"
              className="h-full w-full object-contain mix-blend-overlay  -z-10"
            />
            <div className="absolute bottom-0 inset-x-0 text-white p-2">
              {" "}
              <h5 className="text-center ">Efe</h5>
              <p className="text-center text-sm text-white/70 ">Architect</p>
            </div>
            <div className="absolute bg-gradient-to-t from-black to-gray-400 w-full h-full -z-20 inset-0 bg-transparent"></div>
          </div>
          <div className="flex-none w-56 md:w-fit h-72 relative">
            <img
              src={sarah}
              alt="sarah"
              className="h-full w-full object-contain mix-blend-overlay  -z-10"
            />
            <div className="absolute bottom-0 inset-x-0 text-white p-2">
              {" "}
              <h5 className="text-center ">Sarah</h5>
              <p className="text-center text-sm text-white/70 ">Architect</p>
            </div>
            <div className="absolute bg-gradient-to-t from-black to-gray-400 w-full h-full -z-20 inset-0 bg-transparent"></div>
          </div>
          <div className="flex-none w-56 md:w-fit h-72 relative">
            <img
              src={jamiu}
              alt="jamiu"
              className="h-full w-full object-contain mix-blend-overlay  -z-10"
            />
            <div className="absolute bottom-0 inset-x-0 text-white p-2">
              {" "}
              <h5 className="text-center ">jamiu</h5>
              <p className="text-center text-sm text-white/70 ">Architect</p>
            </div>
            <div className="absolute bg-gradient-to-t from-black to-gray-400 w-full h-full -z-20 inset-0 bg-transparent"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
