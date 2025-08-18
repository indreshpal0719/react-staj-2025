import AllActivityChart from "./AllActivityChart";
import CompleteChart from "./CompleteChart";
import MissingChart from "./MissingChart";
import OnTimeChart from "./OnTimeChart";

const GridChart = () => {
  return (
    <div className="px-8 flex flex-col gap-4">
      <div className="flex gap-4">
        <AllActivityChart />
        <CompleteChart />
      </div>

      <div className="flex gap-4">
        <MissingChart />
        <OnTimeChart />
      </div>
    </div>
  );
};

export default GridChart;
