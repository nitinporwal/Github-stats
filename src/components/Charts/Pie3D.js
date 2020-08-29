import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.ocean";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);
const Pie3D = ({data}) => {
    const chartConfigs = {
        type: "pie3d",
        width: "100%",
        height: "400",
        dataFormat: "json",
        dataSource: {
            chart: {
                caption: "Languages",
                theme: "ocean",
                useDataPlotColorForLabels: "1",
                animation: 1,
                animationDuration: 1,
                alphaAnimation: 0,
                animateClockwise: 0,
                showPercentInToolTip: 1,
                captionFontColor: "#102a42",
                captionFontBold: 0,
                captionFontSize: 20,
                captionFont: "Roboto",
                baseFont: "Open Sans",
                baseFontSize: 16,
                baseFontColor: "#617d98",
                smartLineColor: "#617d98",
                showShadow: 0,
                showPlotBorder: 0,
                paletteColors:
                  "#2caeba, #5D62B5, #FFC533, #F2726F, #8d6e63, #1de9b6, #6E80CA",
                use3DLighting: 0,
                useDataPlotColorForLabels: 0,
                bgColor: "#FFFFFF",
                showBorder: 0,
                decimals: 0,
                pieRadius: "45%",
            },
            data
        }
    };
    return (<ReactFC {...chartConfigs} />);
}

export default Pie3D;