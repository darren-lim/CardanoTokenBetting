import React, { Component } from "react";
import { Link } from "react-router-dom";

import './Login-Register-page.css';

import AuthService from '../../services/auth-services';
import RegisterService from '../../services/register-services';


class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            password: "",
            errors: {},
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    onChangeUsername(e) {
        this.setState({username: e.target.value});
    }
    
    onChangeEmail(e) {
        this.setState({email: e.target.value});
    }
    
    onChangePassword(e) {
        this.setState({password: e.target.value});
    }
    
    async handleRegister(e) {
        e.preventDefault();

        const result = RegisterService.handleValidation(
            this.state.username, 
            this.state.email,
            this.state.password,
        );
        this.setState({errors: result.errors});

        if (result.formIsValid) {
            const response = await AuthService.register(
                this.state.username,
                this.state.email,
                this.state.password,
            )
            this.setState({errors: response.data});
        }
    }
    
    render() {
        const { username, email, password, errors } = this.state;
        return (
            <div className= "col-md-8 mx-auto my-5 card card-container card-container-register text-center">
                <form onSubmit={this.handleRegister}>
                    <div className="register card-form">
                        <div className="card-title">
                            <header className="card-title-header">
                                <h1>Sign Up</h1>
                            </header>
                        </div>
                        <div className="form-group username-field">
                            <label className="form-group-label required-field">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                value={username}
                                onChange={this.onChangeUsername}
                            />
                            <span style={{color: "red"}}>{errors['username']}</span>
                        </div>
                        <div className="form-group email-field">
                            <label className="form-group-label required-field">Email</label>
                            <input
                                type="text"
                                className="form-control"
                                name="email"
                                value={email}
                                onChange={this.onChangeEmail} 
                            />
                            <span style={{color: "red"}}>{errors['email']}</span>
                        </div>
                        <div className="form-group password-field">
                            <label className="form-group-label required-field">Password</label>
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
                            <input className="btn" type="submit" value="Sign Up"/>
                        </div>
                    </div>
                </form>
                <div className="card-link-to-login">
                    <header className="card-link-to-login-header">
                        <h2>Already Have an Account?</h2>
                    </header>
                    <div className="link-to-register">
                        <Link to="/login">Login In</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;