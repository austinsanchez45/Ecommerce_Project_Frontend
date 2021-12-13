import React from 'react';
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function LandingPage(props){
    return(
        <div className="LandingPageParent">
            <div className="container-fluid">
                <h1 className="welcome">Welcome to Turntable</h1>
                <p className="intro">Your home for vinyl records. Sell your pieces to other enthusiasts, get more of your favorite genre, or discover that rare piece.</p>
            </div>
            <div class="HomeButtons">
                <button className="LogInButton" type="submit">Log In</button>
                <button className="SignUpButton" type="submit">Sign In</button>
            </div>
        </div>
    );
}
export default LandingPage;