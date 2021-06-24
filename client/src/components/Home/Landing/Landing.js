import React, { Component } from "react";
import { Link } from "react-router-dom";

import NavbarNLI from "../../NavbarNotLoggedIn/NavbarNLI";
import NavbarLI from "../../NavbarLoggedIn/NavbarLI";
import Login from '../../../pages/Login-page';


class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="Landing">
                <NavbarNLI/>
                <div className="App">
                    <Login/>
                </div>
            </div>
        )
    }
}
 
export default Landing;