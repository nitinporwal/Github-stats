import React, { useState, useContext } from 'react';
import { MdSearch } from 'react-icons/md';
import { GithubContext } from '../context/context';



const Search = () => {
    const { request, error, searchGithubUser, isLoading } = useContext(GithubContext);
    const [user, setUser] = useState('')
    const handelSubmit = (e) => {
        e.preventDefault();
        searchGithubUser(user);
    }
    return (
        <section>
            {error.show &&
                <p>{error.msg}</p>
            }
            <form onSubmit={(e) => handelSubmit(e)}>
                <div>
                    <MdSearch />
                    <input type="text" value={user} placeholder="enter github username" onChange={(e) => setUser(e.target.value)} />
                    {
                        request>0 && !isLoading && 
                        <button type="submit">search</button>
                    }
                </div>
            </form>
            <h3>Requests : {request}/60</h3>
        </section>
    )
}

export default Search;