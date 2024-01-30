import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Chart as ChartJS, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import selectors from "../../redux/selectors";
import operations from "../../redux/operations";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(...registerables, ChartDataLabels);

const { selectWeatherForWeek, selectLocation } = selectors;
const { fetchWeatherForWeek } = operations;

const WeatherChart = ({ temperature }) => {
  const dispatch = useDispatch();
  const weatherData = useSelector(selectWeatherForWeek);
  const { lat, lon } = useSelector(selectLocation);

  useEffect(() => {
    if (lat && lon) {
      dispatch(fetchWeatherForWeek({ lat, lon }));
    }
  }, [dispatch, lat, lon]);

  const labels = weatherData.map((item) => {
    const date = new Date(item.dt * 1000);
    return date.toLocaleTimeString("uk-UA", {
      hour: "2-digit",
      minute: "2-digit",
    });
  });

  const temperatures = weatherData.map((item) =>
    (item.temp - 273.15).toFixed(0)
  );

  const getTemperatureColor = (tempInCelsius) => {
    return tempInCelsius <= 0
      ? "rgba(91, 140, 255, 0.4)"
      : "rgba(255, 162, 91, 0.4)";
  };

  const chartColor = getTemperatureColor(temperature);

  const data = {
    labels,
    datasets: [
      {
        data: temperatures,
        fill: true,
        borderColor: chartColor,
        backgroundColor: `${chartColor}`,
        tension: 0.3,
        borderWidth: 1,
        pointRadius: 1,
        pointBackgroundColor: chartColor,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          display: true,
          font: {
            size: 8,
            family: "Jost",
          },
        },
      },
      y: {
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: "#000000",
        display: true,
        font: {
          size: 8,
          family: "Jost",
        },
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: "100%", height: "95px" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default WeatherChart;
