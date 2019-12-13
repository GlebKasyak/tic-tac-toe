import React, { useState } from "react";
import Board from "./Board/Board";
import { calculateWinner } from "../../functions";
import GameInfo from "./GameInfo/GameInfo";
import { getPlayerStatus, Status } from "./Status";

const initialSquares = Array(9).fill(null);

const Game = () => {

    const [history, setHistory] = useState([{squares: initialSquares}]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);

    const handleClick = i => {
        //при откаде хода, стирается вся будующая история (если начать ходить)
        const historyClone = history.slice(0, stepNumber + 1);
        const current = historyClone[historyClone.length - 1];
        const squaresClone = current.squares.slice();

        //конец игры
        if(calculateWinner(squaresClone) || squaresClone[i]) return;

        squaresClone[i] = getPlayerStatus(xIsNext);
        setHistory(historyClone.concat({ squares: squaresClone }));
        setStepNumber(historyClone.length);
        setXIsNext(!xIsNext);
    };

    const jumpTo = step => {
        setStepNumber(step) ;
        setXIsNext((step % 2) === 0)
    };

    //старт игры
    const goToStart = (start = 0) => {
        jumpTo(start);
        setHistory([{ squares: initialSquares}])
    };

    //рендер хода, соответсвующего stepNumber
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);
    //ничья
    let draw = current.squares.every(el => !!el) && "Draw";

    return (
        <div className="game">
            <div className="game-board">
                { < Status winner={ winner } player={ xIsNext } draw={ draw } /> }
                <button
                    onClick={ () => goToStart()}
                    className="btn btn-start"
                >Go to game start</button>
                <Board
                    onClick={ i => handleClick(i) }
                    squares={ current.squares }
                    winLine={ winner && winner.winLine }
                />
                { !!stepNumber && <GameInfo history={ history } stepNumber={ stepNumber } jumpTo={ jumpTo }/> }
            </div>
        </div>
    );
};

export default Game;