import React from 'react';
import { GithubContext } from '../context/context';
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';


const UserInfo = () => {
    const { githubUser } = React.useContext(GithubContext);
    const { followers, public_gists, public_repos, following } = githubUser;
    const items = [
        {
            id: 1,
            icon: <GoRepo />,
            label: 'repos',
            value: public_repos,
            color: 'pink'
        },
        {
            id: 2,
            icon: <FiUsers />,
            label: 'followers',
            value: followers,
            color: 'green'
        },
        {
            id: 3,
            icon: <FiUserPlus />,
            label: 'following',
            value: following,
            color: 'purple'
        },
        {
            id: 4,
            icon: <GoGist />,
            label: 'gists',
            value: public_gists,
            color: 'yellow'
        },
    ]
    return (
        <section>
            {
                items.map(item => {
                    return <Item key={item.id} {...item} />
                })
            }
        </section>
    )
}

const Item = ({ icon, value, label, color }) => {
    return (
        <article>
            <span className={color}>
                {icon}
            </span>
            <div>
                <h3>
                    {value}
                </h3>
                <p>
                    {label}
                </p>
            </div>
        </article>
    )
}

export default UserInfo;