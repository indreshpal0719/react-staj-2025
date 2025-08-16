// rafce

import BottomNavigation from "./components/BottomNavigation";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import TomorrowPreview from "./components/TomorrowPreview";

const App = () => {
  return (
    <div className="bg-orange-50 pb-24">
      <Navbar />
      <TaskList />
      <TomorrowPreview />
      <BottomNavigation />
    </div>
  );
};

export default App;
