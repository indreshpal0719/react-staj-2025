import type { ScriptableChartContext } from "chart.js";
import { Line } from "react-chartjs-2";

const ResultsChart = () => {
  const options = {
    responsive: true,
    scales: {
      x: {
        ticks: {
          color: "#ffffff99",
          display: true, // X ekseni yazılarını gizler
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
        min: 0,
        max: 12, // Buraya kadar ölçeklendir
        ticks: {
          color: "#ffffff99",
          display: true, // Y ekseni yazılarını gizler
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

  const labels = ["S", "M", "T", "W", "T", "F", "S"];
  const chartData = [4, 5, 5, 8, 7, 10, 8];
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Activity",
        data: chartData,
        borderColor: "#FFFFFF",
        tension: 0,
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
          gradient.addColorStop(0, "rgba(255, 255, 255, 255)"); // Brown ton
          gradient.addColorStop(0.7, "rgba(255, 255, 255, 0)"); // Şeffaf beyaz

          gradient.addColorStop(1, "rgba(255, 255, 255, 0)"); // Şeffaf beyaz

          return gradient as CanvasGradient;
        },
      },
    ],
  };

  return (
    <div className="bg-[#435297] rounded-xl max-w-[410px] p-4 flex flex-col mx-8 pb-32 ">
      <span className="text-2xl text-white">Results Activity</span>
      {/* @ts-expect-error: data type bilmiyoruz */}
      <Line options={options} data={data} />
    </div>
  );
};

export default ResultsChart;
