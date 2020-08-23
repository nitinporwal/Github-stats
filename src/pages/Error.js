import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Error extends Component {
    render() {
        return (
            <div style={{ "minHeight": "100vh", "display": "grid", "placeItems": "center", "textAlign": "center" }}>
                <div>
                    <h1 style={{ "fontSize": "10rem", "margin": "0" }}>404</h1>
                    <h3 style={{ "fontSize": "1.5rem", "textTransform": "capitalize", "margin": "0" }}>sorry, the page you tried cannot be found</h3>
                </div>
                <Link to="/" style={{"marginTop": "-20%", "fontSize": "1.3rem", "textTransform": "uppercase", "display": "block", "padding": "0.5%", "background": "#03a890", "color": "white", "textDecoration": "none", "borderRadius": "4px" }}>
                    back home
                </Link>
            </div>
        )
    }
}

export default Error;