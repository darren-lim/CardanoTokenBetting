import React, {  } from "react";

import burger from '../../assets/burgerLogo.png';

import 'bootstrap/dist/css/bootstrap.css';
import './Card-component.css'

function Card({ isFaceDown }) {
    return (
        <div className="card position-relative m-1">
            { isFaceDown ?
                <div className="card-face-down text-center">
                    <img src={burger} height="50" alt="burger" />
                </div>
            :
                <div className="card-face-up text-center">
                    <img src={burger} alt="burger" />
                </div>
            }
        </div>
    )
}
 
export default Card;