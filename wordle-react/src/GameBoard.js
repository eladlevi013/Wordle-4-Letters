import GameBoardCell from './GameBoardCell';
import React from 'react';

const GameBoard = () => {
    return (
        <table align="center" class="centerTable">
        <tr>
          <GameBoardCell id="0"/>
          <GameBoardCell id="1"/>
          <GameBoardCell id="2"/>
          <GameBoardCell id="3"/>
        </tr>
        <tr>
          <GameBoardCell id="4"/>
          <GameBoardCell id="5"/>
          <GameBoardCell id="6"/>
          <GameBoardCell id="7"/>
        </tr>
        <tr>
          <GameBoardCell id="8"/>
          <GameBoardCell id="9"/>
          <GameBoardCell id="10"/>
          <GameBoardCell id="11"/>
        </tr>
        <tr>
          <GameBoardCell id="12"/>
          <GameBoardCell id="13"/>
          <GameBoardCell id="14"/>
          <GameBoardCell id="15"/>
        </tr>
        <tr>
          <GameBoardCell id="16"/>
          <GameBoardCell id="17"/>
          <GameBoardCell id="18"/>
          <GameBoardCell id="19"/>
        </tr>
      </table>
    )
};

export default GameBoard;
