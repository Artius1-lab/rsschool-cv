
function playAudio(){
if(isPlay=true){
  audio.src = " ";
  audio.currentTime = 0;
  audio.play();

} else {
  audio.pause();
}

}
document.getElementById('play-id').addEventListener('click', ()=>{
 playAudio();
});