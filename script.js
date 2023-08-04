console.log("welcome to spotify");
let songsongIndex = 0;
let audioelement = new Audio("songs/1.mp3");
let Masterplay = document.getElementById("Masterplay");
let myprogressbar = document.getElementById("myprogressbar");
let mygif = document.getElementById("gif");
let songitem = Array.from(document.getElementsByClassName("songitem"));
let mastersongname = document.getElementById("mastersongname");
let songs = [
  {
    songName: "Khudi",
    filePath: "songs/1.mp3",
    coverPath: "covers/khudicover.jpeg",
  },
  {
    songName: "choo-lo",
    filePath: "songs/2.mp3",
    coverPath: "covers/choolo.jpg",
  },
  {
    songName: "Aaoge Tum Kabhi",
    filePath: "songs/3.mp3",
    coverPath: "covers/aaogetumkabhi.jpeg",
  },
  {
    songName: "Dil Mere",
    filePath: "songs/4.mp3",
    coverPath: "covers/dilmere.jpg",
  },
  {
    songName: "Aaftaab",
    filePath: "songs/5.mp3",
    coverPath: "covers/aaftaabcover.jpg",
  },
];
songitem.forEach((element, i) => {
  console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
});

//audioelement.play();
Masterplay.addEventListener("click", () => {
  if (audioelement.paused || audioelement.currentTime <= 0) {
    audioelement.play();
    Masterplay.classList.remove("fa-circle-play");
    Masterplay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioelement.pause();
    Masterplay.classList.remove("fa-circle-pause");
    Masterplay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});
audioelement.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  //update seekbar
  Progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
  console.log(Progress);
  myprogressbar.value = Progress;
});
myprogressbar.addEventListener("change", () => {
  audioelement.currentTime =
    (myprogressbar.value * audioelement.duration) / 100;
});
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songitemplay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};
Array.from(document.getElementsByClassName("songitemplay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioelement.src = `songs/${songIndex + 1}.mp3`;
      mastersongname.innerText = songs[songIndex].songName;
      audioelement.currentTime = 0;
      audioelement.play();
      gif.style.opacity = 1;
      Masterplay.classList.remove("fa-circle-play");
      Masterplay.classList.add("fa-circle-pause");
    });
  }
);
document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 4) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioelement.src = `songs/${songIndex + 1}.mp3`;
  mastersongname.innerText = songs[songIndex].songName;
  audioelement.currentTime = 0;
  audioelement.play();
  gif.style.opacity = 1;
  Masterplay.classList.remove("fa-circle-play");
  Masterplay.classList.add("fa-circle-pause");
});
document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioelement.src = `songs/${songIndex + 1}.mp3`;
  mastersongname.innerText = songs[songIndex].songName;
  audioelement.currentTime = 0;
  audioelement.play();
  gif.style.opacity = 1;
  Masterplay.classList.remove("fa-circle-play");
  Masterplay.classList.add("fa-circle-pause");
});
