import React, { useContext } from 'react';
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
    // console.log(repos);
    let languages = repos.reduce((total, repo) => {
        const { language, stargazers_count } = repo;
        if (!language) {
            return total;
        }
        if (total[language]) {
            total[language] = { ...total[language], value: total[language].value + 1, stars: total[language].stars + stargazers_count };
        }
        else {
            total[language] = { label: language, value: 1, stars: stargazers_count };
        }
        return total;
    }, {})
    languages = Object.values(languages).sort((a, b) => {
        return b.value - a.value;
    }).slice(0, 5);
    return (
        <section>
            <Pie3D data={languages} />
            <Column3D data={languages} />
            <Doughnut2D data={languages} />
            <Bar3D data={languages} />
        </section>
    )
}

export default Repos;