import React from 'react';

const MoveButton = ({ onClick, move, currentMove }) => (
    <li>
        <button
            className={ `btn btn-move ${ currentMove }`}
            onClick={ onClick }
        >
            Got to next step # { move }
        </button>
    </li>
);

export default MoveButton;