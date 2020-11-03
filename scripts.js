window.addEventListener('keydown', function (e) {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');

});

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const allKeys = document.querySelectorAll(".key");
allKeys.forEach(key => key.addEventListener('transitionend', removeTransition));

function playMusic(instrument) {
    var music = document.getElementById(instrument);
    if (music.paused) {
        music.play()
    }
    else {
        music.pause();
        audio.currentTime = 0;
    }
}