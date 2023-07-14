// import { AiOutlineArrowRight } from "react-icons/ai";
import arrow from "../../../public/asset/image/arrow-r.svg";

type Props = {
  text: string;
};
const Button = ({ text }: Props) => {
  return (
    <button className="bg-main rounded-full py-2 px-6 text-white  duration-300 transition-all ease-in-out flex justify-between items-center cursor-pointer group w-fit">
      <span>{text}</span>
      <img
        src={arrow}
        alt="arrow right"
        className="text-white h-4 w-4 translate-x-0 group-hover:translate-x-2 ease-in-out transition-all duration-300 ml-2"
      />
      {/* <AiOutlineArrowRight className="text-white h-5 w-5 translate-x-0 group-hover:translate-x-2 ease-in-out transition-all duration-300" /> */}
    </button>
  );
};

export default Button;
