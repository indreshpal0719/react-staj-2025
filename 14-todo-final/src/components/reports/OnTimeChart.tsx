import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const OnTimeChart = () => {
  const options = {
    responsive: true,
    scales: {
      x: {
        ticks: {
          display: false, // X ekseni yazılarını gizler
        },
        grid: {
          display: false, // X ekseni çizgileri gizlenir
          drawBorder: false, // eksen çizgisi
        },
        border: {
          display: false, // yeni Chart.js versiyonları için eksen çizgisi
        },
      },
      y: {
        min: 140,
        max: 600, // Buraya kadar ölçeklendir
        ticks: {
          display: false, // Y ekseni yazılarını gizler
        },
        grid: {
          display: false, // X ekseni çizgileri gizlenir
          drawBorder: false, // eksen çizgisi
        },
        border: {
          display: false, // yeni Chart.js versiyonları için eksen çizgisi
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        position: "top" as const,
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = ["January", "February", "March"];
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [300, 340, 400],
        backgroundColor: "#46518F",
        borderRadius: 3, // <-- Bar köşe yumuşatma
        barThickness: 10, // <-- Bar kalınlığı
        categoryPercentage: 0.1,
      },
      {
        label: "Dataset 2",
        data: [340, 340, 420],
        backgroundColor: "#D1D3E8",
        borderRadius: 3, // <-- Bar köşe yumuşatma
        barThickness: 10, // <-- Bar kalınlığı
        categoryPercentage: 0.1,
      },
    ],
  };

  return (
    <div className="bg-white rounded-xl p-4 w-48 ">
      <span className="text-2xl">On Time</span>
      <Bar options={options} data={data} />
      <div className="flex items-center gap-2">
        <span className="text-2xl">35</span>
        <span className="text-slate-400">Activity</span>
      </div>
    </div>
  );
};

export default OnTimeChart;
