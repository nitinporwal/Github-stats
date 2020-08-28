import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);
const ExampleChart = ({data}) => {
    const chartConfigs = {
        type: "pie3d",
        width: "400",
        height: "400",
        dataFormat: "json",
        dataSource: {
            chart: {
                caption: "Countries With Most Oil Reserves [2017-18]",
                subCaption: "In MMbbl = One Million barrels",
                xAxisName: "Country",
                yAxisName: "Reserves (MMbbl)",
                numberSuffix: "K",
                theme: "fusion"
            },
            data
        }
    };
    return (<ReactFC {...chartConfigs} />);
}

export default ExampleChart;