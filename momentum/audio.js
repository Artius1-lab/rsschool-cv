import playList from './playList.js';

const audio = new Audio();

function playAudio() {
  let playNum = 0;
  audio.src = playList[playNum].src;// ссылка на аудио-файл;
  audio.currentTime = 0;
  audio.play();
}


document.getElementById('play-id').addEventListener('click', ()=>{
 playAudio();
});

function toggleBtn() {
  document.getElementById('play-id').classList.toggle('pause');
}
document.getElementById('play-id').addEventListener('click', toggleBtn);