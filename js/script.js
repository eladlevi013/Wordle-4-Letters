const validWords = window.validWords;

// constants
const ENTER_KEY_CODE = 13;
const BACKSLASH_KEY_CODE = 8;
const SUCCESS_MODAL_ID = 'success-modal';
const FAILURE_MODAL_ID = 'failure-modal';
const ANSWER = validWords[Math.floor(Math.random() 
    * validWords.length)];
const BLACK_CODE = 0;
const YELLOW_CODE = 1;
const GREEN_CODE = 2;
const COLORS = {
    0: "#3A3A3C",
    1: "#C9B458",
    2: "#6AAA64"
}

// global variables
let tryNumber = 0;
var focusedInputId = 0;

function onFocus() {
    $(`#${tryNumber}`).focus();
}

async function onEnterButtonClick(){
    let inputWord = '';

    // get guessed word from input fields
    for (let i = 0; i < 4; i++) {
        inputWord += $(`#${i + tryNumber}`).val().toUpperCase();
    }
    
    if (wordInValidWordlist(inputWord)) {
        let guessAccurateLetters = [];
        let coloredGuess = [0, 0, 0, 0];

        focusedInputId += 1;
        tryNumber += 4;
        
        // focus on next input field
        if (focusedInputId <= 20) {
            $(`#${focusedInputId}`).focus();
        }

        // classifying letters in guessed word
        for (let i = 0; i < inputWord.length; i++) {
            let letterFound = false;
            
            for (let j = 0; j < ANSWER.length; j++) {
                if (inputWord[i] == ANSWER[j]) {
                    if (i == j) {
                        coloredGuess[i] = GREEN_CODE;
                        guessAccurateLetters.push(inputWord[i]);
                        
                        if (guessAccurateLetters.length == 4) {
                            startConfetti();
                            stopConfetti();
                            openPopup();
                        }
                    } else {
                        letterFound = true;
                    }
                }
            }
            
            // if the letter is not in the right place, but it is in the word
            if (!guessAccurateLetters.includes(inputWord[i]) && letterFound) {
                coloredGuess[i] = YELLOW_CODE;
            }
        }

        // color the actual word
        for (let i = 0; i < 4; i++) {
            let color = getColor(coloredGuess[i]);

            $(`#${tryNumber - 4 + i}`).css({
                'transform': 'rotateX(360deg)',
                'background-color': color,
                'transition': 'transform 0.8s, background-color 0.8s'
            });

            await sleep(400);
        }

        // coloring keyboard
        for (let i = 0; i < 4; i++) {
            let color = getColor(coloredGuess[i]);
            $(`#${inputWord[i]}`).css('background-color', color);
        }
        
        // if the user has tried 5 times
        if (tryNumber >= 20) {
            let colorCounterMatch = 0;
            
            // check if the user has guessed the word
            for (let i = 0; i < 4; i++) {
                if (coloredGuess[i] == GREEN_CODE) {
                    colorCounterMatch++;
                }
            }

            if (colorCounterMatch != 4) {
                changePopupFailureText(ANSWER);
                openPopupFailure();
            }
        } else {
            onFocus();
        }

        onFocus();
    } else {
        // shake the input fields
        for (let i = 0; i < 4; i++) {
            $(`#${i + tryNumber}`).css('animation', 'anim 0.25s ease-in-out');
            $(`<style>
                @keyframes anim {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-15px); }
                    75% { transform: translateX(15px); }
                } </style>`).appendTo('head');
            setTimeout(function() {
                $(`#${i + tryNumber}`).css('animation', 'none');
            }, 250); 
        }
    }
}

function validInputCharacter(keyCode) {
    return (keyCode >= 'A' && keyCode <= 'Z') 
        || (keyCode >= 'a' && keyCode <= 'z');
}

$(document).on('keydown', function(event) {
    // focusing on the first input field
    $(`#${focusedInputId}`).focus();

    if (event.keyCode == ENTER_KEY_CODE) {
        onEnterButtonClick();
    } else if (validInputCharacter(event.key)
        && event.key != 'Backspace') {
        if (focusedInputId < tryNumber + 3) {
            if ($(`#${focusedInputId}`).val().length > 0) {
                if (focusedInputId <= 20) {
                    $(`#${focusedInputId + 1}`).focus();
                    focusedInputId += 1;
                }
            }
        }
   }
});

function getColor(color) {
    if (color == GREEN_CODE) {
        return COLORS[GREEN_CODE];
    } else if (color == YELLOW_CODE) {
        return COLORS[YELLOW_CODE];
    } else {
        return COLORS[BLACK_CODE];
    }
}

$(document).on('keyup',function(event) {
    if(event.keyCode == BACKSLASH_KEY_CODE) {
        deleteLastLetter();
    }
});

function wordInValidWordlist(inputWord) {
    for(let i = 0; i < validWords.length; i++)
    {
        if(inputWord == validWords[i]) {
            return true;
        }
    }

    return false;
}

function deleteLastLetter()
{
    if (focusedInputId >= tryNumber) {
        if (focusedInputId == tryNumber) {
            $(`#${focusedInputId}`).val('');
        } else {
            $(`#${focusedInputId}`).val('');
            focusedInputId--;
            $(`#${focusedInputId}`).focus();
        }
    }
}

function keyPress(letter) {
    if(focusedInputId < tryNumber + 3) {
        if($(`#${focusedInputId}`).val().length > 0) {
            if(focusedInputId < 19) {
                $(`#${focusedInputId + 1}`).focus();
                focusedInputId += 1;
                $(`#${focusedInputId}`).val(letter);
            }
        } else if($(`#${focusedInputId}`).val().length == 0) {
            $(`#${focusedInputId}`).val(letter);
        }
    }
}