import React, { Component } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./NavigationBar.css";
import logo from '../../assets/burgerLogo.png';
import AuthService from '../../services/auth-services'

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    componentDidMount() {
        if (this.props.isLoggedIn) {
            const user = AuthService.getCurrentUser();
            console.log("Inside here: logged")
            this.setState({
                currentUser: user,
            })
        }
    }

    render() { 
        return ( 
           <div>
                <nav className="navbar navbar-expand navbar-dark py-0">
                    <Link to={"/"} className="navbar-brand">
                        <img src={logo} height="50" alt="logo"></img>
                        <p className="d-inline-flex pl-3">Burger Betting</p>
                    </Link>
                    {this.props.isLoggedIn ? 
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={"/login"} className="nav-link link-light" onClick={this.props.logout}>
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