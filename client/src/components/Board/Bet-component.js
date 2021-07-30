import React, { useState } from "react";
import Card from './Card-component';
import logo from '../../assets/burgerLogo.png';

import 'bootstrap/dist/css/bootstrap.css'; 

function Bet(props) {

    const [balance, setBalance] = useState(1000);

    function handleDeposit() {
        // redirect to deposit page

        return null;
    }

    return (
        <div>
            <div className="balance-container">
                <form onSubmit={handleDeposit}>
                    <div className="balance-box-container">
                        <label className="balance-label">Balance</label>
                        <div className="balance-display">
                            <img src={logo} height="20" alt="balance-coin" ></img>
                            <p className="balance-amount">{balance}</p>
                            <input className="btn active" type="submit" value="Deposit"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Bet;