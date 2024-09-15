import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "My orders",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: "AvgOrders",
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      options: {
        chart: {
          height: 300,
          type: "area",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2023-09-19T00:00:00.000Z",
            "2023-09-19T01:30:00.000Z",
            "2023-09-19T02:30:00.000Z",
            "2023-09-19T03:30:00.000Z",
            "2023-09-19T04:30:00.000Z",
            "2023-09-19T05:30:00.000Z",
            "2023-09-19T06:30:00.000Z",
          ],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
        title: {
          text: 'Orders Over Time',
          align: 'center',
          margin: 10,
          offsetY: 20,
          style: {
            fontSize:  '20px',
            fontWeight:  'bold',
            color:  '#333'
          },
        },
      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="area"
            height={350}
          />
        </div>
      </div>
    );
  }
}

export default ApexChart;
