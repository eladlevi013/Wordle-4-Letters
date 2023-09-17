function isAlphabetKey(evt) {
    const keyCode = evt.keyCode || evt.which;
    return (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || keyCode == 8;
}