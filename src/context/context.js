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

    const fetchRequests = () => {
        axios(`${rootUrl}/rate_limit`).then((response) => {
            setRequest(response.data.rate.remaining);
        }).catch(error => console.log(error));
    }
    useEffect(() => {
        fetchRequests();
    }, [])
    return (
        <GithubContext.Provider value={{ githubUser, followers, repos, request }}>
            {children}
        </GithubContext.Provider>
    )
}

export { GithubProvider, GithubContext };