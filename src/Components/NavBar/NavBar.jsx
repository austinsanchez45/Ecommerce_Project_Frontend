import React from "react";
import "./NavBar.css";
import Image from "./img/mainLogo.png";

function NavBar(props){
    return (
        <div class="nav">
            <div class="navLogo">
                <img src= {Image} alt="Turntable Logo"/>
            </div>
        </div>
    )
}
export default NavBar;