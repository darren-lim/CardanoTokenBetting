import React, { Component } from "react";
import { Link } from "react-router-dom";

import NavigationBar from "../../NavigationBar/NavigationBar";
import NavbarLI from "../../NavbarLoggedIn/NavbarLI";
import Login from '../../../pages/Login-page';
import "./Landing.css";


class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="Landing">
                <NavigationBar/>
                <div className="login-component">
                    <Login/>
                </div>
            </div>
        )
    }
}
 
export default Landing;