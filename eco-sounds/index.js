const playBtn = document.querySelector('.btn-audio');
const audio = new Audio();
const links = document.querySelector('.main-menu');
const logoBird = document.querySelector('.logo');
const image = document.querySelector('.main-container');
const birdsName = document.querySelectorAll("[data-bird]");
let isPlay = false; // проверяем, проигрывается сейчас музыка или нет
let currentAudioPath;



function toggleBtn() {
  playBtn.classList.toggle('pause');
}


function playAudio(event) {
  toggleBtn() // для того, чтобы менялось изображение кнопки на pause

  if (!currentAudioPath){
    currentAudioPath = `./assets/audio/${event.target.dataset.bird}.mp3`;
  }

  if(!isPlay) {
    audio.src = currentAudioPath;
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
  } else {
    audio.pause();
    isPlay = false;
  }
}



function changeImage(event) {
  if (event.target.dataset.bird){
  image.style.backgroundImage = `url('./assets/img/${event.target.dataset.bird}.jpg')`;
  }
}



function changeAudio(event) {
  currentAudioPath = `./assets/audio/${event.target.dataset.bird}.mp3`;
  if(!isPlay) {
    audio.src = currentAudioPath;
    audio.currentTime = 0;
    audio.play();
    isPlay = true;

    toggleBtn() // для того, чтобы менялось изображение кнопки на pause
  } else {
    audio.src = currentAudioPath;
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
  }

  birdsName.forEach((el) => { // для добавления и удаления css класса active, чтобы активный элемент выделялся стилем
    if (el == event.target){
      el.classList.add('active')
    } else {
      el.classList.remove('active')
    }
  })

}




playBtn.addEventListener('click', playAudio);
links.addEventListener('click', changeImage);
links.addEventListener('click', changeAudio);
logoBird.addEventListener('click', changeAudio);
logoBird.addEventListener('click', changeImage);