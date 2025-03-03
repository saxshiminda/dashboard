"use client";
import dynamic from 'next/dynamic';
import 'chart.js/auto';

const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
  ssr: false,
});

const Bar = dynamic(() => import('react-chartjs-2').then((mod) => mod.Bar), {
    ssr: false,
});

const Doughnut = dynamic(() => import('react-chartjs-2').then((mod) => mod.Doughnut), {
    ssr: false,
});

const Pie = dynamic(() => import('react-chartjs-2').then((mod) => mod.Pie), {
  ssr: false,
});

const LineChartData = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'First',
      data: [65, 59, 80, 81, 56],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
    {
      label: 'Second',
      data: [15, 29, 30, 41, 56],
      fill: false,
      borderColor: 'rgb(97, 75, 192)',
    },
  ],
};

const BarChartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'GeeksforGeeks Bar Chart',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
};

const DoughnutChartData = {
    labels: ['Green', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'GeeksforGeeks Doughnut Chart',
        data: [300, 50, 100],
        backgroundColor: [
          'rgba(255, 169, 99, 0.2)',
          'rgba(169, 235, 54, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgb(255, 206, 99)',
          'rgba(54, 162, 235, 1)',
          'rgb(255, 86, 176)',
        ],
        borderWidth: 1,
      },
    ],
};

const PieChartData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'GeeksforGeeks Pie Chart',
        data: [300, 50, 100],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,  // This will let the chart adjust its size
};

const dashboard = () => {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 rounded-lg">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex items-center justify-center h-50 rounded-sm bg-gray-50 dark:bg-gray-800">
            <Line data={LineChartData} options={options}/>
          </div>
          <div className="flex items-center justify-center h-50 rounded-sm bg-gray-50 dark:bg-gray-800">
            <Pie data={PieChartData} options={options}/>
          </div>
          <div className="flex items-center justify-center h-50 rounded-sm bg-gray-50 dark:bg-gray-800">
            <Doughnut data={DoughnutChartData} options={options}/>
          </div>
        </div>

        <div className="flex items-center justify-center h-50 mb-4 rounded-sm bg-gray-50 dark:bg-gray-800 w-full">
          <Bar data={BarChartData} options={options}/>
        </div>
      </div>
    </div>
  );
};

export default dashboard;