'use strict';

function celsiusParaFahrenheit(valor) {
  return valor * 9 / 5 + 32;
}
function celsiusParaKelvin(valor) {
  return valor + 273.15;
}


function TxtResposta(valor) {
  return `Você digitou: ${valor}teste`; //valor de resposta
}
document.querySelector('#formulario').addEventListener('submit', (evento) => {
  evento.preventDefault();


  const valor = document.querySelector('#entrada').value.trim();
  const saida = document.querySelector('#saida');
  const celsius = Number(valor.replace(',', '.')); // Converte a entrada para número, substituindo vírgula por ponto

  if (valor === '') {
    saida.textContent = 'Preencha o campo de entrada.'; //condição de validação para campo vazio
    return;  
  }
  if (!Number.isFinite(celsius)) {
    saida.textContent = "Valor não numérico. Digite um número, por exemplo 36,5.";
    return;
  }
  if (valor < -273.15) {
    saida.textContent = "Temperatura abaixo do zero absoluto (-273,15 °C).";
    return;
  }
  saida.textContent = TxtResposta(valor);//constante/variável saida é chamada para a função TxtResposta, que retorna a resposta formatada com o valor digitado pelo usuário.
});

//1. Ler uma temperatura em °C (aceitando vírgula ou ponto decimal). V
//2. Exibir os valores equivalentes em °F (F = C × 9/5 + 32) e em K (K = C + 273,15), com duas casas decimais.
//3. Rejeitar entradas vazias ou não numéricas e temperaturas abaixo do zero absoluto (−273,15 °C), com mensagens específicas. V