import React, { useState } from "react";
import Card from './Card-component';
import logo from '../../assets/burgerLogo.png';

import 'bootstrap/dist/css/bootstrap.css'; 
import './Bet-component.css';

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
        <div className="bet-container">
            <div className="balance-container">
                <label className="balance-label">Balance</label>
                <div className="balance-display row">
                    <div className="balance-coin-image">
                        <img src={logo} height="20" alt="balance-coin" ></img>
                    </div>
                    <div className="balance-amount-containter">
                        <p className="balance-amount">{balance}</p>
                    </div>
                </div>
                <form onSubmit={handleDeposit}>
                    <input className="btn active" type="submit" value="Deposit"/>
                </form>
            </div>
            <div className="burnt-amount-container">
                
                {/* <input
                    type="text"
                    className="form-control"
                    name="username"
                    value={username}
                    onChange={this.onChangeUsername}
                /> */}
            </div>
            { isGameStarted ?
                <EndGame />
            :
                <StartGame />
            }
        </div>
    );
}

function EndGame() {

    function handleCashOut() {
        // begin game or cash out

        return null;
    }
    
    return (
        <div>
            <form onSubmit={handleCashOut}>

            </form>
        </div>
    );
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

    return (
        <div>
            
        </div>
    );
}

export default Bet;