import React, { Component } from 'react';
import loginImg from '../images/login-img.svg';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <div style={{ "minHeight": "100vh", "display": "grid", "placeItems": "center", "width": "90vw", "maxWidth": "600px", "textAlign": "center", "margin": "auto" }}>
            <img src={loginImg} alt="github user" style={{ "maxWidth": "100%" }} />
            <h1 style={{ "textTransform": "capitalize", "margin": "0" }}>github user</h1>
            <button onClick={loginWithRedirect} style={{ "marginTop": "-20%", "border": "2px solid transparent", "boxShadow": "0 1px 3px rgba(0, 0, 0, 0.2)", "fontSize": "1.2rem", "fontWeight": "400", "textTransform": "uppercase", "display": "inline", "padding": "0.5%", "background": "#03a890", "color": "white", "textDecoration": "none", "borderRadius": "4px" }}>
                login / signup
                </button>
        </div>
    )
}

export default Login;