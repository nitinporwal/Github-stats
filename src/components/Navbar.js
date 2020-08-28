import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
    const { isAuthenticated, loginWithRedirect, user, isLoading, logout } = useAuth0();
    const isUser = isAuthenticated && user;
    return (
        <div>
            {isUser && user.picture && <img src={user.picture} alt={user.name} />}
            {isUser && user.name && <h4>Welcome, <strong>{user.name.toUpperCase()}</strong></h4>}
            {
                user ?
                    <button onClick={() => logout({ returnTo: window.location.origin })}>logout</button>
                    :
                    <button onClick={loginWithRedirect}>login</button>
            }
        </div>
    )
}

export default Navbar;