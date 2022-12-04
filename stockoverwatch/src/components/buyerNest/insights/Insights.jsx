import React from "react";
import "./Insights.styles.scss";
/* eslint-disable */
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

function Insights() {
  const insightData = {
    labels: ["Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Investment",
        data: ["3000", "2000", "1000", "2000", "3000"],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="insight-container">
      <h1 className="big-title">Nest of Investment</h1>
      <div className="bar-chart-container">
        <Bar data={insightData} className="bar-chart" />
        <div className="invest-return">
          <h1>Returns</h1>
          <span>
            <p>Overall</p>
            <p>13.23%</p>
          </span>
          <span>
            <p>Overall</p>
            <p>13.23%</p>
          </span>
          <span>
            <p>Overall</p>
            <p>13.23%</p>
          </span>
        </div>
      </div>
      <div className="stocks-bought">
        <span className="catergories">Categories</span>
      </div>
    </div>
  );
}

export default Insights;
