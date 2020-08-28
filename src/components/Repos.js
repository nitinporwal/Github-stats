import React, { Component, useContext } from 'react';
import { GithubContext } from '../context/context';
import { ExampleChart, Pie3D, Column3D, Doughnut2D, Bar3D } from './Charts';

const Repos = () => {
    const { repos } = useContext(GithubContext);
    const chartData = [
        {
            label: "HTML",
            value: "13"
        },
        {
            label: "CSS",
            value: "28"
        },
        {
            label: "Javascript",
            value: "80"
        }
    ];
    return (
        <section>
            <Pie3D data={chartData} />
            <Column3D data={chartData} />
            <Doughnut2D data={chartData} />
            <Bar3D data={chartData} />
        </section>
    )
}

export default Repos;