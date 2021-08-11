import React, { useState } from "react";

import Burger from '../../assets/burger-card-front.png';
import BurntPatty from '../../assets/patty-card-back.png'

import 'bootstrap/dist/css/bootstrap.css';
import './Card-component.css'

function Card() {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="play-card" onClick={() => setFlipped(true)}>    
            <div className={flipped ? "play-card-content flipped" : "play-card-content"}>
                <div className="card-up">
                    <CardFaceUp />
                </div>
                <div className="card-down">
                    <CardFaceDown />
                </div>
            </div>
        </div>
    )
}

function CardFaceDown() {
    return (
        <img className="card-image card-face-down" src={Burger} height="40" alt="burger" />
    )
}

function CardFaceUp() {
    return (
        <img className="card-image card-face-up" src={BurntPatty} height="40" alt="burger" />
    )
}
 
export default Card;