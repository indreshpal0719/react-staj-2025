import BottomNavigation from "./components/BottomNavigation";
import GridChart from "./components/GridChart";
import Header from "./components/Header";
import ResultsChart from "./components/ResultsChart";

const App = () => {
  return (
    <div className="h-screen bg-orange-100 flex flex-col gap-4">
      <Header />
      <GridChart />
      <ResultsChart />
      <BottomNavigation />
    </div>
  );
};

export default App;
