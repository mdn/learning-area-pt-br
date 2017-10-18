function criarParagrafo() {
  var para = document.createElement('p');
  para.textContent = 'Você clicou no botão!';
  document.body.appendChild(para);
}

var botoes = document.querySelectorAll('button');

for(var i = 0; i < botoes.length ; i++) {
  botoes[i].addEventListener('click', criarParagrafo);
}