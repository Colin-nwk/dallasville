import teamMember from "../../../public/asset/image/about/team-member.png";

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
        <div className="flex overflow-x-auto justify-between gap-4 items-center ">
          {/* Add your scrollable elements here */}
          <div className="flex-none w-56 h-72 relative">
            <img
              src={teamMember}
              alt=""
              className="h-full w-full object-contain mix-blend-overlay  -z-10"
            />
            <div className="absolute bottom-0 inset-x-0 text-white p-2">
              {" "}
              <h5 className="text-center ">Jumoke Adesanya</h5>
              <p className="text-center text-sm text-white/70 ">
                Chief Executife Officer
              </p>
            </div>
            <div className="absolute bg-gradient-to-t from-black to-gray-400 w-full h-full -z-20 inset-0 bg-transparent"></div>
          </div>
          <div className="flex-none w-56 h-72 relative">
            <img
              src={teamMember}
              alt=""
              className="h-full w-full object-contain mix-blend-overlay  -z-10"
            />
            <div className="absolute bottom-0 inset-x-0 text-white p-2">
              {" "}
              <h5 className="text-center ">Jumoke Adesanya</h5>
              <p className="text-center text-sm text-white/70 ">
                Chief Executife Officer
              </p>
            </div>
            <div className="absolute bg-gradient-to-t from-black to-gray-400 w-full h-full -z-20 inset-0 bg-transparent"></div>
          </div>
          <div className="flex-none w-56 h-72 relative">
            <img
              src={teamMember}
              alt=""
              className="h-full w-full object-contain mix-blend-overlay  -z-10"
            />
            <div className="absolute bottom-0 inset-x-0 text-white p-2">
              {" "}
              <h5 className="text-center ">Jumoke Adesanya</h5>
              <p className="text-center text-sm text-white/70 ">
                Chief Executife Officer
              </p>
            </div>
            <div className="absolute bg-gradient-to-t from-black to-gray-400 w-full h-full -z-20 inset-0 bg-transparent"></div>
          </div>
          <div className="flex-none w-56 h-72 relative">
            <img
              src={teamMember}
              alt=""
              className="h-full w-full object-contain mix-blend-overlay  -z-10"
            />
            <div className="absolute bottom-0 inset-x-0 text-white p-2">
              {" "}
              <h5 className="text-center ">Jumoke Adesanya</h5>
              <p className="text-center text-sm text-white/70 ">
                Chief Executife Officer
              </p>
            </div>
            <div className="absolute bg-gradient-to-t from-black to-gray-400 w-full h-full -z-20 inset-0 bg-transparent"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
