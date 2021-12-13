import React from 'react';
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function SignUp(props){
    return (
        <div className="signInParent">
            <form>
            <div class="formFloatingEmail">
                    <label for ="FirstName">
                        First Name: 
                        <input id=""/>
                    </label>
                </div>
                <div class="formFloatingEmail">
                    <label for ="LastName">
                        Last Name: 
                        <input id=""/>
                    </label>
                </div>
                <div class="formFloatingEmail">
                    <label for ="UserName">
                        User Name: 
                        <input id=""/>
                    </label>
                </div>
                <div class="formFloatingEmail">
                    <label for ="Password">
                        Password: 
                        <input id=""/>
                    </label>
                </div>
                <div class="formFloatingEmail">
                    <label for ="Email">
                        Email
                        <input id=""/>
                    </label>
                </div>
                <div class="formFloatingPassword">
                    <label for="PhoneNumber">
                        Phone Number: 
                        <input id=""/>
                    </label>
                </div>
                <div className="signInButtonParent">
                    <button class="signInButton" type="submit">Register</button>
                </div>
            </form>
        </div>
    )
}
export default SignUp;