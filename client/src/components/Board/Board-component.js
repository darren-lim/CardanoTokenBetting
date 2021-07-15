import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function Board(props) {
    const [cards, setCards] = useState(
        0
    );

    function renderBoard() {
        <div className="temp"></div>
    }

    return ( 
        <div className="cards">
            { renderBoard() }
        </div> 
    );
    
}
 
export default Board;