
var logo = document.getElementById("logo");
var opcoes = document.getElementsByClassName("opcao");
var cabecalho = document.getElementById("cabecalho");
var infoProdutos = document.getElementById("infoProdutos");
var corpo = document.getElementById("corpo");
var containerProdutos = document.getElementById("containerProdutos");

function aoScrollar() {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop >= 15 && scrollTop < 850) {
    logo.src = "./imagens/logo-marrom.png";
    for (let opcao of opcoes) {
      opcao.classList.add("cor_texto_depois");
    }
    cabecalho.classList.add("cor_cabecalho_depois");
    cabecalho.classList.add("sticky");
    corpo.classList.add("conteudo");

  } else {
    logo.src = "./imagens/logo-bege.png";
    for (let opcao of opcoes) {
      opcao.classList.remove("cor_texto_depois");
    }
    cabecalho.classList.remove("cor_cabecalho_depois");
    cabecalho.classList.remove("sticky");
    cabecalho.classList.remove("sticky_remove");
    corpo.classList.remove("conteudo");
  }

  if(scrollTop >= 860){
    infoProdutos.classList.add("sticky_infoProdutos");
    cabecalho.classList.remove("sticky");
    cabecalho.classList.remove("cor_cabecalho_depois");
    cabecalho.classList.add("sticky_remove");
    containerProdutos.classList.add("conteudo");
  }
  else if(scrollTop > 15){
    cabecalho.classList.add("sticky");
    cabecalho.classList.remove("sticky_remove");
    cabecalho.classList.add("cor_cabecalho_depois");
    infoProdutos.classList.remove("sticky_infoProdutos");
    containerProdutos.classList.remove("conteudo");
  }
};
window.onscroll = function () {
  aoScrollar();
};