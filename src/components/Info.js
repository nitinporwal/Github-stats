import React from 'react';
import { GithubContext } from '../context/context';

const Info = () => {
    const data = React.useContext(GithubContext);
    console.log(data);
    return (
        <h2>
            User Info component
        </h2>
    )
}

export default Info;