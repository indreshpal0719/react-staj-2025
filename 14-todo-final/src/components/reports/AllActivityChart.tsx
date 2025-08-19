import type { ScriptableChartContext } from "chart.js";
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const AllActivityChart = () => {
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

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const chartData = [250, 380, 295, 403, 455, 362, 510];
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Activity",
        data: chartData,
        borderColor: "#E2C8B7",
        tension: 0.4,
        pointRadius: 0,
        backgroundColor: (context: ScriptableChartContext) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return null;
          }

          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, "oklch(90.1% 0.076 70.697)"); // Brown ton
          gradient.addColorStop(0.5, "oklch(90.1% 0.076 70.697)"); // Brown ton
          gradient.addColorStop(1, "rgba(255, 255, 255, 0)"); // Şeffaf beyaz

          return gradient as CanvasGradient;
        },
      },
    ],
  };

  return (
    <div className="bg-white rounded-xl p-4 w-48 ">
      <span className="text-2xl">All Activity</span>
      {/* @ts-expect-error: data type bilmiyoruz */}
      <Line options={options} data={data} />
      <div className="flex items-center gap-2">
        <span className="text-2xl">52</span>
        <span className="text-slate-400">Activity</span>
      </div>
    </div>
  );
};

export default AllActivityChart;
