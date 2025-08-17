import Categories from "./Categories";
import CreateTask from "./CreateTask";
import DueDate from "./DueDate";
import RemindMe from "./RemindMe";
import StartTime from "./StartTime";

const BottomSheet = () => {
  return (
    <div className="bg-white fixed p-8 w-full bottom-0 rounded-t-2xl h-[520px] border-t-slate-200 shadow">
      <DueDate />
      <StartTime />
      <RemindMe />
      <Categories />
      <CreateTask />
    </div>
  );
};

export default BottomSheet;
