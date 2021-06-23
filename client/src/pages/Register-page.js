import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Register-page.css';
import AuthService from '../services/auth-services';
import RegisterService from '../services/register-services';


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
        return (
            <div className= "card card-container">
                <form onSubmit={this.handleRegister}>
                    <div className="register card-form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
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
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                className="form-control"
                                name="email"
                                value={this.state.email}
                                onChange={this.onChangeEmail} 
                            />
                            <span style={{color: "red"}}>{this.state.errors['email']}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
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
                            <input className="btn btn-primary btn-block" type="submit" value="Sign Up"/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;