import React, { useState } from "react";
import Card from './Card-component';
import logo from '../../assets/burgerLogo.png';

import 'bootstrap/dist/css/bootstrap.css'; 

function Bet(props) {
    function handleDeposit() {
        // redirect to deposit page

        return null;
    }

    function getBalance() {
        // getBalance from services
        return "10000";
    }

    return (
        <div>
            <div className="balance-container">
                <form onSubmit={handleDeposit}>
                    <label className="balance-label">Balance</label>
                    <div className="balance-box-container">
                        <img src={logo} height="20" alt="balance-coin" ></img>
                        <p className="balance-amount">{getBalance}</p>
                        <input className="btn active" type="submit" value="Deposit"/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Bet;