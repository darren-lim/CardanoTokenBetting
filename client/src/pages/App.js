import React, { Component } from 'react';
import { render } from "react-dom";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Landing from '../components/Home/Landing/Landing';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import AuthService from '../services/auth-services';
import Login from '../pages/Login-page';
import Register from '../pages/Register-page';


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
                currentUser: user,
            })
        }
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
        const { currentUser, isLoggedIn, loadPage } = this.state;
        if(!loadPage) {
            // change later
            return <div>Loading . . .</div>
        } else {
            return (
                <div>
                {isLoggedIn === false ?
                    <React.Fragment>
                        <Switch>
                            <Route exact path="/" render={props =>(
                            <Login {...props}/>
                            )} />
                            <Route exact path="/register" component={Register}></Route>
                            <Route exact path="/login" component={Login}></Route>
                        </Switch>
                    </React.Fragment>
                :
                    <React.Fragment>
                        <div className="App">
                            <Login></Login>
                        </div>
                    </React.Fragment>
                }
                </div>
                
            );
        }
    }
}

export default App;
