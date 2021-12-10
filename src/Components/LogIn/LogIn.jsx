import "./LogIn.css";
import React from 'react';
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function LogIn(props){
    return (
        <div className="signInParent">
            <form>
                <div class="formFloating">
                    <input type="email" class="form-control" id="floatingInput" placeholder="johnsmith@gmail.com">
                        <label for="floatInput">Email Address</label>
                    </input>
                </div>
                <div class="formFloating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                        <label for="floatingPassword">Password</label>
                    </input>
                </div>
                <div className="signInButtonParent">
                    <button class="signInButton" type="submit">Sign In</button>
                </div>
            </form>
        </div>
    )
}
export default LogIn;

