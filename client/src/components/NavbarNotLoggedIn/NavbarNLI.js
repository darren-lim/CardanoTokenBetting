import React, { Component } from "react";
import {Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../../assets/burgerLogo.png';
import "./NavbarNLI.css";

class NavbarNLI extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoginPage: false,
            isRegisterPage: false
         }
    }

    showLogin = () => {
        this.setState((prev) => {
            return {
                isLoginPage: !prev.isLoginPage
            }
        })
    }

    showRegister = () => {
        this.setState((prev) => {
            return {
                isRegisterPage: !prev.isRegisterPage
            }
        })
    }

    render() { 
        return ( 
            <Navbar className="NavbarNLI">
                <Navbar.Brand href="#" className="nav-brand">
                    <img
                        alt=""
                        src={logo}
                        width="50"
                        height="50"
                        className="d-inline-block"
                    />{' '}
                    Burger Betting
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <button
                            className="login"
                            onClick={(e) => this.showLogin()}>
                            Log in
                        </button>
                        <button
                            className="signup"
                            onClick={(e) => this.showRegister()}>
                            Sign Up
                        </button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
 
export default NavbarNLI;