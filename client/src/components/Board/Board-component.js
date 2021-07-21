import React, { useState } from "react";
import Card from './Card-component';

import 'bootstrap/dist/css/bootstrap.css'; 
import './Board-component.css';

function Board(props) {
    const [cards, setCards] = useState(
        [   
            {mine: false},{mine: false},{mine: false},{mine: false},{mine: false},
            {mine: false},{mine: false},{mine: false},{mine: false},{mine: false},
            {mine: false},{mine: false},{mine: false},{mine: false},{mine: false},
            {mine: false},{mine: false},{mine: false},{mine: false},{mine: false},
            {mine: false},{mine: false},{mine: false},{mine: false},{mine: false}
        ]
    );
    
    function getBoard() {
        // call function from services 
        // which does GET request to server for which cards are mines
    }

    function renderBoard() {
        return(
            cards.map((card, index) => {
                return ( 
                    <Card key={index} isFaceDown={true} />
                );
            })
        )
    }

    return ( 
        <div className="row">
            <div className="bet-container w-30">
                <p>bet info</p>
            </div>
            <div className="play-card-container float-right w-70">
                { renderBoard() }
            </div> 
        </div>
    );
    
}
 
export default Board;