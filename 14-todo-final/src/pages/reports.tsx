import GridChart from "../components/reports/GridChart";
import Header from "../components/reports/Header";
import ResultsChart from "../components/reports/ResultsChart";

const Reports = () => {
  return (
    <div className="h-screen bg-orange-100 flex flex-col gap-4">
      <Header />
      <GridChart />
      <ResultsChart />
    </div>
  );
};

export default Reports;
