import React, { useState } from 'react';
import GameBoard from './GameBoard';

function App() {
  function stimulateKeypress(letter)
    {
      //
    }
  
  const [tryNumber, setTryNumber] = useState(0);
  const [inputWords, setInputWords] = useState(Array(5).fill(""));
  const [coloredCells, setColoredCells] = useState(Array(4).fill(0));
  const [targetWord, setTargetWord] = useState("TARGET"); // replace with actual target word
  const [focusedButtonId, setFocusedButtonId] = useState(0);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupFailureOpen, setPopupFailureOpen] = useState(false);
  const [popupFailureText, setPopupFailureText] = useState("");

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const backslashPress = () => {
  };

  const checkInputInWordlist = (input) => {
    // replace with actual function to check input against word list
    return true;
  };

  const startit = () => {
    // replace with actual function to start game
  };

  const stopit = () => {
    // replace with actual function to stop game
  };

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const openPopupFailure = () => {
    setPopupFailureOpen(true);
  };

  const closePopupFailure = () => {
    setPopupFailureOpen(false);
  };

  const changePopupFailureText = (word) => {
    setPopupFailureText(`The word was: ${word}`);
  };

  const handleInputChange = (event, index) => {
    //
  };

  const handleInputKeyDown = (event) => {
    //
  };

  const onFocus = () => {
    //
  };

  const onEnterButtonClick = async () => {
    // 
  };

  return (
    <div className="App">
      <GameBoard/>

      <div class="keyboardPosition">
          <table align="center" style={{ marginTop: '-8px' }}>
            <tr>
              <th><button className="keyButton" id="Q" onClick={() => stimulateKeypress('Q')}>Q</button></th>
              <th><button className="keyButton" id="W" onClick={() => stimulateKeypress('W')}>W</button></th>
              <th><button className="keyButton" id="E" onClick={() => stimulateKeypress('E')}>E</button></th>
              <th><button className="keyButton" id="R" onClick={() => stimulateKeypress('R')}>R</button></th>
              <th><button className="keyButton" id="T" onClick={() => stimulateKeypress('T')}>T</button></th>
              <th><button className="keyButton" id="Y" onClick={() => stimulateKeypress('Y')}>Y</button></th>
              <th><button className="keyButton" id="U" onClick={() => stimulateKeypress('U')}>U</button></th>
              <th><button className="keyButton" id="I" onClick={() => stimulateKeypress('I')}>I</button></th>
              <th><button className="keyButton" id="O" onClick={() => stimulateKeypress('O')}>O</button></th>
              <th><button className="keyButton" id="P" onClick={() => stimulateKeypress('P')}>P</button></th>
            </tr>
          </table>

          <table align="center" style={{ marginTop: '-8px' }}>
              <tr>
                <th><button className="keyButton" id="A" onClick={() => stimulateKeypress('A')}>A</button></th>
                <th><button className="keyButton" id="S" onClick={() => stimulateKeypress('S')}>S</button></th>
                <th><button className="keyButton" id="D" onClick={() => stimulateKeypress('D')}>D</button></th>
                <th><button className="keyButton" id="F" onClick={() => stimulateKeypress('F')}>F</button></th>
                <th><button className="keyButton" id="G" onClick={() => stimulateKeypress('G')}>G</button></th>
                <th><button className="keyButton" id="H" onClick={() => stimulateKeypress('H')}>H</button></th>
                <th><button className="keyButton" id="J" onClick={() => stimulateKeypress('J')}>J</button></th>
                <th><button className="keyButton" id="K" onClick={() => stimulateKeypress('K')}>K</button></th>
                <th><button className="keyButton" id="L" onClick={() => stimulateKeypress('L')}>L</button></th>
              </tr>
          </table>

          <table align="center" style={{ marginTop: '-8px' }}>
              <tr>
                <th><button className="specialButton" onClick={onEnterButtonClick()}>ENTER</button></th>
                <th><button className="keyButton" id="Z" onClick={() => stimulateKeypress('Z')}>Z</button></th>
                <th><button className="keyButton" id="X" onClick={() => stimulateKeypress('X')}>X</button></th>
                <th><button className="keyButton" id="C" onClick={() => stimulateKeypress('C')}>C</button></th>
                <th><button className="keyButton" id="V" onClick={() => stimulateKeypress('V')}>V</button></th>
                <th><button className="keyButton" id="B" onClick={() => stimulateKeypress('B')}>B</button></th>
                <th><button className="keyButton" id="N" onClick={() => stimulateKeypress('N')}>N</button></th>
                <th><button className="keyButton" id="M" onClick={() => stimulateKeypress('M')}>M</button></th>
                <th><button className="specialButton" onclick={backslashPress()}>DELETE</button></th>
              </tr>
          </table>
      </div>
    </div>
  );
}

export default App;
