import React, { useContext } from 'react';
import LoaderImg from '../images/preloader.gif'
import { Navbar, Search, User, Repos, UserInfo } from '../components';
import { GithubContext } from '../context/context';

const Dashboard = () => {
    const { isLoading } = useContext(GithubContext);
    if (isLoading) {
        return <main>
            <Navbar />
            <Search />
            <img src={LoaderImg} alt="Loading....." className="loading-img" />
        </main>
    }
    return (
        <div>
            <Navbar />
            <Search />
            <UserInfo />
            <User />
            <Repos />
        </div>
    )
}

export default Dashboard;