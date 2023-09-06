console.log("Welcome to spotify");

//Initilize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
  {songName: "Alag-Aasmaan",filePath: "songs/alag-aasman.mp3",coverPath: "cover/alag aasam.webp"} ,
  {songName: "Baarishein",filePath: "songs/Baarishein.mp3",coverPath: "cover/Baarishein.jpeg"} ,
  {songName: "kahani suno 2.0",filePath: "songs/Kahani Suno.mp3",coverPath: "cover/kahanisuno.jpeg"} ,
  {songName: "mere sawal ka",filePath: "songs/Mere Sawaal Ka.mp3",coverPath: "cover/mere sawal ka.jpeg"} ,
  {songName: "voh lamhe",filePath: "songs/Woh Lamhe Zeher.mp3",coverPath: "cover/voh lamhe.jpg"},
  {songName: "Asal mein",filePath: "songs/Asal Mein.mp3",coverPath: "cover/asal mein.jpeg"} ,
  {songName: "Tera-zikr",filePath: "songs/Tera Zikr.mp3",coverPath: "cover/tera zikr.jpeg"} ,
  {songName: "Raatan lambiyan",filePath: "songs/raatan Lambiyan.mp3",coverPath: "cover/raatan lambiyan.jpeg"} ,
  {songName: "sach keh raha hai",filePath: "songs/Sach keh raha hai.mp3",coverPath: "cover/sach keh raha h.jpeg"} ,
  {songName: "Ranjha",filePath: "songs/Ranjha.mp3",coverPath: "cover/ranjha.jpeg"} ,
  {songName: "Ajab-si",filePath: "songs/Ajab Si.mp3",coverPath: "cover/ajab si.jpeg"} ,
  {songName: "Baarish",filePath: "songs/Baarish.mp3",coverPath: "cover/baarish.jpeg"} ,
  {songName: "Tu chaiye",filePath: "songs/Tu Chaiye.mp3",coverPath: "cover/tu chaiye.jpeg"} ,
  {songName: "Ishq wala love",filePath: "songs/Ishq Wala Love.mp3",coverPath: "cover/ishq wala love.jpeg"} ,
  {songName: "Surili aakhiyon wale",filePath: "songs/Surili Akhiyon Wale.mp3",coverPath: "cover/surili akhiyon wale.jpeg"} 
]

songItems.forEach((element, i)=>{ 
  element.getElementsByTagName("img").src = songs[i].coverPath; 
  element.getElementsByClassName("songName").innerText = songs[i].songName; 
})


// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
      audioElement.play();
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
      gif.style.opacity = 1;
  }
  else{
      audioElement.pause();
      masterPlay.classList.remove('fa-pause-circle');
      masterPlay.classList.add('fa-play-circle');
      gif.style.opacity = 0;
  }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
  // Update Seekbar
  progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
  myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
  audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
      element.classList.remove('fa-pause-circle');
      element.classList.add('fa-play-circle');
  })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click', (e)=>{ 
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove('fa-play-circle');
      e.target.classList.add('fa-pause-circle');
      audioElement.src = `songs/${songIndex+1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
  })
})

document.getElementById('next').addEventListener('click', ()=>{
  if(songIndex>=9){
      songIndex = 0;
  }
  else{
      songIndex += 1;
  }
  audioElement.src = `songs/${songIndex+1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
  if(songIndex<=0){
      songIndex = 0
  }
  else{
      songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex+1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
})