import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Register-page.css';
import AuthService from '../services/auth';

// const required = value => {
//     if (!value) {
//         return (
//             <div className="alert alert-danger" role="alert">
//                 This field is required!
//             </div>
//         );
//     }
// };
  

  const verifyUsername = value => {
        if (value.length < 3 || value.length > 20) {
            return (
                <div className="alert alert-danger" role="alert">
                    <span>The username must be between 3 and 20 characters.</span>
                </div>
            );
        }
  };
  
const verifyPassword = value => {
    if (value.length < 6 || value.length > 40) {
        return (
        <div className="alert alert-danger" role="alert">
            The password must be between 6 and 40 characters.
        </div>
        );
    }
};
  

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            password: "",
            formIsValid: false,
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
    
    handleValidation() {
        let username = this.state.username;
        let email = this.state.email;
        let password = this.state.password;
        let errors = {};
        let formIsValid = true;

        if (!username) {
            formIsValid = false;
            errors['username'] = "Cannot be empty";
            console.log("empty")
        }
        if (!email) {
            formIsValid = false;
            errors['email'] = "Cannot be empty";
            console.log("empty")
        }
        if (!password) {
            formIsValid = false;
            errors['password'] = "Cannot be empty";
            console.log("empty")
        }

        this.setState({errors: errors});
        return formIsValid;
    }
    
    handleRegister(e) {
        e.preventDefault();

        if (this.handleValidation()) {
            AuthService.register(
                this.state.username,
                this.state.email,
                this.state.password,
            );  
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