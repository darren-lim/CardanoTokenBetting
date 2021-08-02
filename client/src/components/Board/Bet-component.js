import React, { useState } from "react";
import Card from './Card-component';
import logo from '../../assets/burgerLogo.png';

import 'bootstrap/dist/css/bootstrap.css'; 

function Bet(props) {

    const [balance, setBalance] = useState(1000);

    const [isGameStarted, setIsGameStarted] = useState(false);
    const [betAmount, setBetAmount] = useState(0);
    const [numberOfBurntPatties, setNumberOfBurntPatties] = useState(1);

    function handleDeposit() {
        // redirect to deposit page

        return null;
    }

    function handleCashOut() {
        // begin game or cash out

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
            <div className>

            </div>
        </div>
    );
}

function EndGame() {

    function handleCashOut() {
        // begin game or cash out

        return null;
    }
    
    // <form onSubmit={handleCashOut}>
    //     <div className="number-of-mines-container">
    //         <label className="number-of-mines-label">Amount of Burnt Patties</label>
    //         <div className="number-of-mines-input">
    //             <p className="balance-amount">{balance}</p>
    //             <input className="btn active" type="submit" value="Cash Out"/>
    //         </div>
    //     </div>
    // </form>
}

function StartGame() {

}

export default Bet;