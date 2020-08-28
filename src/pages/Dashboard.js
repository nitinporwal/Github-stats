import React, { Component } from 'react';
import { Navbar, Search, User, Repos, UserInfo } from '../components';

class Dashboard extends Component {
    render() {
        return (
            <div>
                {/* <Navbar /> */}
                <Search />
                <UserInfo />
                <User />
                <Repos />
            </div>
        )
    }
}

export default Dashboard;