import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

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

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [75, 25],
      backgroundColor: ["white", "#FFFFFF22"],
      borderWidth: 0,

      cutout: "90%",
    },
  ],
};

const CompleteChart = () => {
  return (
    <div className="bg-[#D13854] rounded-xl p-4 px-8 pb-6 h-44 gap-0 relative ">
      <span className="text-2xl text-white">Complete</span>
      <Doughnut className="p-4" options={options} data={data}></Doughnut>
      <div className="absolute inset-0 flex items-center justify-center text-xl font-bold top-12 left-4 text-white">
        <div className="flex flex-col items-center">
          <div className="flex justify-start">
            <span className="text-lg">75</span>
            <span className="text-xs text-[#FFFFFF99]">%</span>
          </div>
          <span className="text-xs text-[#FFFFFF99] -ml-4">24/35</span>
        </div>
      </div>
    </div>
  );
};

export default CompleteChart;
