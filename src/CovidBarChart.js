import React from "react";
import ReactApexChart from "react-apexcharts";

export default function CovidBarChart({ covidData, count }) {
  function getCountries() {
    return covidData.map((country) => country.country).slice(0, count);
  }

  function getSeries() {
    const series = [
      {
        name: "Total Deaths",
        data: [],
      },
      {
        name: "Total Cases",
        data: [],
      },
      {
        name: "Total Tests",
        data: [],
      },
    ];
    // covidData.forEach((country) => {
    //   series[0].data.push(country.deaths.total);
    //   series[1].data.push(country.cases.total);
    //   series[2].data.push(country.tests.total);
    // });
    if (covidData.length >= count) {
      for (let i = 0; i < count; i++) {
        series[0].data.push(covidData[i].deaths.total);
        series[1].data.push(covidData[i].cases.total);
        series[2].data.push(covidData[i].tests.total);
      }
    }

    return series;
  }
  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: getCountries(),
    },
    yaxis: {
      title: {
        text: "# count",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={getSeries()}
        type="bar"
        height={350}
      />
    </div>
  );
}
