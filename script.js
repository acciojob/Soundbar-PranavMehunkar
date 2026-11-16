const buttons = document.getElementById('buttons');
const soundButtons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');

let currentAudio = null;

soundButtons.forEach(button => {
    button.addEventListener('click', () => {

        // Stop previous audio
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        // Get sound name from button text
        const soundName = button.textContent.toLowerCase();

        // Play selected sound
        currentAudio = new Audio(`sounds/${soundName}.mp3`);

        currentAudio.play().catch(error => {
            console.error('Audio playback failed:', error);
        });
    });
});

// Stop button functionality
stopButton.addEventListener('click', () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
});
