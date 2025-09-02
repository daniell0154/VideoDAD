const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const btnPular = document.querySelector(".pular-btn")
const videos = ["/media/video.mp4", "/media/video2.mp4", "/media/video3.mp4"]
const source = document.querySelector("#src")
const header = document.querySelector("header")
const titulo = document.querySelector("h1")
const transicaoVideo = document.querySelector(".videoTransicao");
const avancar = document.querySelector(".avancar");
const voltar = document.querySelector(".voltar");

let index = 0

// Alterna vídeo, estilo do header e texto do título ao clicar no botão
btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
    header.classList.add("no-bg")
    titulo.textContent = ""

  } else {
    btn.classList.remove("slide");
    video.play();
    header.classList.remove("no-bg");
    titulo.textContent = "Os melhores trailers da humanidade!"
  }
});

// preloader
// const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});

window.addEventListener("load", () => {
  const video = document.querySelector(".video-container");
  video.play();
});

// Botão pular (executa transição e troca vídeo)
btnPular.addEventListener("click", trocarVideo)

// Voltar 10 segundos (ou início se < 10s)
voltar.addEventListener("click", function() {
  if (video.currentTime < 10){
    video.currentTime = 0
  }
  else {
    video.currentTime -= 10
  }
})

// Avançar 10 segundos
avancar.addEventListener("click", function() {
  video.currentTime += 10
})

// Atalhos de teclado (espaço, setas)
document.addEventListener("keydown", (event) => {
  const tecla = event.key.toLowerCase();

  if (tecla === " ") {
    event.preventDefault();
    btn.click()
  } else if (tecla === "arrowright") {
    avancar.click()

  } else if (tecla === "arrowleft") { 
    voltar.click()

  }
});

// Função para trocar de vídeo
function trocarVideo() {
  voltar.style.display = "none"
  avancar.style.display = "none"
  btn.style.display = "none"
  btnPular.style.display = "none"

  transicaoVideo.style.display = "block";
  transicaoVideo.play();
  transicaoVideo.style.zIndex = "0"

  transicaoVideo.onended = () => {
    transicaoVideo.style.display = "none";

    voltar.style.display = "flex"
    avancar.style.display = "flex"
    btn.style.display = "flex"
    btnPular.style.display = "flex"

    index = (index + 1) % videos.length;
    video.src = videos[index];
    btn.classList.remove("slide");
    video.load();
    video.play();
  };
}