const playBtn = document.querySelector('.btn-audio');
const audio = new Audio();
let isPlay = false;
const links = document.querySelector('.main-menu');
const image = document.querySelector('.main-container');
const birdsName = document.querySelectorAll("[data-bird]");


function playAudio(event) {
  if(!isPlay) {
    audio.src = `./assets/audio/${event.target.dataset.bird}.mp3`;
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



function changeAudio(event) {
  if(!isPlay) {
    audio.src = `./assets/audio/${event.target.dataset.bird}.mp3`;
    audio.currentTime = 0;
    audio.play();
    isPlay = true;

    toggleBtn() // для того, чтобы менялось изображение кнопки на pause

    birdsName.forEach((el) => { // для добавления и удаления css класса active, чтобы активный элемент выделялся стилем
      if (el == event.target){
        el.classList.add('active')
      } else {
        el.classList.remove('active')
      }
    })

  } else {
    audio.src = `./assets/audio/${event.target.dataset.bird}.mp3`;
    audio.currentTime = 0;
    audio.play();
    isPlay = true;

    birdsName.forEach((el) => {
      if (el == event.target){
        el.classList.add('active')
      } else {
        el.classList.remove('active')
      }
    })
  }
}



playBtn.addEventListener('click', toggleBtn);
playBtn.addEventListener('click', playAudio);
links.addEventListener('click', changeImage);
links.addEventListener('click', changeAudio);