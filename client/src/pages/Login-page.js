import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import './Login-Register-page.css';

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
            } else {
                this.props.login();
            }
               
        }
    }
    
    render() {
        const { username, password, errors } = this.state;
        return (
            <div className= "col-md-8 mx-auto my-5 card card-container card-container-login text-center">
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
                                value={username}
                                onChange={this.onChangeUsername}
                            />
                            <span style={{color: "red"}}>{errors['username']}</span>
                        </div>
                        <div className="form-group">
                            <label className="form-group-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                value={password}
                                onChange={this.onChangePassword}
                            />
                            <span style={{color: "red"}}>{errors['password']}</span>
                        </div>
                        <div className="form-group form-group-btn">
                            <input className="btn active" type="submit" value="Log In"/>
                        </div>
                    </div>
                </form>
                <div className="card-link-to-register">
                    <header className="card-link-to-register-header">
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

export default withRouter(Login);