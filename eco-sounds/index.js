const playBtn = document.querySelector('.btn-audio');
const audio = new Audio();
let isPlay = false;
const links = document.querySelector('.main-menu');
const image = document.querySelector('.main-container');


function playAudio() {
  if(!isPlay) {
    audio.src = "./assets/audio/forest.mp3";
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
  } else {
    audio.pause();
    isPlay = false;
  }
}

function toggleBtn() {
  playBtn.classList.toggle('pause');
}

function changeImage(event) {
  if (event.target.dataset.bird){
  image.style.backgroundImage = `url('./assets/img/${event.target.dataset.bird}.jpg')`;
  }
}



playBtn.addEventListener('click', toggleBtn);
playBtn.addEventListener('click', playAudio);
links.addEventListener('click', changeImage);