import playList from './playList.js';
//---------------------------------Audio player-----------------------------//
document.getElementById('play-id').addEventListener('click', ()=>{
playAudio();
toggleButton();
playPause();
});

document.getElementById('play-next-id').addEventListener('click',()=>{
  playNext();
});

document.getElementById('play-prev-id').addEventListener('click',()=>{
  playPrev();
});

const playPrevButton = document.querySelector('.play-prev');
const playNextButton = document.querySelector('.play-next');
const play = document.querySelector('.play');
const audio = new Audio();
let isPlay = false;
let playNum = 0; 

function playAudio(){
audio.src = playList[playNum].src;
audio.play();
}

function pauseAudio(){
  audio.pause();
}

function playPause(){
  if(!isPlay){
    playAudio()
    isPlay= true;

  }else{
    pauseAudio();
    isPlay = false;
  }
}

function toggleButton(){
play.classList.toggle('pause')
}

const playNext = () => {
  playNum += 1;
  if(!isPlay){
    play.classList.add('pause');
  }else{
    play.classList.remove('pause');
  }
  playAudio();
}

const playPrev = () => {
  playNum -= 1;
if (!isPlay){
  play.classList.add('pause');
  }else{
    play.classList.remove('pause'); 
}
playAudio();
}
//---------------------------------Audio player end-----------------------------//
//-------------------------------------Active track------------------------------//
function activeItem(){
 let playItems = document.querySelectorAll('.play-item');

 if(playItems[playNum].classList.contains('item-active')){
  playItems[playNum].classList.remove('item-active');

  }else 
    playItems[playNum].classList.add('item-active')
}



//-------------------------------------Active track end------------------------//
//-------------------------------------Play track in Playlist------------------//
let playlist = document.querySelectorAll('.play-item');

playlist.forEach((item) => {
  item.addEventListener("click", () => {
      audio.src = item.dataset.mp3;
      audio.load();
      audio.play();
      activeItem();
  });
});
//----------------------------------Play track in Playlist end-----------------//
//-------------------------------- seekBar -----------------------------------//


//--------------------------------seekBar end-------------------------------//




