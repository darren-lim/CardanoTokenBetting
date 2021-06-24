import React, { Component } from 'react';
import { render } from "react-dom";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Landing from '../components/Home/Landing/Landing';
import './App.css';
import AuthService from '../services/auth-services';
import Register from '../pages/Register-page';
import Login from '../pages/Login-page';


// Home Page
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: undefined,
            isLoggedIn: true,
            loadPage: true,
            formIsValid: true,
        }
    }

    checkLogin = () => {
        // login logic
        const user = AuthService.getCurrentUser();
        if (user) {
            this.setState({
                currentUser: user,
            })
        }
    }

    componentDidMount() {
        this.checkLogin();
        this.callBackendAPI()
        .then(res => this.setState({ data: res.express }))
        .catch(err => console.log(err));
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
        if(!this.state.loadPage) {
            // change later
            return <div>Loading . . .</div>
        } else {
            return (
                <Router>
                {this.state.isLoggedIn === false ?
                    <React.Fragment>
                    <Switch>
                        <Route exact path="/" render={props =>(
                        <Landing {...props}/>
                        )} />
                    </Switch>
                    </React.Fragment>
                :
                    <React.Fragment>
                    <div className="App">
                        <Login></Login>
                    </div>
                    </React.Fragment>
                }
                </Router>
                
            );
        }
    }
}

export default App;
