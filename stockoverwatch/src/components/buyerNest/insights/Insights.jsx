import React from "react";
import "./Insights.styles.scss";
/* eslint-disable */
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

function Insights() {
  marketData = [
    {
      name: "S&P 500",
      t: [
        "7/1/2022",
        "7/5/2022",
        "7/6/2022",
        "7/7/2022",
        "7/8/2022",
        "7/11/2022",
        "7/12/2022",
        "7/13/2022",
        "7/14/2022",
        "7/15/2022",
        "7/18/2022",
        "7/19/2022",
        "7/20/2022",
        "7/21/2022",
        "7/22/2022",
        "7/25/2022",
        "7/26/2022",
        "7/27/2022",
        "7/28/2022",
        "7/29/2022",
        "8/1/2022",
        "8/2/2022",
        "8/3/2022",
        "8/4/2022",
        "8/5/2022",
        "8/8/2022",
        "8/9/2022",
        "8/10/2022",
        "8/11/2022",
        "8/12/2022",
        "8/15/2022",
        "8/16/2022",
        "8/17/2022",
        "8/18/2022",
        "8/19/2022",
        "8/22/2022",
        "8/23/2022",
        "8/24/2022",
        "8/25/2022",
        "8/26/2022",
        "8/29/2022",
        "8/30/2022",
        "8/31/2022",
        "9/1/2022",
        "9/2/2022",
        "9/6/2022",
        "9/7/2022",
        "9/8/2022",
        "9/9/2022",
        "9/12/2022",
        "9/13/2022",
        "9/14/2022",
        "9/15/2022",
        "9/16/2022",
        "9/19/2022",
        "9/20/2022",
        "9/21/2022",
        "9/22/2022",
        "9/23/2022",
        "9/26/2022",
        "9/27/2022",
        "9/28/2022",
        "9/29/2022",
        "9/30/2022",
        "10/3/2022",
        "10/4/2022",
        "10/5/2022",
        "10/6/2022",
        "10/7/2022",
        "10/10/2022",
        "10/11/2022",
        "10/12/2022",
        "10/13/2022",
        "10/14/2022",
        "10/17/2022",
        "10/18/2022",
        "10/19/2022",
        "10/20/2022",
        "10/21/2022",
        "10/24/2022",
        "10/25/2022",
        "10/26/2022",
        "10/27/2022",
        "10/28/2022",
        "10/31/2022",
        "11/1/2022",
        "11/2/2022",
        "11/3/2022",
        "11/4/2022",
        "11/7/2022",
        "11/8/2022",
      ],
      c: [
        "3825.330078",
        "3831.389893",
        "3845.080078",
        "3902.620117",
        "3899.379883",
        "3854.429932",
        "3818.800049",
        "3801.780029",
        "3790.379883",
        "3863.159912",
        "3830.850098",
        "3936.689941",
        "3959.899902",
        "3998.949951",
        "3961.629883",
        "3966.840088",
        "3921.050049",
        "4023.610107",
        "4072.429932",
        "4130.290039",
        "4118.629883",
        "4091.189941",
        "4155.169922",
        "4151.939941",
        "4145.189941",
        "4140.060059",
        "4122.470215",
        "4210.240234",
        "4207.27002",
        "4280.149902",
        "4297.140137",
        "4305.200195",
        "4274.040039",
        "4283.740234",
        "4228.47998",
        "4137.990234",
        "4128.72998",
        "4140.77002",
        "4199.120117",
        "4057.659912",
        "4030.610107",
        "3986.159912",
        "3955",
        "3966.850098",
        "3924.26001",
        "3908.189941",
        "3979.870117",
        "4006.179932",
        "4067.360107",
        "4110.410156",
        "3932.689941",
        "3946.01001",
        "3901.350098",
        "3873.330078",
        "3899.889893",
        "3855.929932",
        "3789.929932",
        "3757.98999",
        "3693.22998",
        "3655.040039",
        "3647.290039",
        "3719.040039",
        "3640.469971",
        "3585.620117",
        "3678.429932",
        "3790.929932",
        "3783.280029",
        "3744.52002",
        "3639.659912",
        "3612.389893",
        "3588.840088",
        "3577.030029",
        "3669.909912",
        "3583.070068",
        "3677.949951",
        "3719.97998",
        "3695.159912",
        "3665.780029",
        "3752.75",
        "3797.340088",
        "3859.110107",
        "3830.600098",
        "3807.300049",
        "3901.060059",
        "3871.97998",
        "3856.100098",
        "3759.689941",
        "3719.889893",
        "3770.550049",
        "3806.800049",
        "3814.600098",
      ],
    },
    {
      name: "Nasdaq",
      t: [
        "7/1/2022",
        "7/5/2022",
        "7/6/2022",
        "7/7/2022",
        "7/8/2022",
        "7/11/2022",
        "7/12/2022",
        "7/13/2022",
        "7/14/2022",
        "7/15/2022",
        "7/18/2022",
        "7/19/2022",
        "7/20/2022",
        "7/21/2022",
        "7/22/2022",
        "7/25/2022",
        "7/26/2022",
        "7/27/2022",
        "7/28/2022",
        "7/29/2022",
        "8/1/2022",
        "8/2/2022",
        "8/3/2022",
        "8/4/2022",
        "8/5/2022",
        "8/8/2022",
        "8/9/2022",
        "8/10/2022",
        "8/11/2022",
        "8/12/2022",
        "8/15/2022",
        "8/16/2022",
        "8/17/2022",
        "8/18/2022",
        "8/19/2022",
        "8/22/2022",
        "8/23/2022",
        "8/24/2022",
        "8/25/2022",
        "8/26/2022",
        "8/29/2022",
        "8/30/2022",
        "8/31/2022",
        "9/1/2022",
        "9/2/2022",
        "9/6/2022",
        "9/7/2022",
        "9/8/2022",
        "9/9/2022",
        "9/12/2022",
        "9/13/2022",
        "9/14/2022",
        "9/15/2022",
        "9/16/2022",
        "9/19/2022",
        "9/20/2022",
        "9/21/2022",
        "9/22/2022",
        "9/23/2022",
        "9/26/2022",
        "9/27/2022",
        "9/28/2022",
        "9/29/2022",
        "9/30/2022",
        "10/3/2022",
        "10/4/2022",
        "10/5/2022",
        "10/6/2022",
        "10/7/2022",
        "10/10/2022",
        "10/11/2022",
        "10/12/2022",
        "10/13/2022",
        "10/14/2022",
        "10/17/2022",
        "10/18/2022",
        "10/19/2022",
        "10/20/2022",
        "10/21/2022",
        "10/24/2022",
        "10/25/2022",
        "10/26/2022",
        "10/27/2022",
        "10/28/2022",
        "10/31/2022",
        "11/1/2022",
        "11/2/2022",
        "11/3/2022",
        "11/4/2022",
        "11/7/2022",
        "11/8/2022",
      ],
      c: [
        "11127.84961",
        "11322.24023",
        "11361.84961",
        "11621.34961",
        "11635.30957",
        "11372.59961",
        "11264.73047",
        "11247.58008",
        "11251.19043",
        "11452.41992",
        "11360.0498",
        "11713.15039",
        "11897.65039",
        "12059.61035",
        "11834.11035",
        "11782.66992",
        "11562.57031",
        "12032.41992",
        "12162.58984",
        "12390.69043",
        "12368.98047",
        "12348.75977",
        "12668.16016",
        "12720.58008",
        "12657.5498",
        "12644.45996",
        "12493.92969",
        "12854.7998",
        "12779.91016",
        "13047.19043",
        "13128.0498",
        "13102.5498",
        "12938.12012",
        "12965.33984",
        "12705.21973",
        "12381.57031",
        "12381.2998",
        "12431.53027",
        "12639.26953",
        "12141.70996",
        "12017.66992",
        "11883.13965",
        "11816.2002",
        "11785.12988",
        "11630.86035",
        "11544.91016",
        "11791.90039",
        "11862.12988",
        "12112.30957",
        "12266.41016",
        "11633.57031",
        "11719.67969",
        "11552.36035",
        "11448.40039",
        "11535.01953",
        "11425.0498",
        "11220.19043",
        "11066.80957",
        "10867.92969",
        "10802.91992",
        "10829.5",
        "11051.63965",
        "10737.50977",
        "10575.62012",
        "10815.42969",
        "11176.41016",
        "11148.63965",
        "11073.30957",
        "10652.40039",
        "10542.09961",
        "10426.19043",
        "10417.09961",
        "10649.15039",
        "10321.38965",
        "10675.7998",
        "10772.40039",
        "10680.50977",
        "10614.83984",
        "10859.71973",
        "10952.61035",
        "11199.12012",
        "10970.99023",
        "10792.66992",
        "11102.4502",
        "10988.15039",
        "10890.84961",
        "10524.7998",
        "10342.94043",
        "10475.25",
        "10564.51953",
        "10553.16797",
      ],
    },
    {
      name: "",
      t: [
        "7/1/2022",
        "7/5/2022",
        "7/6/2022",
        "7/7/2022",
        "7/8/2022",
        "7/11/2022",
        "7/12/2022",
        "7/13/2022",
        "7/14/2022",
        "7/15/2022",
        "7/18/2022",
        "7/19/2022",
        "7/20/2022",
        "7/21/2022",
        "7/22/2022",
        "7/25/2022",
        "7/26/2022",
        "7/27/2022",
        "7/28/2022",
        "7/29/2022",
        "8/1/2022",
        "8/2/2022",
        "8/3/2022",
        "8/4/2022",
        "8/5/2022",
        "8/8/2022",
        "8/9/2022",
        "8/10/2022",
        "8/11/2022",
        "8/12/2022",
        "8/15/2022",
        "8/16/2022",
        "8/17/2022",
        "8/18/2022",
        "8/19/2022",
        "8/22/2022",
        "8/23/2022",
        "8/24/2022",
        "8/25/2022",
        "8/26/2022",
        "8/29/2022",
        "8/30/2022",
        "8/31/2022",
        "9/1/2022",
        "9/2/2022",
        "9/6/2022",
        "9/7/2022",
        "9/8/2022",
        "9/9/2022",
        "9/12/2022",
        "9/13/2022",
        "9/14/2022",
        "9/15/2022",
        "9/16/2022",
        "9/19/2022",
        "9/20/2022",
        "9/21/2022",
        "9/22/2022",
        "9/23/2022",
        "9/26/2022",
        "9/27/2022",
        "9/28/2022",
        "9/29/2022",
        "9/30/2022",
        "10/3/2022",
        "10/4/2022",
        "10/5/2022",
        "10/6/2022",
        "10/7/2022",
        "10/10/2022",
        "10/11/2022",
        "10/12/2022",
        "10/13/2022",
        "10/14/2022",
        "10/17/2022",
        "10/18/2022",
        "10/19/2022",
        "10/20/2022",
        "10/21/2022",
        "10/24/2022",
        "10/25/2022",
        "10/26/2022",
        "10/27/2022",
        "10/28/2022",
        "10/31/2022",
        "11/1/2022",
        "11/2/2022",
        "11/3/2022",
        "11/4/2022",
        "11/7/2022",
        "11/8/2022",
      ],
      c: [],
    },
    {
      name: "",
      t: [
        "7/1/2022",
        "7/5/2022",
        "7/6/2022",
        "7/7/2022",
        "7/8/2022",
        "7/11/2022",
        "7/12/2022",
        "7/13/2022",
        "7/14/2022",
        "7/15/2022",
        "7/18/2022",
        "7/19/2022",
        "7/20/2022",
        "7/21/2022",
        "7/22/2022",
        "7/25/2022",
        "7/26/2022",
        "7/27/2022",
        "7/28/2022",
        "7/29/2022",
        "8/1/2022",
        "8/2/2022",
        "8/3/2022",
        "8/4/2022",
        "8/5/2022",
        "8/8/2022",
        "8/9/2022",
        "8/10/2022",
        "8/11/2022",
        "8/12/2022",
        "8/15/2022",
        "8/16/2022",
        "8/17/2022",
        "8/18/2022",
        "8/19/2022",
        "8/22/2022",
        "8/23/2022",
        "8/24/2022",
        "8/25/2022",
        "8/26/2022",
        "8/29/2022",
        "8/30/2022",
        "8/31/2022",
        "9/1/2022",
        "9/2/2022",
        "9/6/2022",
        "9/7/2022",
        "9/8/2022",
        "9/9/2022",
        "9/12/2022",
        "9/13/2022",
        "9/14/2022",
        "9/15/2022",
        "9/16/2022",
        "9/19/2022",
        "9/20/2022",
        "9/21/2022",
        "9/22/2022",
        "9/23/2022",
        "9/26/2022",
        "9/27/2022",
        "9/28/2022",
        "9/29/2022",
        "9/30/2022",
        "10/3/2022",
        "10/4/2022",
        "10/5/2022",
        "10/6/2022",
        "10/7/2022",
        "10/10/2022",
        "10/11/2022",
        "10/12/2022",
        "10/13/2022",
        "10/14/2022",
        "10/17/2022",
        "10/18/2022",
        "10/19/2022",
        "10/20/2022",
        "10/21/2022",
        "10/24/2022",
        "10/25/2022",
        "10/26/2022",
        "10/27/2022",
        "10/28/2022",
        "10/31/2022",
        "11/1/2022",
        "11/2/2022",
        "11/3/2022",
        "11/4/2022",
        "11/7/2022",
        "11/8/2022",
      ],
      c: [],
    },
    {
      name: "",
      t: [
        "7/1/2022",
        "7/5/2022",
        "7/6/2022",
        "7/7/2022",
        "7/8/2022",
        "7/11/2022",
        "7/12/2022",
        "7/13/2022",
        "7/14/2022",
        "7/15/2022",
        "7/18/2022",
        "7/19/2022",
        "7/20/2022",
        "7/21/2022",
        "7/22/2022",
        "7/25/2022",
        "7/26/2022",
        "7/27/2022",
        "7/28/2022",
        "7/29/2022",
        "8/1/2022",
        "8/2/2022",
        "8/3/2022",
        "8/4/2022",
        "8/5/2022",
        "8/8/2022",
        "8/9/2022",
        "8/10/2022",
        "8/11/2022",
        "8/12/2022",
        "8/15/2022",
        "8/16/2022",
        "8/17/2022",
        "8/18/2022",
        "8/19/2022",
        "8/22/2022",
        "8/23/2022",
        "8/24/2022",
        "8/25/2022",
        "8/26/2022",
        "8/29/2022",
        "8/30/2022",
        "8/31/2022",
        "9/1/2022",
        "9/2/2022",
        "9/6/2022",
        "9/7/2022",
        "9/8/2022",
        "9/9/2022",
        "9/12/2022",
        "9/13/2022",
        "9/14/2022",
        "9/15/2022",
        "9/16/2022",
        "9/19/2022",
        "9/20/2022",
        "9/21/2022",
        "9/22/2022",
        "9/23/2022",
        "9/26/2022",
        "9/27/2022",
        "9/28/2022",
        "9/29/2022",
        "9/30/2022",
        "10/3/2022",
        "10/4/2022",
        "10/5/2022",
        "10/6/2022",
        "10/7/2022",
        "10/10/2022",
        "10/11/2022",
        "10/12/2022",
        "10/13/2022",
        "10/14/2022",
        "10/17/2022",
        "10/18/2022",
        "10/19/2022",
        "10/20/2022",
        "10/21/2022",
        "10/24/2022",
        "10/25/2022",
        "10/26/2022",
        "10/27/2022",
        "10/28/2022",
        "10/31/2022",
        "11/1/2022",
        "11/2/2022",
        "11/3/2022",
        "11/4/2022",
        "11/7/2022",
        "11/8/2022",
      ],
      c: [],
    },
    {
      name: "",
      t: [
        "7/1/2022",
        "7/5/2022",
        "7/6/2022",
        "7/7/2022",
        "7/8/2022",
        "7/11/2022",
        "7/12/2022",
        "7/13/2022",
        "7/14/2022",
        "7/15/2022",
        "7/18/2022",
        "7/19/2022",
        "7/20/2022",
        "7/21/2022",
        "7/22/2022",
        "7/25/2022",
        "7/26/2022",
        "7/27/2022",
        "7/28/2022",
        "7/29/2022",
        "8/1/2022",
        "8/2/2022",
        "8/3/2022",
        "8/4/2022",
        "8/5/2022",
        "8/8/2022",
        "8/9/2022",
        "8/10/2022",
        "8/11/2022",
        "8/12/2022",
        "8/15/2022",
        "8/16/2022",
        "8/17/2022",
        "8/18/2022",
        "8/19/2022",
        "8/22/2022",
        "8/23/2022",
        "8/24/2022",
        "8/25/2022",
        "8/26/2022",
        "8/29/2022",
        "8/30/2022",
        "8/31/2022",
        "9/1/2022",
        "9/2/2022",
        "9/6/2022",
        "9/7/2022",
        "9/8/2022",
        "9/9/2022",
        "9/12/2022",
        "9/13/2022",
        "9/14/2022",
        "9/15/2022",
        "9/16/2022",
        "9/19/2022",
        "9/20/2022",
        "9/21/2022",
        "9/22/2022",
        "9/23/2022",
        "9/26/2022",
        "9/27/2022",
        "9/28/2022",
        "9/29/2022",
        "9/30/2022",
        "10/3/2022",
        "10/4/2022",
        "10/5/2022",
        "10/6/2022",
        "10/7/2022",
        "10/10/2022",
        "10/11/2022",
        "10/12/2022",
        "10/13/2022",
        "10/14/2022",
        "10/17/2022",
        "10/18/2022",
        "10/19/2022",
        "10/20/2022",
        "10/21/2022",
        "10/24/2022",
        "10/25/2022",
        "10/26/2022",
        "10/27/2022",
        "10/28/2022",
        "10/31/2022",
        "11/1/2022",
        "11/2/2022",
        "11/3/2022",
        "11/4/2022",
        "11/7/2022",
        "11/8/2022",
      ],
      c: [],
    },
  ];

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
