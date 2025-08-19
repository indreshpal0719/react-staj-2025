import { Plus } from "lucide-react";

const CreateTask = () => {
  return (
    <div className="bg-blue-900 p-4 rounded-2xl text-white mt-4 flex justify-center">
      <div className="flex gap-2 items-center">
        <div className="bg-white/10 rounded-full p-1">
          <Plus />
        </div>

        <span className="text-xl">Create Task</span>
      </div>
    </div>
  );
};

export default CreateTask;
