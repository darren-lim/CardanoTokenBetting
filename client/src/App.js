import React, { Component } from 'react';
import { render } from "react-dom";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      loadPage: true
    }
  }

  checkLogin = () => {
    // login logic
  }

  componentDidMount() {
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
              <div className="App">
                  <header className="App-header">
                    <h1>Not Logged In</h1>
                  </header>
                </div>
            </React.Fragment>
          :
            <React.Fragment>
              <div className="App">
                  <header className="App-header">
                    <h1>Logged In</h1>
                  </header>
                </div>
            </React.Fragment>
          }
        </Router>
        
      );
    }
  }
}

export default App;
