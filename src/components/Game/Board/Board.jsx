import React, { Fragment } from "react";
import Square from "../Square/Square";


const Board = ({ squares, onClick, winLine }) => {
    const renderSquare = i =>
        <Square
            value={ squares[i] }
            index={ i }
            onClick={ () => onClick(i) }
            winLine={ winLine }
        />;

    return (
        <div className="board-row">
            { squares.map((sq, i) => <Fragment key={ i }>{ renderSquare(i) }</Fragment> ) }
        </div>
    );
};

export default Board;