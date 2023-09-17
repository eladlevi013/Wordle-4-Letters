function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(ms)
        }, ms);
    })
}

async function closePopup() {
    $(`#${SUCCESS_MODAL_ID}`).css('visibility', 'hidden');
    $(`#${SUCCESS_MODAL_ID}`).css('opacity', 0);
    await sleep(500);
    $(`#${SUCCESS_MODAL_ID}`).css('position', 'static');
}

function openPopup() {
    $(`#${SUCCESS_MODAL_ID}`).css('position', 'fixed');
    $(`#${SUCCESS_MODAL_ID}`).css('visibility', 'visible');
    $(`#${SUCCESS_MODAL_ID}`).css('opacity', 1);
}

async function openPopupFailure() {
    await sleep(450);
    $(`#${FAILURE_MODAL_ID}`).css('position', 'fixed');
    $(`#${FAILURE_MODAL_ID}`).css('visibility', 'visible');
    $(`#${FAILURE_MODAL_ID}`).css('opacity', 1);
}

async function closePopupFailure() {
    $(`#${FAILURE_MODAL_ID}`).css('visibility', 'hidden');
    $(`#${FAILURE_MODAL_ID}`).css('opacity', 0);
    await sleep(500);
    $(`#${FAILURE_MODAL_ID}`).css('position', 'static');
}

function changePopupFailureText(word) {
    $('#failurePopupText').html('THE WORD WAS: ' + word);
}

function copyToClipboard() {
    let emoji_message = "FOURDLE:\n";

    for(let i = 0; i < tryNumber; i++) {
        let color = $(`#${i}`).css('background-color');

        if (color == "rgb(58, 58, 60)") {
            emoji_message += "⬛";
        } else if (color == "rgb(201, 180, 88)") {
            emoji_message += "🟨";
        } else if (color == "rgb(106, 170, 100)") {
            emoji_message += "🟩";
        }

        if((i + 1) % 4 == 0) {
            emoji_message += "\n";
        }
    }

    emoji_message += "WORD: " + ANSWER;
    navigator.clipboard.writeText(emoji_message);
}