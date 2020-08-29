import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import loadingGif from '../images/preloader.gif';

const AuthWrapper = ({children}) => {
    const {isLoading, error} = useAuth0();
    if(isLoading) {
        return <img src={loadingGif} alt="spinner" className="loading-img"/>
    }
    if(error) {
        return <h1>{error.message}</h1> 
    }
    return <>{children}</>
}

export default AuthWrapper;