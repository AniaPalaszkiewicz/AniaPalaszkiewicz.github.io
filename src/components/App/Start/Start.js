import React, {useEffect, useState} from 'react';
import "./Start.scss";
import {NavLink} from "react-router-dom";


export default function Start() {

    const [welcome, setWelcome] = useState(true);

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setWelcome(false)
        }, 4000);
        return () => clearTimeout(timeout)
    }, []);



    return (
        <div className="banner">
            {welcome? <div className='banner-title'>Miłego dnia!</div> : <div className="banner-title1 "><p><NavLink  to="/equipment">Dopasuj sprzęt!</NavLink></p><br/>
                <p><NavLink  to="/map">Sprawdź, gdzie warto poszusować!</NavLink></p></div>}
            <div className="snow layer"></div>
            <div className="snow layer a"></div>
            <div className="snow layer1"></div>
            <div className="snow layer1 a"></div>
            <div className="snow layer2"></div>
            <div className="snow layer2 a"></div>
        </div>
    );
}


