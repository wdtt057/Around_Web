import React from 'react';
import { Route, Switch } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import Home from "./Home";

function Main(props) {
    const {isLoggedIn, handleLoggedIn} = props

    const showLoggedIn = () => {
        // case 1 : loggedIn -> display home page
        // case 2 : notLoggedIn -> display login page
        return isLoggedIn
            ?
            (<div>home</div>)
            :
            (<Login handleLoggedIn = {handleLoggedIn}/>)
    }
    return (
        <div className = "main">
            <Switch>
                <Route path="/login" render={showLoggedIn}/>
                <Route path="/:register" component={Register}/>
                <Route path="/home" component={Home}/>
            </Switch>
        </div>
    );
}

export default Main;