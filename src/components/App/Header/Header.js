import {NavLink} from "react-router-dom";
import React from "react";
import "./Header.scss";


function Header() {
    const activeStyle = {
        border: ' 1px solid lightblue'
    };
    return (
        <nav className='nav'>

            <ul className="header-ul">

                <li><NavLink className="navlink" exact to="/" >
                    <div className="logo">
                        <div className="header-logo">Ski
                            <div className="header-logo1">Fun</div>
                        </div>
                    </div>
                </NavLink></li>
                <li><NavLink className="navlink " to="/equipment" activeStyle={activeStyle}>Sprzęt</NavLink></li>
                <li><NavLink className="navlink" to="/map" activeStyle={activeStyle}>Mapa</NavLink></li>
            </ul>


        </nav>
    )
}

export default Header;