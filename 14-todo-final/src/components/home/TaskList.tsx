import { Book, Ellipsis, Pizza } from "lucide-react";

const tasks = [
  {
    title: "Eat Breakfast",
    date: "Dec 25, 08.00 - 09.00",
    component: Pizza,
    color: "red",
  },
  {
    title: "Read a book",
    date: "Dec 25, 08.00 - 09.00",
    component: Book,
    color: "orange",
  },
];

const TaskList = () => {
  return (
    <div className="flex flex-col p-4 gap-4">
      <span className="text-2xl font-bold">Today</span>
      <div className="flex flex-col gap-4">
        {tasks.map((task) => {
          const textClassName =
            task.color === "red" ? "text-red-800" : "text-orange-800";
          const bgClassName =
            task.color === "red"
              ? "rounded-2xl p-4 bg-red-100"
              : "rounded-2xl p-4 bg-orange-100";
          return (
            <div className="flex bg-white p-4 rounded-xl gap-6 items-center">
              <div className={bgClassName}>
                <task.component className={textClassName} />
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-xl font-bold">{task.title}</span>
                <span className="text-sm text-gray-500">{task.date}</span>
              </div>
              <Ellipsis className="text-gray-500" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TaskList;
