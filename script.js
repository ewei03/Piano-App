const WHITE_KEYBINDS = ['a', 's', 'd', 'f', 'g', 'h', 'j'];
const BLACK_KEYBINDS = ['w', 'e', 'r', 't', 'y'];

const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key));
})

document.addEventListener('keydown', e => {
    if (e.repeat) {
        return;
    }

    const key = e.key.toLowerCase();
    const whiteIndex = WHITE_KEYBINDS.indexOf(key);
    const blackIndex = BLACK_KEYBINDS.indexOf(key);

    if (whiteIndex > -1) {
        playNote(whiteKeys[whiteIndex]);
    }
    if (blackIndex > -1) {
        playNote(blackKeys[blackIndex]);
    }
})

function playNote(key) {
    const note = document.getElementById(key.dataset.note);
    const noteName = key.getAttribute("data-note");

    note.currentTime = 0;
    note.play();
    
    key.classList.add('active');
    document.getElementById("name").innerHTML = noteName;

    note.addEventListener('ended', () => {
        document.getElementById("name").innerHTML = "";
        key.classList.remove('active')
    });
}