import React, { Component } from "react";

import './Mines-page.css';

import Board from ''

class Mines extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 5,
            width: 5,
            mines: 5
        };
    }

    createBoard() {
        for (let i=0; i < 25; i++) {

        }
    }

    render() { 
        const { height, width, mines } = this.state;
        return (
            <div>
                <p className="text-center font-weight-bold">MINES PAGE</p>
                <div className="game-container p-3 mb-2">
                    <div className="game-board">
                        <Board height={height} width={width} mines={mines}/>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default Mines;