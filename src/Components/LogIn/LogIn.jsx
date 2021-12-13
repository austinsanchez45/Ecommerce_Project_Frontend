import "./LogIn.css";
import React from 'react';
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function LogIn(props){
    return (
        <div className="signInParent">
            <form>
                <div class="formFloatingEmail">
                    <label for ="Email">
                        Email
                        <input id=""/>
                    </label>
                </div>
                <div class="formFloatingPassword">
                    <label for="Password">
                        Password
                        <input id=""/>
                    </label>
                </div>
                <div className="signInButtonParent">
                    <button class="signInButton" type="submit">Sign In</button>
                </div>
            </form>
        </div>
    )
}
export default LogIn;

