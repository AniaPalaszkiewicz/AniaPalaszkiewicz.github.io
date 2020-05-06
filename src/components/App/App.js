import React, {useEffect, useState} from 'react';
import './App.scss';
import Map from "./map/Map"
import Start from "./Start/Start";
import Equipment from "./Equipment/Equipment";
import Header from "./Header/Header";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';



function App(){


        return <HashRouter>
            <>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Start}  />
                    <Route path='/equipment' component={Equipment} />
                    <Route path='/map' component={Map} />
                </Switch>

            </>
        </HashRouter>;

}


export default App;
