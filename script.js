const buttons = document.getElementById('buttons');

const sounds = [
    'applause',
    'boo',
    'gasp',
    'tada',
    'victory',
    'wrong'
];

let currentAudio = null;

sounds.forEach(sound => {
    const button = document.querySelector(`.${sound}`);

    if (button) {
        button.addEventListener('click', () => {
            stopSound();

            currentAudio = new Audio(`sounds/${sound}.mp3`);
            currentAudio.play();
        });
    }
});

function stopSound() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
}

const stopButton = document.querySelector('.stop');

stopButton.addEventListener('click', stopSound);
