import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <p className="text-center font-weight-bold">DASHBOARD PAGE</p>
                <Link to="/games/mines">
                    <button type="button" className="btn">mines</button>
                </Link>
            </div>
        );
    }
}

export default Dashboard;