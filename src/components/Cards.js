import React, { useContext } from 'react';
import { MdLocationOn, MdBusiness, MdLink } from 'react-icons/md';
import { GithubContext } from '../context/context';

const Cards = () => {
    const { githubUser } = useContext(GithubContext);
    const {
        name,
        company,
        blog,
        bio,
        location,
        twitter_url,
        html_url,
        avatar_url
    } = githubUser;
    return (
        <div>
            <header>
                <img src={avatar_url} alt={name} />
                <div>
                    <h4>{name}</h4>
                    <p>@{twitter_url || "john deo"}</p>
                </div>
                <a href={html_url}>follow</a>
            </header >
            <p>{bio}</p>
            <div>
                <p>
                    <MdBusiness></MdBusiness>{company}
                </p>
                <p>
                    <MdLocationOn></MdLocationOn>{location || "earth"}
                </p>
                <a href={`https://${blog}`}>
                    <MdLink></MdLink>{blog}
                </a>
            </div>
        </div>
    )
}

export default Cards;