import paymentdesktop from "../../../public/asset/image/hackberry/payment/paymentdesktop.png";

import plana from "../../../public/asset/image/hackberry/payment/plana.png";
import planb from "../../../public/asset/image/hackberry/payment/planb.png";
import planc from "../../../public/asset/image/hackberry/payment/planc.png";

const Payment = () => {
  return (
    <>
      <div className="grid grid-cols-1 w-full h-full my-5 place-items-center">
        <img
          src={paymentdesktop}
          alt=""
          className=" hidden sm:block w-full h-full object-contain px-4 md:px-0"
        />
        <div className="flex sm:hidden flex-col justify-center items-center gap-y-6">
          <img src={plana} alt="" className="w-fit h-fit" />
          <img src={planb} alt="" className="w-fit h-fit" />
          <img src={planc} alt="" className="w-fit h-fit" />
        </div>
      </div>
    </>
  );
};

export default Payment;
