import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.ocean";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);
const Bar3D = ({data}) => {
    const chartConfigs = {
        type: "bar3d",
        width: "100%",
        height: "400",
        dataFormat: "json",
        dataSource: {
            chart: {
                caption: "Languages",
                theme: "ocean",
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
                animateClockwise: 0
            },
            data
        }
    };
    return (<ReactFC {...chartConfigs} />);
}

export default Bar3D;