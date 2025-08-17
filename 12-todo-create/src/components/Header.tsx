import { ArrowLeft } from "lucide-react";
import bg from "../assets/ellipsis.png";

const Header = () => {
  return (
    <div className="px-8 pt-8 flex flex-col gap-4 overflow-y-hidden">
      <div
        className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px]"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: 300,
        }}
      />
      <ArrowLeft />
      <span className="text-3xl flex flex-col gap-1">
        <span>Create</span>
        <span>New Task</span>
      </span>
    </div>
  );
};

export default Header;
