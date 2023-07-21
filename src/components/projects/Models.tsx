import model from "../../../public/asset/image/hackberry/3d/model.jpg";
import modelTwo from "../../../public/asset/image/hackberry/3d/modelTwo.jpg";
import modelThree from "../../../public/asset/image/hackberry/3d/modelThree.jpg";
import modelFour from "../../../public/asset/image/hackberry/3d/modelFour.jpg";
import modelFive from "../../../public/asset/image/hackberry/3d/modelFive.jpg";
import modelSix from "../../../public/asset/image/hackberry/3d/modelSix.jpg";
import modelSeven from "../../../public/asset/image/hackberry/3d/modelSeven.jpg";
import modelEight from "../../../public/asset/image/hackberry/3d/modelEight.jpg";

const Models = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2 mb-8">
        <div className="w-full h-full  rounded-xl">
          <img
            src={model}
            alt="hackberry model estate"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className=" w-full h-full  rounded-xl grid md:grid-cols-2 gap-2">
          <div className=" w-full h-full rounded-xl">
            <img
              src={modelTwo}
              alt="hackberry model estate"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className=" w-full h-full rounded-xl">
            <img
              src={modelThree}
              alt="hackberry model estate"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className=" w-full h-full rounded-xl md:col-span-2">
            <img
              src={modelFour}
              alt="hackberry model estate"
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2 mb-8">
        <div className=" w-full h-full rounded-xl">
          <img
            src={modelFive}
            alt="hackberry model estate"
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
        <div className=" w-full h-full rounded-xl">
          <img
            src={modelSix}
            alt="hackberry model estate"
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-5 grid-cols-1 gap-2 mb-8">
        <div className=" w-full h-full  rounded-xl md:col-span-3">
          {" "}
          <img
            src={modelSeven}
            alt="hackberry model estate"
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
        <div className=" w-full h-full  rounded-xl md:col-span-2">
          <img
            src={modelEight}
            alt="hackberry model estate"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </>
  );
};

export default Models;
