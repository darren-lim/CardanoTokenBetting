import React, { Component } from "react";
import { Link } from "react-router-dom";

import NavbarNLI from "../../NavbarNotLoggedIn/NavbarNLI";
import NavbarLI from "../../NavbarLoggedIn/NavbarLI";

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
                  <header className="App-header">
                    <h1>Not Logged In</h1>
                  </header>
                </div>
            </div>
        )
    }
}
 
export default Landing;