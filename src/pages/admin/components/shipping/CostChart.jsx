import React from "react";
import ReactApexChart from "react-apexcharts";

class CostChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Cost",
          data: [281, 280, 288, 281, 282, 300, 290, 284, 289, 296, 287, 300],
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
          type: "month",
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
        title: {
          text: 'Shipping Cost Over Time',
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

export default CostChart;
