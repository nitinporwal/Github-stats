import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.ocean";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);
const Bar3D = ({ data }) => {
    const chartConfigs = {
        type: "bar3d",
        width: "100%",
        height: "400",
        dataFormat: "json",
        dataSource: {
            chart: {
                caption: "Most Forked",
                xAxisName: "Forks",
                yAxisName: "Stars",
                xAxisNameFontSize: "16px",
                yAxisNameFontSize: "16px",
                theme: "ocean",
                xAxisNameFontSize: 16,
                yAxisNameFontSize: 16,
                showCanvasBorder: 0,
                showAlternateVGridColor: 0,
                usePlotGradientColor: 0,
                valueFontSize: 16,
                placeValuesInside: 0,
                divLineColor: "#102a42",
                divLineAlpha: 15,
                captionFontColor: "#102a42",
                captionFontBold: 0,
                captionFontSize: 20,
                captionFont: "Roboto",
                baseFont: "Open Sans",
                baseFontSize: 12,
                baseFontColor: "#617d98",
                smartLineColor: "#617d98",
                showShadow: 0,
                showPlotBorder: 0,
                paletteColors: "#2caeba, #5D62B5, #FFC533, #F2726F, #8d6e63, #1de9b6, #6E80CA",
                bgColor: "#FFFFFF",
                showBorder: 0,
            },
            data
        }
    };
    return (<ReactFC {...chartConfigs} />);
}

export default Bar3D;