// rafce

import { LayoutGrid, Plus, SquareCheckBig, Timer, User } from "lucide-react";
import { NavLinkT } from "./NavLinkT";

const BottomNavigation = () => {
  const getClassName = ({ isActive }: { isActive: boolean }) => {
    return isActive ? "text-blue-900" : "text-slate-300";
  };

  const iconClassName = "hover:text-blue-900 transition";

  return (
    <div className="fixed bottom-0 w-full border-t-2 border-slate-100 shadow-2xl flex justify-around items-center py-4 bg-white">
      <NavLinkT to={"/"} className={getClassName}>
        <LayoutGrid className={iconClassName} />
      </NavLinkT>
      <NavLinkT to={"/timer"} className={getClassName}>
        <Timer className={iconClassName} />
      </NavLinkT>
      <NavLinkT
        to={"/addTodo"}
        className="bg-blue-900 rounded-full p-4 hover:bg-blue-800 "
      >
        <Plus color="white" />
      </NavLinkT>
      <NavLinkT to={"/reports"} className={getClassName}>
        <SquareCheckBig className={iconClassName} />
      </NavLinkT>
      <NavLinkT to={"/account"} className={getClassName}>
        <User className={iconClassName} />
      </NavLinkT>
    </div>
  );
};

export default BottomNavigation;
