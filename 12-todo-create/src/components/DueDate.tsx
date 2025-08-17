import { Calendar } from "lucide-react";

const DueDate = () => {
  return (
    <div className="flex flex-col gap-1 pb-8 relative">
      <span className="text-slate-400">Date</span>
      <input
        type="text"
        className="border-b-1 text-2xl border-gray-500"
        placeholder="Date"
        value="Tuesday 25, December"
      />
      <Calendar className="absolute right-0 top-8 text-blue-900" />
    </div>
  );
};

export default DueDate;
