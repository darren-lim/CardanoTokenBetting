import React, { useReducer, useState } from "react";
import Card from './Card-component';
import logo from '../../assets/burgerLogo.png';

import 'bootstrap/dist/css/bootstrap.css'; 
import './Bet-component.css';

function Bet(props) {
    const [balance, setBalance] = useState(1000);
    const [betAmount, setBetAmount] = useState(1000);
    const [burntPattiesAmount, setBurntPattiesAmount] = useState(1000);
    // const [bet, setBet] = useState(0);

    // const [isGameStarted, setIsGameStarted] = useState(false);
    // const [numberOfBurntPatties, setNumberOfBurntPatties] = useState(1);

    function getDepositAmount() {
        // pull deposit amount from services
        let deposit = balance;
        return deposit;
    }

    function handleDeposit() {
        // redirect to deposit page
        console.log("deposit");
        return null;
    }

    function handleBetAmount(bet) {
        // begin game or cash out
        setBetAmount(bet);
        console.log(bet);
        return null;
    }

    function handleBurntPattiesAmount(amount) {
        setBurntPattiesAmount(amount)
        console.log(amount);
        return null;
    }

    function handleSubmit() {
        console.log("Deposit: " + balance);
        console.log("Bet: " + betAmount);
        console.log("Burnt Patties: " + burntPattiesAmount);
        return null;
    }

    return (
        <div>
            <div className="balance-component">
                <Balance balance={balance} deposit={handleDeposit} />
            </div>
            <div className="bet-amount-component">
                <BetAmount onChangeBetValue={handleBetAmount} deposit={balance}/>
            </div>
            <div className="burnt-amount-component">
                <BurntPatties onChangeBurntValue={handleBurntPattiesAmount}/>
            </div>
            <button type="button" onClick={() => handleSubmit()} className="submit-btn">
                Start
            </button>
        </div>
    );
}

function Balance(props) {
    return (
        <div className="balance-container">
            <label className="label row">Balance</label>
            <div className="row">
                <img src={logo} alt="coin logo" className="balance-logo-img" />
                <input
                    readOnly={true}
                    type="text"
                    placeholder="balance"
                    value={props.balance}
                    className="balance-amount"
                />
                <button type="button" onClick={props.deposit} className="deposit-btn">
                    Deposit
                </button>
            </div>
        </div>
    )
}

function BetAmount(props) {
    const [betAmount, setBetAmount] = useState(100);

    function handleBetAmount(amount) {
        setBetAmount(amount)
        props.onChangeBetValue(amount);
    }

    return (
        <div className="balance-container">
            <label className="label row">Bet Amount</label>
            <div className="row">
                <input
                    type="text"
                    placeholder=""
                    value={betAmount}
                    onChange={ (event) => handleBetAmount(event.target.value) }
                    className="bet-amount"
                />
            </div>
            <div>
                <div className="powers-of-ten-btns">
                    <button type="button" onClick={() => handleBetAmount(10)} className="bet-btn">
                        10
                    </button>
                    <button type="button" onClick={() => handleBetAmount(100)} className="bet-btn">
                        100
                    </button>
                    <button type="button" onClick={() => handleBetAmount(1000)} className="bet-btn">
                        1000
                    </button>
                    <button type="button" onClick={() => handleBetAmount(10000)} className="bet-btn">
                        10000
                    </button>
                </div>
                <div className="multiplier-btns">
                    <button type="button" onClick={() => handleBetAmount(props.deposit/2)} className="bet-btn">
                        1/2
                    </button>
                    <button type="button" onClick={() => handleBetAmount(props.deposit*2)} className="bet-btn">
                        2x
                    </button>
                    <button type="button" onClick={() => handleBetAmount(props.deposit)} className="bet-btn">
                        Max
                    </button>
                </div>
            </div>
        </div>
    );
}

function BurntPatties(props) {
    const [burntAmount, setBurntAmount] = useState(1);

    function handleBurntAmount(amount) {
        setBurntAmount(amount)
        props.onChangeBurntValue(amount);
    }

    return (
        <div className="burnt-container">
            <label className="label row">Amount of Burnt Patties</label>
            <div className="row">
                <input
                    type="text"
                    placeholder=""
                    value={burntAmount}
                    onChange={ (event) => handleBurntAmount(event.target.value) }
                    className="burnt-amount"
                />
            </div>
            <div className="amount-of-burnt-btns">
                <button type="button" onClick={() => handleBurntAmount(1)} className="bet-btn">
                    1
                </button>
                <button type="button" onClick={() => handleBurntAmount(3)} className="bet-btn">
                    3
                </button>
                <button type="button" onClick={() => handleBurntAmount(5)} className="bet-btn">
                    5
                </button>
                <button type="button" onClick={() => handleBurntAmount(10)} className="bet-btn">
                    10
                </button>
            </div>
        </div>
    )
}

export default Bet;