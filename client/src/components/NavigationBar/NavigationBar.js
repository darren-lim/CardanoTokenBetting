import React, { Component } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../../assets/burgerLogo.png';
import "./NavigationBar.css";

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentUser: props.currentUser,
         }
    }

    logOut = () => {
        
    }

    render() { 
        const { currentUser} = this.state;
        return ( 
           <div>
                <nav className="navbar navbar-expand navbar-dark">
                    <Link to={"/"} className="navbar-brand">
                        <img src={logo} height="50" alt="logo"></img>
                        <p className="d-inline-flex pl-3">Burger Betting</p>
                    </Link>
                    {currentUser ? 
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={"/login"} className="nav-link link-light" onClick={this.logOut}>
                                    Log Out
                                </Link>
                            </li>
                        </div>
                    : 
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={"/login"} className="nav-link link-light">
                                    Log In
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/register" className="nav-link link-light">
                                    Sign Up
                                </Link>
                            </li>
                        </div>
                    }
                </nav>
            </div> 
        );
    }
}
 
export default NavigationBar;