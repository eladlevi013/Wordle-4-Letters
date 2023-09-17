const startConfetti = () => {
    setTimeout(function () {
      confetti.start();
    }, 1000);
}

const stopConfetti = () => {
    setTimeout(function () {
        confetti.stop();
    }, 5000);
}
