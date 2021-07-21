import React, {  } from "react";

import burger from '../../assets/burger-card-logo.png';

import 'bootstrap/dist/css/bootstrap.css';
import './Card-component.css'

function Card({ isFaceDown }) {
    return (
        <div className="play-card position-relative m-1 p-3">
            { isFaceDown ?
                <div className="play-card-face-down text-center">
                    <img src={burger} height="60" alt="burger" />
                </div>
            :
                <div className="play-card-face-up text-center">
                    <img src={burger} alt="burger" />
                </div>
            }
        </div>
    )
}
 
export default Card;