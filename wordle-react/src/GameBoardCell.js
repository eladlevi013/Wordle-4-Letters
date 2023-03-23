import React from 'react';

function GameBoardCell(props) {
  return (
    <th>
      <input 
        type="text" 
        onKeyPress={event => {
          const keyCode = event.keyCode || event.which;
          const validKey = (
            (keyCode >= 65 && keyCode <= 90) || // A-Z
            (keyCode >= 97 && keyCode <= 122) || // a-z
            keyCode === 8 // Backspace
          );
          if (!validKey) {
            event.preventDefault();
          }
        }} 
        maxLength="1" 
        id={props.id} 
        inputMode='none' 
        data-disable-touch-keyboard
      />
    </th>
  );
}

export default GameBoardCell;
