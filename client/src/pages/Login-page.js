import React, { Component } from "react";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import './Login-page.css';

import AuthService from '../services/auth-services';
import LoginService from '../services/login-services';


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            errors: {},
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    onChangeUsername(e) {
        this.setState({username: e.target.value});
    }
    
    onChangePassword(e) {
        this.setState({password: e.target.value});
    }
    
    async handleLogin(e) {
        e.preventDefault();

        // result = { {} errors, bool formIsValid }
        const result = LoginService.handleValidation(
            this.state.username, 
            this.state.password,
        );
        this.setState({errors: result.errors});

        if (result.formIsValid) {
            const response = await AuthService.login(
                this.state.username,
                this.state.password,
            )
            if (!response.id) {
                this.setState({errors: response});
            }            
        }
    }
    
    render() {
        return (
            <div className= "card card-container">
                <form onSubmit={this.handleLogin}>
                    <div className="login card-form">
                        <div className="card-title">
                            <header className="card-title-header">
                                <h1>Log In</h1>
                            </header>
                        </div>
                        <div className="form-group">
                            <label className="form-group-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                value={this.state.username}
                                onChange={this.onChangeUsername}
                            />
                            <span style={{color: "red"}}>{this.state.errors['username']}</span>
                        </div>
                        <div className="form-group">
                            <label className="form-group-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                            />
                            <span style={{color: "red"}}>{this.state.errors['password']}</span>
                        </div>
                        <div className="form-group">
                            <input className="btn btn-primary" type="submit" value="Log In"/>
                        </div>
                    </div>
                </form>
                <div className="card-login-register">
                    <header className="card-login-register-header">
                        <h2>Don't Have an Account?</h2>
                    </header>
                    <div className="link-to-register">
                        <Link to="/register">Sign Up</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;