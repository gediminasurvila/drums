const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', playSound);
    button.addEventListener('transitionend', removeClass);
});

window.addEventListener('keydown', playSound);

function playSound(e) {
    let key = e.keyCode;
    if(!key) {
       key = e.target.getAttribute('data-key');
    }
    const button = document.querySelector(`button[data-key="${key}"]`);
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    button.classList.add('active');
}

function removeClass(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('active');
}