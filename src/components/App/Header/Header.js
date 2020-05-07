import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import "./Header.scss";
import transport from "./transport.svg";
import mountain from "./mountain.svg"

function Header() {
    const [clicked, setClicked]=useState(false);
    const activeStyle = {
        border: ' 1px solid lightblue'
    };

    const handleMenu = () => {
        setClicked(prev=>!prev)
    };
    return (
        <div className={clicked? `go1`: `go`} >
        <nav className='nav'>
            <ul className="header-ul">
                <li><NavLink onClick={handleMenu} className="navlink" exact to="/" >
                    <div className="logo"><img src={mountain} alt=""/>
                    </div>
                </NavLink></li>
                <li><NavLink onClick={handleMenu} className="navlink " to="/equipment" activeStyle={activeStyle}>Sprzęt</NavLink></li>
                <li><NavLink  onClick={handleMenu} className="navlink" to="/map" activeStyle={activeStyle}>Mapa</NavLink></li>
            </ul>
        </nav>
            <img onClick={handleMenu} className="transport" src={transport} alt=""/>

        </div>
    )
}

export default Header;