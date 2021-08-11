import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Landing from './Home/Landing/Landing';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import NavigationBar from '../components/NavigationBar/NavigationBar-component';
import AuthService from '../services/account/auth-services';
import Login from './Login Register Page/Login-page';
import Register from './Login Register Page/Register-page';
import Dashboard from './Home/Dashboard Page/Dashboard-page';
import Mines from './Mines Page/Mines-page';


// Home Page
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: undefined,
            isLoggedIn: false,
            loadPage: true,
        }
    }

    componentDidMount() {
        this.checkLogin();
        this.callBackendAPI()
        .then(res => this.setState({ data: res.express }))
        .catch(err => console.log(err));
    }

    // checking Local Storage for jwt token
    checkLogin = () => {
        const user = AuthService.getCurrentUser();
        if (user) {
            this.setState({
                isLoggedIn: true,
                currentUser: user,
            })
        }
    }

    login = () => {
        this.setState({ isLoggedIn: true });
    }

    logout = () => {
        this.setState({ isLoggedIn: false });
        AuthService.logout();
    }

    // fetching the GET route from the Express server which matches the GET route from server.js
    callBackendAPI = async () => {
        const response = await fetch('/express_backend');
        const body = await response.json();

        if (response.status !== 200) {
        throw Error(body.message) 
        }
        return body;
    };

    render() {
        const { isLoggedIn, loadPage } = this.state;
        if(!loadPage) {
            // change later
            return <div>Loading . . .</div>
        } else {
            return (
                <div>
                    <div className="navigationBar">
                        <NavigationBar isLoggedIn={isLoggedIn} logout={this.logout} />
                    </div>
                    <div className="container mw-100">
                        <Switch>
                        {isLoggedIn === false ?
                            <React.Fragment>
                                <Route 
                                    exact path="/" 
                                    render={(props) => <Landing {...props}/>} 
                                />
                                <Route 
                                    exact path="/register" 
                                    render={() => <Register/>}
                                />
                                <Route 
                                    exact path="/login" 
                                    render={(props) => <Login {...props} login={this.login} />}
                                />
                            </React.Fragment>
                        :
                            <React.Fragment>
                                <Route 
                                    exact path="/" 
                                    render={(props) => <Dashboard/>} 
                                />
                                <Route
                                    exact path="/dashboard"
                                    render={() => <Dashboard/>}
                                />
                                <Route
                                    exact path="/games/mines"
                                    render={() => <Mines/>}
                                />
                            </React.Fragment>
                        }
                        </Switch>
                    </div>
                </div>
                
            );
        }
    }
}

export default App;
