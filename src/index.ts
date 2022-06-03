const soundEls = document.querySelectorAll('audio');
const keyEls = document.getElementsByClassName(
  // eslint-disable-next-line @typescript-eslint/comma-dangle
  'key'
) as HTMLCollectionOf<HTMLElement>;

function playKey(val: string): void {
  // get corresponding div for visual
  for (let i = 0; i < keyEls.length; i += 1) {
    if (keyEls[i].dataset.key === val) {
      keyEls[i].classList.add('playing');
      setTimeout(() => {
        keyEls[i].classList.remove('playing');
      }, 100);
    }
  }
  // audio el
  soundEls.forEach((el: HTMLAudioElement) => {
    if (el.dataset.key === val) {
      const plaguedByLinters = el;
      plaguedByLinters.currentTime = 0;
      plaguedByLinters.play();
    }
  });
}

window.addEventListener('keydown', (e) => {
  if (e.keyCode) {
    const keyNum: string = e.keyCode.toString();
    playKey(keyNum);
  }
});
