var audio = document.createElement('audio');
audio.setAttribute('src', 'sound.mp3');
audio.loop = true;

function playSound() {
    var promise = audio.play();
    if (promise !== undefined) {
        promise.catch(function () {
            // Browsers block sound until the user interacts with the page.
            // Start the engine sound on the first click or key press instead.
            function startOnInteraction() {
                audio.play();
                document.removeEventListener('click', startOnInteraction);
                document.removeEventListener('keydown', startOnInteraction);
            }
            document.addEventListener('click', startOnInteraction);
            document.addEventListener('keydown', startOnInteraction);
        });
    }
}

playSound();
