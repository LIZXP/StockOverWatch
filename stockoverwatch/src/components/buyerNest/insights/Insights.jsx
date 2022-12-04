import React from "react";
import "./Insights.styles.scss";
/* eslint-disable */
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { marketDataOne, marketDataTwo } from "./marketData";

function Insights() {
  return (
    <div className="insight-container">
      <h1 className="big-title">Nest of Investment</h1>
      <div className="line-chart-container">
        <div className="one">
          {marketDataOne.map((data, i) => {
            const insightData = {
              labels: data.t,
              datasets: [
                {
                  label: data.name,
                  data: data.c,
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
              <>
                <Line
                  data={insightData}
                  options={{
                    scales: {
                      x: {
                        ticks: {
                          display: false,
                        },
                      },
                    },
                    elements: {
                      point: {
                        radius: 0,
                      },
                    },
                  }}
                />
              </>
            );
          })}
        </div>
        <div className="two">
          {marketDataTwo.map((data, i) => {
            const insightData = {
              labels: data.t,
              datasets: [
                {
                  label: data.name,
                  data: data.c,
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
              <>
                <Line
                  data={insightData}
                  options={{
                    scales: {
                      x: {
                        ticks: {
                          display: false,
                        },
                      },
                    },
                    elements: {
                      point: {
                        radius: 0,
                      },
                    },
                  }}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Insights;
