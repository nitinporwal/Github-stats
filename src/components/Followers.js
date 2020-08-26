import React, { Component, useContext } from 'react';
import { MdLocationOn, MdBusiness, MdLink } from 'react-icons/md';
import { GithubContext } from '../context/context'

const Followers = () => {
    const { followers } = useContext(GithubContext);
    
    return (
        <div>
            {followers.map((follower, index) => {
                const {avatar_url:img, html_url, login} = follower;
                return <article key={index}>
                    <img src={img} alt={login} />
                    <div>
                        <h4>{login}</h4>
                        <a href={html_url}>{html_url}</a>
                    </div>
                </article>
            })}
        </div>
    )
}

export default Followers;