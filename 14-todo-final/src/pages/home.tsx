import Navbar from "../components/home/Navbar";
import TaskList from "../components/home/TaskList";
import TomorrowPreview from "../components/home/TomorrowPreview";

const Home = () => {
  return (
    <div className="bg-orange-50 pb-24">
      <Navbar />
      <TaskList />
      <TomorrowPreview />
    </div>
  );
};

export default Home;
