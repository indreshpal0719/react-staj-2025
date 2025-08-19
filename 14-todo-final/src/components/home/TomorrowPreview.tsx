import bgStripes from "../../assets/bg-stripes.png";

const tasks = [
  {
    title: "Do the homework",
  },
  {
    title: "Have lunch",
  },
  {
    title: "Monday DIY",
  },
];

const TaskList = () => {
  return (
    <div className="flex flex-col p-4 gap-4">
      <span className="text-2xl font-bold">Tomorrow</span>
      <div className="flex gap-4">
        {tasks.map((task) => (
          <div
            className="bg-white rounded-2xl p-6 h-36 w-36"
            style={{
              backgroundImage: `url(${bgStripes})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <span className="text-xl font-semibold">{task.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
