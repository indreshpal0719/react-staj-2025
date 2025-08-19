import BottomSheet from "../components/addTodo/BottomSheet";
import Header from "../components/addTodo/Header";
import TaskName from "../components/addTodo/TaskName";

const AddTodo = () => {
  return (
    <div className="bg-orange-100 h-screen">
      <Header />
      <TaskName />
      <BottomSheet />
    </div>
  );
};

export default AddTodo;
