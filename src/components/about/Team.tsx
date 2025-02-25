import efe from "../../../public/asset/image/team/architect_efe.jpg";
import ceo from "../../../public/asset/image/team/ceo_samuel_dallas.jpg";
import surveyor from "../../../public/asset/image/team/quantity_surveyor_Itori.jpeg";
import adeola from "../../../public/asset/image/team/business_developer_adeola.jpg";
import naomi from "../../../public/asset/image/team/communication_pr_naomi.jpg";
import jamiu from "../../../public/asset/image/team/jamiu_architect.jpg";
import sarah from "../../../public/asset/image/team/sarah_architect.jpg";

const Team = () => {
  return (
    <>
      {" "}
      <section className="container  mx-auto px-4 md:px-10 w-full py-4 md:py-10">
        <h3 className="text-left md:text-center font-bold text-xl md:text-3xl py-10 text-main">
          Meet our Team of Experts
        </h3>

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
              className="h-full w-full object-cover mix-blend-overlay  -z-10"
            />
            <div className="absolute bottom-0 inset-x-0 text-white p-2">
              {" "}
              <h5 className="text-center ">Nitori Emmanuel</h5>
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
              className="h-full w-full object-cover mix-blend-overlay  -z-10"
            />
            <div className="absolute bottom-0 inset-x-0 text-white p-2">
              {" "}
              <h5 className="text-center ">Naomi Kuwanta</h5>
              <p className="text-center text-sm text-white/70 ">
                Communications & PR
              </p>
            </div>
            <div className="absolute bg-gradient-to-t from-black to-gray-400 w-full h-full -z-20 inset-0 bg-transparent"></div>
          </div>
          <div className="flex-none w-56 md:w-fit h-72 relative">
            <img
              src={adeola}
              alt="Adeola Balogun"
              className="h-full w-full object-cover mix-blend-overlay  -z-10"
            />
            <div className="absolute bottom-0 inset-x-0 text-white p-2">
              {" "}
              <h5 className="text-center ">Adeola Balogun</h5>
              <p className="text-center text-sm text-white/70 ">
                Business Developer
              </p>
            </div>
            <div className="absolute bg-gradient-to-t from-black to-gray-400 w-full h-full -z-20 inset-0 bg-transparent"></div>
          </div>
          <div className="flex-none w-56 md:w-fit h-72 relative">
            <img
              src={efe}
              alt="Efe  Ayara"
              className="h-full w-full object-cover mix-blend-overlay  -z-10"
            />
            <div className="absolute bottom-0 inset-x-0 text-white p-2">
              {" "}
              <h5 className="text-center ">Efe Ayara</h5>
              <p className="text-center text-sm text-white/70 ">Architect</p>
            </div>
            <div className="absolute bg-gradient-to-t from-black to-gray-400 w-full h-full -z-20 inset-0 bg-transparent"></div>
          </div>
          <div className="flex-none w-56 md:w-fit h-72 relative">
            <img
              src={sarah}
              alt="Sarah Agbo"
              className="h-full w-full object-cover mix-blend-overlay  -z-10"
            />
            <div className="absolute bottom-0 inset-x-0 text-white p-2">
              {" "}
              <h5 className="text-center ">Sarah Agbo</h5>
              <p className="text-center text-sm text-white/70 ">Architect</p>
            </div>
            <div className="absolute bg-gradient-to-t from-black to-gray-400 w-full h-full -z-20 inset-0 bg-transparent"></div>
          </div>
          <div className="flex-none w-56 md:w-fit h-72 relative">
            <img
              src={jamiu}
              alt="Salisu Jamiu"
              className="h-full w-full object-cover mix-blend-overlay  -z-10"
            />
            <div className="absolute bottom-0 inset-x-0 text-white p-2">
              {" "}
              <h5 className="text-center ">Salisu Jamiu</h5>
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
