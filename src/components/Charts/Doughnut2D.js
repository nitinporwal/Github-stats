import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);
const Doughnut2D = ({ data }) => {
    const chartConfigs = {
        type: "doughnut2d",
        width: "100%",
        height: "400",
        dataFormat: "json",
        dataSource: {
            chart: {
                theme: "candy",
                caption: "Stars Per Language",
                decimals: 0,
                pieRadius: "45%",
                doughnutRadius: "60%",
                showPercentValues: 0,
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
                paletteColors: "#2caeba, #5D62B5, #FFC533, #F2726F, #8d6e63, #1de9b6, #6E80CA",
                use3DLighting: 0,
                useDataPlotColorForLabels: 0,
                bgColor: "#FFFFFF",
                showBorder: 0,
            },
            data
        }
    };
    return (<ReactFC {...chartConfigs} />);
}

export default Doughnut2D;