console.log("Wellcome to Playhunt");

let songIndex = 0;
let audioElement = new Audio("songs/295.mp3");
let masterPlay = document.getElementById("masterPlay");
let myprogressBar = document.getElementById("myprogressBar");
let gif = document.getElementById("gif");

let songs = [
  {songName:"295",filePath:"songs/295.mp3",coverPath:"images/cover/295.jpg"},
  {songName:"295",filePath:"songs/295.mp3",coverPath:"images/cover/295.jpg"},
  {songName:"295",filePath:"songs/295.mp3",coverPath:"images/cover/295.jpg"},
  {songName:"295",filePath:"songs/295.mp3",coverPath:"images/cover/295.jpg"},
  {songName:"295",filePath:"songs/295.mp3",coverPath:"images/cover/295.jpg"},
  {songName:"295",filePath:"songs/295.mp3",coverPath:"images/cover/295.jpg"},
  {songName:"295",filePath:"songs/295.mp3",coverPath:"images/cover/295.jpg"},
]


masterPlay.addEventListener('click',()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
  }
  else{
    audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
    gif.style.opacity = 0;
  }
})

audioElement.addEventListener('timeupdate',()=>{
  console.log("timeupdate");

  progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  console.log(progress);
  myprogressBar.value = progress;
})

myprogressBar.addEventListener('change',()=>{
  audioElement.currentTime = myprogressBar.value*audioElement.duration/100;
})
