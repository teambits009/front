import React from "react";
import ReactApexChart from "react-apexcharts";

class DonutApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [55, 44, 41, 17],
      options: {
        chart: {
          type: 'donut',
          height: 400, 
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
        labels: ['orders', 'pending', 'Completed', 'ccancelled', ] 
      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="donut" />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default DonutApexChart;
