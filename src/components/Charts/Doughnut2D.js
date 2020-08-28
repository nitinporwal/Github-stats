import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);
const Doughnut2D = ({data}) => {
    const chartConfigs = {
        type: "doughnut2d",
        width: "100%",
        height: "400",
        dataFormat: "json",
        dataSource: {
            chart: {
                caption: "Languages",
                theme: "candy",
                // showLegend: 1,
                // bgColor: "#FFFF00",
                // bgAlpha: 10,
                // showBorder: 1,
                // enableSmartLabels: "0",
                // startingAngle: "0",
                useDataPlotColorForLabels: "1",
                animation: 1,
                animationDuration: 2,
                alphaAnimation: 0,
                animateClockwise: 0,
                showPercentInToolTip: 1
            },
            data
        }
    };
    return (<ReactFC {...chartConfigs} />);
}

export default Doughnut2D;