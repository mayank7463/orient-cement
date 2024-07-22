import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './Financial.css';
import ReadMoreButton from '../ReadMore/ReadMoreButton';
import { Link } from 'react-router-dom';

// Register necessary components and plugins
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const dataSetsConsolidated = [
  { label: 'Total income(₹ in Crore)', data: [2439.5, 2342.4, 2735.0, 2949.6, 3200.6], years: ['FY2020', 'FY2021', 'FY2022', 'FY2023', 'FY2024'] },
  { label: 'EBITDA(₹ in Crore)', data: [400.6, 569.0, 600.6, 376.6, 464.8], years: ['FY2020', 'FY2021', 'FY2022', 'FY2023', 'FY2024'] },
  { label: 'EBITDA margin(in %)', data: [16.4, 24.3, 22.0, 12.8, 14.6], years: ['FY2020', 'FY2021', 'FY2022', 'FY2023', 'FY2024'] },
  { label: 'PAT(₹ in Crore)', data: [86.6, 214.2, 263.3, 122.8, 174.9], years: ['FY2020', 'FY2021', 'FY2022', 'FY2023', 'FY2024'] },
  { label: 'Debt Equity Ratio(times)', data: [1.1, 0.6, 0.2, 0.2, 0.07], years: ['FY2020', 'FY2021', 'FY2022', 'FY2023', 'FY2024'] },
  { label: 'Return on capital employed( in %)', data: [11.1, 18.7, 21.8, 10.1, 14.3], years: ['FY2020', 'FY2021', 'FY2022', 'FY2023', 'FY2024'] },
  { label: 'Total Volume Sold(lacs metric tonnes)', data: [58, 51, 55, 58, 61], years: ['FY2020', 'FY2021', 'FY2022', 'FY2023', 'FY2024'] },
];

const Financial = () => {
  const renderCharts = (dataSets) => {
    return dataSets.map((dataset, index) => {
      const lastBarIndex = dataset.data.length - 1;
      const data = {
        labels: dataset.years,
        datasets: [
          {
            label: dataset.label,
            backgroundColor: dataset.data.map((_, i) => i === lastBarIndex ? 'rgba(255,255,255,1)' : 'rgba(220,221,222,1)'),
            borderColor: dataset.data.map((_, i) => i === lastBarIndex ? 'rgba(255,0,0,1)' : 'rgba(88,89,91,0)'),
            borderWidth: dataset.data.map((_, i) => i === lastBarIndex ? 2 : 0),
            hoverBackgroundColor: 'rgba(88,89,91,1)',
            hoverBorderColor: 'rgba(88,89,91,1)',
            borderRadius: 18, // Add rounded corners to bars
            data: dataset.data,
            barThickness: 20, // Adjust bar thickness for spacing
          },
        ],
      };

      const options = {
        indexAxis: 'x', // Make bars horizontal
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return context.raw;
              },
            },
          },
          datalabels: {
            anchor: 'end',
            align: 'end',
            formatter: (value) => value,
            color: 'black',
            font: {
              weight: 'bold',
            },
          },
        },
        scales: {
          x: {
            beginAtZero: true,
            ticks: {
              display: true, // Show the x-axis labels
            },
            grid: {
              display: false, // Remove x-axis grid lines
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              display: false, // Hide the y-axis labels
            },
            grid: {
              display: false, // Remove y-axis grid lines
            },
          },
        },
        layout: {
          padding: {
            top: 40,
            bottom: 35,
            left: 15,
            right: 15,
          },
        },
        maintainAspectRatio: false,
      };

      return (
        <div key={index} style={{ padding: '8px', height: '380px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h4 style={{ textAlign: 'center', marginBottom: '10px' }}>{dataset.label}</h4>
          <div style={{ flexGrow: 1, width: '80%' }}>
            <Bar data={data} options={options} />
          </div>
        </div>
      );
    });
  };

  return (
    <div className='marginal'>
      <h2 className='text-5xl text-center font-extrabold py-8 text-[#6d6e71] hero'><span className='text-[#ed1d24]'>Measuring our </span> performance</h2>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass=""
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3,
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        style={{ width: '70%' }} // Adjust the width as needed
      >
        {renderCharts(dataSetsConsolidated)}
      </Carousel>
      <div className='flex justify-center'>
        <Link to={"/Performance"}><ReadMoreButton/></Link>  
      </div>
    </div>
  );
};

export default Financial;
