import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function AttendancePieChart() {
  const data = {
    labels: ['Parents', 'Boys', 'Girls'],
    datasets: [
      {
        label: 'Number of Attendees',
        data: [1000, 2500, 1500],
        backgroundColor: [
          'rgba(255, 206, 86, 0.7)',     // Yellow for Parents
          'rgba(54, 162, 235, 0.7)',     // Blue for Boys
          'rgba(255, 99, 132, 0.7)',     // Pink/Red for Girls
        ],
        borderColor: [
          'rgba(255, 206, 86, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Event Attendance by Category (Total: 5,000)',
        font: {
          size: 18,
        },
      },
    },
  };

  return <Pie data={data} options={options} />;
}

export default AttendancePieChart;
