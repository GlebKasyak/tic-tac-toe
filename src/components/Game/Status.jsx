import React from "react";


export const getPlayerStatus = status => {
    return status ? "X" : "O"
};

export const showADraw = status => {
    return (
        <h1 className="draw">{ status }</h1>
    )
};


const nextPlayer = player => (
    <h1>Next player:
        <span className="next-player" >{ getPlayerStatus(player) }</span>
    </h1>
);

const winningPlayer = win => (
    <h1>Winner <span className="winner-player">{ win }</span></h1>
);


export const Status = ({winner, player, draw}) => (
    <>
        { (winner && winningPlayer(winner.squares)) || (draw && showADraw(draw)) || nextPlayer(player) }
    </>
);