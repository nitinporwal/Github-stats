import React, { useState, useEffect } from 'react'
import mockUser from './mockData.js/mockUser';
import mockFollowers from './mockData.js/mockFollowers';
import mockRepos from './mockData.js/mockRepos';
import axios from 'axios';

const rootUrl = 'http://api.github.com';

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
    const [githubUser, setGithubUser] = useState(mockUser);
    const [followers, setFollowers] = useState(mockFollowers);
    const [repos, setRepos] = useState(mockRepos);
    const [request, setRequest] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({ show: false, msg: "" });
    const fetchRequests = () => {
        axios(`${rootUrl}/rate_limit`).then(({ data: { rate: { remaining } } }) => {
            // remaining=0;
            setRequest(remaining);
            if (!remaining) {
                toggleError(true, "sorry, you have exceeded you hourly rate limit");
            }
        }).catch(error => console.log(error));
    }
    const searchGithubUser = async (user) => {
        toggleError();
        setIsLoading(true);
        console.log(user);
        const response = await axios(`${rootUrl}/users/${user}`)
            .catch(err => console.log(err));
        console.log(response);
        if (response) {
            const { data: {followers_url, repos_url} } = response;
            axios(`${followers_url}?per_page=100`).then(({data})=> {
                console.log(data);
                setFollowers(data);
            })
            axios(`${repos_url}?per_page=100`).then(({data})=> {
                console.log(data);
                setRepos(data);
            })
            
        } else {
            toggleError(true, "there is no user with that username");
        }
        fetchRequests();
        setIsLoading(false);
    }
    const toggleError = (show = false, msg = "") => {
        setError({ show, msg });
    }
    useEffect(() => {
        fetchRequests();
    }, [])
    return (
        <GithubContext.Provider value={{ githubUser, followers, repos, request, error, isLoading, searchGithubUser }}>
            {children}
        </GithubContext.Provider>
    )
}

export { GithubProvider, GithubContext };