import React, {useEffect, useState} from 'react';
import './App.scss';
import Map from "./map/Map"
import Start from "./Start/Start";
import Equipment from "./Equipment/Equipment";
import Header from "./Header/Header";
import AboutMe from "./About me/AboutMe";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';



function App(){


        return <HashRouter>
            <div className="app-container">
                <Header/>
                <Switch>
                    <Route exact path='/' component={Start}  />
                    <Route path='/equipment' component={Equipment} />
                    <Route path='/map' component={Map} />
                    <Route path='/aboutme' component={AboutMe} />
                </Switch>
            </div>
            <div className="icon">Icons made by <a href="https://www.flaticon.com/authors/smashicons"
                                                   title="Smashicons">Smashicons</a> from <a
                href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </HashRouter>;

}


export default App;
