import BottomSheet from "./components/BottomSheet";
import Header from "./components/Header";
import TaskName from "./components/TaskName";

const App = () => {
  return (
    <div className="bg-orange-100 h-screen">
      <Header />
      <TaskName />
      <BottomSheet />
    </div>
  );
};

export default App;
