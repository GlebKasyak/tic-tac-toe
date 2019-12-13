import React from 'react';
import MoveButton from "./MoveButton";

const GameInfo = ({ history, stepNumber, jumpTo }) => {

    const moves = history.map((step, move) => {
        if(!!move) {
            return <MoveButton
                currentMove={ move === stepNumber ? "currentMove" : "" }
                key={ move }
                move={ move }
                onClick={ () => jumpTo(move) }
            />;
        }
        return false
    });

    return (
        <div className="game-info">
            <h2>Game information</h2>
            <ol className="info-list">{ moves }</ol>
        </div>
    );
};

export default GameInfo;