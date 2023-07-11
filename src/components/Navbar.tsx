import logo from "../../public/asset/image/logo.png";
const Navbar = () => {
  return (
    <div className="text-white font-mont flex justify-between items-center mt-10">
      <img src={logo} className="h-fit w-20" alt="dallasville logo" />
      <nav className="hidden md:block">
        <ul className="flex justify-between items-center gap-10 cursor-pointer">
          <li>Home</li>
          <li>About Us</li>
          <li>Projects</li>
          <li className="bg-white rounded-full p-1 px-3 text-slate-950 hover:bg-white/70 duration-300 transition-all ease-in-out">
            Schedule Appointment
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
