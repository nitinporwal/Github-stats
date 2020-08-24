import React, { Component } from 'react';
import { Navbar, Search, User, Info, Repos } from '../components';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Search />
                <Info />
                <User />
                <Repos />
            </div>
        )
    }
}

export default Dashboard;