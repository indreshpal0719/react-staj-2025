import { ChevronLeft, ChevronRight } from "lucide-react";

const NavbarTitle = () => {
  return (
    <div className="flex text-3xl text-white items-center justify-between">
      <span> Tuesday 25, Dec </span>
      <div className="flex ">
        <ChevronLeft size={32} />
        <ChevronRight size={32} />
      </div>
    </div>
  );
};

export default NavbarTitle;
