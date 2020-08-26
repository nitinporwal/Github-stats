import React, { Component, useContext } from 'react';
import { GithubContext } from '../context/context';
import { ExampleChart } from './Charts';

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
            <ExampleChart data={chartData} />
        </section>
    )
}

export default Repos;