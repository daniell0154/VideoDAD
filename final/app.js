const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const btnPular = document.querySelector(".pular-btn")
const videos = ["./media/video.mp4", "./media/video2.mp4", "./media/video3.mp4"]
const source = document.querySelector("#src")
const header = document.querySelector("header")
const titulo = document.querySelector("h1")
const transicaoVideo = document.querySelector(".videoTransicao");

let index = 0

btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
    video.controls = true
    header.classList.add("no-bg")
    titulo.textContent = ""
  } else {
    btn.classList.remove("slide");
    video.play();
    video.controls = false
    header.classList.remove("no-bg");
    titulo.textContent = "PROJETO DE VÍDEO!!"
  }
});

// preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});

btnPular.addEventListener("click", () => {
  // mostra e toca o vídeo de transição
  transicaoVideo.style.display = "block";
  transicaoVideo.play();

  transicaoVideo.onended = () => {
    transicaoVideo.style.display = "none"; // esconde a transição

    // troca para o próximo vídeo
    index = (index + 1) % videos.length;
    source.src = videos[index];
    btn.classList.remove("slide");
    video.load();
    video.play();
  };
});