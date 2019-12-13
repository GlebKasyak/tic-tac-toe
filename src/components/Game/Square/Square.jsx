import React from "react";

const Square = ({ value, onClick, index, winLine }) => {

    let highlight;
    //проверка линии
    if(winLine && winLine.indexOf(index) >= 0 ) highlight = "highlight";

    return (
        <button className={ `square ${ highlight }` } onClick={ onClick }>
            { value }
        </button>
    )

};

export default Square;