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
        <div className="cards-container">
            { renderBoard() }
        </div> 
    );
    
}
 
export default Board;