import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registering Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ twitterData }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (twitterData) {
      const categories = {
        Technology: twitterData?.technology || 0,
        Education: twitterData?.education || 0,
        Lifestyle: twitterData?.lifestyle || 0,
        Health: twitterData?.health || 0,
        Games: twitterData?.games || 0,
      };

      const updatedLabels = Object.keys(categories);
      const updatedValues = Object.values(categories);

      const categoryColors = {
        Technology: "#3498DB",
        Education: "#2ECC71",
        Lifestyle: "#E74C3C",
        Health: "#F39C12",
        Games: "#8E44AD",
      };

      const backgroundColors = updatedLabels.map(
        (category) => categoryColors[category] || "#BDC3C7"
      );

      setChartData({
        labels: updatedLabels,
        datasets: [
          {
            label: "Tweet Count by Category",
            data: updatedValues,
            backgroundColor: backgroundColors,
            borderColor: "#fff",
            borderWidth: 1,
          },
        ],
      });
    }
  }, [twitterData]);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Tweets by Category",
        font: {
          size: 18,
        },
        padding: {
          bottom: 20,
        },
      },
      tooltip: {
        backgroundColor: "#333",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "#fff",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Categories",
        },
        ticks: {
          font: {
            size: 14,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "Tweet Count",
        },
        beginAtZero: true,
        ticks: {
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div className="relative h-[700px] w-full">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
