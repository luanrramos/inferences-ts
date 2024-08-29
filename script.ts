const input = document.querySelector<HTMLInputElement>("input");
const paragraph = document.querySelector("p");

const total = localStorage.getItem("total");


if (input && total !== null) {
  input.value = total;
  calcularGanho(Number(total));
}

function calcularGanho(valor: number) {

  
  if (paragraph) {
    paragraph.innerText = `Ganho Total: ${valor * 1.2}`;
  }
}

function totalMudou() {
  if (input) {
    const valor = Number(input.value);
    localStorage.setItem("total", valor.toString());
    calcularGanho(valor);
  }
}

input?.addEventListener("keyup", totalMudou);
