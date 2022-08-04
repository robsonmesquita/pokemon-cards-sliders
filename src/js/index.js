const btnAvancar = document.getElementById("btn-avancar");
const cartoes = document.querySelectorAll(".cartao");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;

const manipulateSliderClasses = (correctSliderIndex) => {
  cartoes.forEach((cartoes) => {
    cartoes.classList.remove("selecionado");
  });

  cartoes[correctSliderIndex].classList.add("selecionado");
};

btnAvancar.addEventListener("click", function () {
  const correctSliderIndex =
    cartaoAtual === cartoes.length - 1 ? (cartaoAtual = 0) : ++cartaoAtual;

  manipulateSliderClasses(correctSliderIndex);
});

btnVoltar.addEventListener("click", function () {
  const correctSliderIndex =
    cartaoAtual === 0 ? (cartaoAtual = cartoes.length - 1) : --cartaoAtual;

  manipulateSliderClasses(correctSliderIndex);
});
