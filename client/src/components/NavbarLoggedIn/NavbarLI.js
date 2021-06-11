import React, { Component } from "react";
import {Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../../assets/burgerLogo.png';
import "./NavbarLI.css";
import { Dropdown } from "bootstrap";

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
                        <Dropdown>
                            <Dropdown.Toggle className="account-dropdown">
                                Username
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item eventKey="1" active>
                                Settings
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="2">Log Out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <button
                            className="user-dropdown"
                            onClick={(e) => this.showDropdown()}>
                            Username
                        </button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
 
export default NavbarNLI;