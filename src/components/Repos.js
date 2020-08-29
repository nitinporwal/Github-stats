import React, { useContext } from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { ExampleChart, Pie3D, Column3D, Doughnut2D, Bar3D } from './Charts';

const Repos = () => {
    const { repos } = useContext(GithubContext);

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


    let most_popular = Object.values(languages).sort((a, b) => {
        return b.stars - a.stars;
    }).map((star, index) => {
        return { ...star, value: star.stars }
    }).slice(0, 5);

    let { stars, forks } = repos.reduce((total, repo) => {
        const { name, stargazers_count, forks_count } = repo;
        total.stars[stargazers_count] = {
            label: name,
            value: stargazers_count
        }
        total.forks[forks_count] = {
            label: name,
            value: forks_count
        }
        return total;
    }, { stars: {}, forks: {} });
    stars = Object.values(stars).slice(-5).reverse();
    forks = Object.values(forks).slice(-5).reverse();


    return (
        <section className="section">
            <Wrapper className="section-center">
                <Pie3D data={languages} />
                <Column3D data={stars} />
                <Doughnut2D data={most_popular} />
                <Bar3D data={forks} />
            </Wrapper>
        </section>
    )
}

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
