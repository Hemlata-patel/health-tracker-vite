import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

const TrackerChart = ({ data }) => {
  const chartData = {
    labels: data.map(entry => entry.date),
    datasets: [
      {
        label: 'Weight (kg)',
        data: data.map(entry => entry.weight),
        borderColor: 'blue',
        fill: false,
      },
      {
        label: 'Calories',
        data: data.map(entry => entry.calories),
        borderColor: 'orange',
        fill: false,
      }
    ]
  };

  return (
    <div className="chart">
      <Line data={chartData} />
    </div>
  );
};

export default TrackerChart;