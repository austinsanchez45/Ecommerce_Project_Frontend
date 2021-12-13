import "./NavBar.css";
//import Image from "./img/mainLogo.png";
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = ({ user }) => {
    return (
        <div>
            {user && <h4>Welcome {user.username}</h4>}
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                {!user &&
                    <React.Fragment>
                        <li>
                            <Link to="/signup">Sign Up</Link>
                        </li>
                        <li>
                            <Link to="/login">Log In</Link>
                        </li>
                    </React.Fragment>
                }
                {user &&
                    <React.Fragment>
                        <li>
                            <Link to="logout">Logout</Link>
                        </li>
                    </React.Fragment>
                }
            </ul>
        </div>
    );
}