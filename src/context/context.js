import React, { useState } from 'react'
import mockUser from './mockData.js/mockUser';
import mockFollowers from './mockData.js/mockFollowers';
import mockRepos from './mockData.js/mockRepos';

const rootUrl = 'http://api.github.com';

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
    const [githubUser, setGithubUser] = useState(mockUser);
    const [followers, setFollowers] = useState(mockFollowers);
    const [repos, setRepos] = useState(mockRepos);
    return (
        <GithubContext.Provider value={{ githubUser, followers, repos }}>
            {children}
        </GithubContext.Provider>
    )
}

export { GithubProvider, GithubContext };