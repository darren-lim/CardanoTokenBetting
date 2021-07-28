import React, { useState } from "react";

import burger from '../../assets/burger-card-logo.png';
import burnt from '../../assets/patty.png'

import 'bootstrap/dist/css/bootstrap.css';
import './Card-component.css'

function Card() {
    const [flipped, setFlipped] = useState(false);


    return (
        <div className="play-card position-relative m-1 p-3"
            onClick={setFlipped(true)}>    
            { flipped ?
                <CardFaceDown />
            :
                <CardFaceUp />
            }
        </div>
    )
}

function CardFaceDown() {
    return (
        <div className="play-card-face-down text-center">
            <div className="card-image-container">
                <img src={burger} height="60" alt="burger" />
            </div>
        </div>
    )
}

function CardFaceUp() {
    return (
        <div className="play-card-face-up text-center">
            <div className="card-image-container">
                <img src={burger} height="60" alt="burger" />
            </div>
        </div>
    )
}
 
export default Card;