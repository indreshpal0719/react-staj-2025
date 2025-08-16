// rafce

import { LayoutGrid, Plus, SquareCheckBig, Timer, User } from "lucide-react";

const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 w-full border-t-2 border-slate-100 shadow-2xl flex justify-around py-4 bg-white">
      <button>
        <LayoutGrid className="text-blue-900 hover:text-blue-800 transition cursor-pointer" />
      </button>
      <button>
        <Timer className="text-slate-300 hover:text-blue-900 transition cursor-pointer" />
      </button>
      <button className="bg-blue-900 rounded-full p-4 hover:bg-blue-800 cursor-pointer ">
        <Plus color="white" />
      </button>
      <button>
        <SquareCheckBig className="text-slate-300 hover:text-blue-900 transition cursor-pointer" />
      </button>
      <button>
        <User className="text-slate-300 hover:text-blue-900 transition cursor-pointer" />
      </button>
    </div>
  );
};

export default BottomNavigation;
