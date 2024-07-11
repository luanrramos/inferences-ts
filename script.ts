const input = document.querySelector("input");
const paragraph = document.querySelector("p");

const total = localStorage.getItem("total");
if (input && total) {
  input.value = total;
  calcularGanho(Number(input.value));
}

function calcularGanho(valorDigitado: number) {
  if (paragraph) {
    paragraph.innerText = `Ganho Total: ${Number(valorDigitado * 1.2)}`;
  }
}

function totalMudou() {
  if (input) {
    localStorage.setItem("total", input.value);
    calcularGanho(Number(input.value));
  }
}

if (input) {
  input.addEventListener("keyup", totalMudou);
}
