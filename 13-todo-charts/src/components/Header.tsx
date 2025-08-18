import { EllipsisVertical } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-8 pb-0">
      <span className="text-2xl font-">Data Report</span>
      <EllipsisVertical />
    </div>
  );
};

export default Header;
