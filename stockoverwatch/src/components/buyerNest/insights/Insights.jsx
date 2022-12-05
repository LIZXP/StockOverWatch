import React, { Fragment } from "react";
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
                  borderColor: "rgb(37, 171, 62)",
                  fill: true,
                },
              ],
            };
            return (
              <Fragment key={i}>
                <Line
                  data={insightData}
                  options={{
                    scales: {
                      x: {
                        ticks: {
                          display: false,
                        },
                      },
                      y: {
                        ticks: {
                          color: "white",
                        },
                      },
                    },
                    elements: {
                      point: {
                        radius: 0,
                      },
                    },
                  }}
                  className="line-chart-one"
                />
              </Fragment>
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
                  borderColor: "rgb(37, 171, 62)",
                  color: "rgb(245, 245, 245)",
                  fill: true,
                },
              ],
            };
            return (
              <Fragment key={i}>
                <Line
                  data={insightData}
                  options={{
                    scales: {
                      x: {
                        ticks: {
                          display: false,
                        },
                      },
                      y: {
                        ticks: {
                          color: "white",
                        },
                      },
                    },
                    elements: {
                      point: {
                        radius: 0,
                      },
                    },
                    plugins: {
                      legend: {
                        labels: {
                          color: "white",
                        },
                      },
                    },
                  }}
                  className="line-chart-two"
                />
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Insights;
