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

    function handleDeposit(event) {
        // redirect to deposit page

        event.preventDefault();
        console.log("deposit");
        return null;
    }

    function handleSubmitBet() {
        // begin game or cash out
        
        return null;
    }

    return (
        <div>
            <div className="balance-component">
                <Balance balance={balance} deposit={handleDeposit} />
            </div>
            <div className="BetAmount-component">
                <BetAmount submitBet={handleSubmitBet}/>
            </div>
        </div>

        //     <div className="burnt-amount-container">

        //     </div>
        //     { isGameStarted ?
        //         <EndGame />
        //     :
        //         <StartGame />
        //     }
        // </div>
    );
}

function Balance(props) {
    return (
        <form className="balance-container" onSubmit={props.deposit}>
            <label className="label row">Balance</label>
            <div className="row">
                <img src={logo} height="45px" alt="coin logo" className="balance-logo-img" />
                <input
                    readOnly={true}
                    type="text"
                    placeholder="balance"
                    value={props.balance}
                    height="45"
                    className="balance-amount"
                />
                <button type="submit" className="deposit-btn">
                    Deposit
                </button>
            </div>
        </form>
    )
}

function BetAmount(props) {
    return (
        <form className="balance-container" onSubmit={props.submitBet()}>
            <label className="label row">Bet Amount</label>
            <div className="row">
                <input
                    type="text"
                    placeholder="0"
                    value={props.balance}
                    className="bet-amount"
                />
            </div>
            <div>
                <div className="powers-of-ten-btns">
                    <button type="submit" className="bet-btn">
                        10
                    </button>
                    <button type="submit" className="bet-btn">
                        100
                    </button>
                    <button type="submit" className="bet-btn">
                        1000
                    </button>
                    <button type="submit" className="bet-btn">
                        10000
                    </button>
                </div>
                <div className="mutiplier-btns">
                    <button type="submit" className="bet-btn">
                        1/2
                    </button>
                    <button type="submit" className="bet-btn">
                        2x
                    </button>
                    <button type="submit" className="bet-btn">
                        Max
                    </button>
                </div>
            </div>
        </form>
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