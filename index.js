
var logo = document.getElementById("logo");
var opcoes = document.getElementsByClassName("opcao");
var cabecalho = document.getElementById("cabecalho");
function aoScrollar() {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop >= 15) {
    logo.src = "./imagens/logo-marrom.png";
    console.log(opcoes);
    for (let opcao of opcoes) {
      opcao.classList.add("cor_texto_depois");
    }
    cabecalho.classList.add("cor_cabecalho_depois");
    cabecalho.classList.add("sticky");

  } else {
    logo.src = "./imagens/logo-bege.png";
    for (let opcao of opcoes) {
      opcao.classList.remove("cor_texto_depois");
    }
    cabecalho.classList.remove("cor_cabecalho_depois");
    cabecalho.classList.remove("sticky");
  }
};
window.onscroll = function () {
  aoScrollar();
};