const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const btnPular = document.querySelector(".pular-btn")
const videos = ["./media/video.mp4", "./media/video2.mp4", "./media/video3.mp4"]
const source = document.querySelector("#src")

let index = 0

btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});

// preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});

btnPular.addEventListener("click", () => {
  index = (index + 1) % videos.length
  source.src = videos[index]
  btn.classList.remove("slide")
  video.load()
  video.play()
})