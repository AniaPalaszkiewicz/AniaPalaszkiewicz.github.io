import React, {useEffect, useState} from 'react';
import "./Start.scss";

export default function Start() {

    const [welcome, setWelcome] = useState(true)

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setWelcome(false)
        }, 2000);
        return () => clearTimeout(timeout)
    }, []);



    return (
        <div className="banner">
            {welcome? <div className='banner-title'>Miłego dnia!</div> : null}
            <div className="snow layer"></div>
            <div className="snow layer a"></div>
            <div className="snow layer1"></div>
            <div className="snow layer1 a"></div>
            <div className="snow layer2"></div>
            <div className="snow layer2 a"></div>
        </div>
    );
}


