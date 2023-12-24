const decorations = document.querySelectorAll('.decoration');
const estrela = document.getElementById('estrela');

decorations.forEach(decoration => {
  decoration.addEventListener('mouseenter', () => {
    decoration.classList.add('animate');
  });

  decoration.addEventListener('mouseleave', () => {
    decoration.classList.remove('animate');
  });
});

let lareiraOn = false;

function ligarLareira() {
  const lareira = document.getElementById('lareira');

  if (lareiraOn) {
    lareira.src = 'img/lareira.png';
    lareiraOn = false;
  } else {
    lareira.src = 'img/lareira-on.gif';
    lareiraOn = true;
  }
}

let dragaoOn = false;

function ativarDragao() {
  const dragao = document.getElementById('dragao');

  if (dragaoOn) {
    dragao.src = 'img/dragao.png';
    dragao.classList.remove('acende');
    dragaoOn = false;
  } else {
    dragao.src = 'img/dragao-acende.gif';
    dragao.classList.add('acende');
    dragaoOn = true;
  }
}

let paiNatalOn = false;

function ativarPaiNatal() {
  const paiNatal = document.getElementById('pai_natal');

  if (paiNatalOn) {
    paiNatal.src = 'img/pai-natal-pernas.png';
    paiNatal.classList.remove('foge');
    paiNatalOn = false;
  } else {
    paiNatal.src = 'img/pai-natal.png';
    paiNatal.classList.add('foge');
    paiNatalOn = true;
  }
}

let janelaOn = false;

function abrirJanela() {
  const janela = document.getElementById('janela');

  if (janelaOn) {
    console.log('Janela está fechada');
    janela.src = 'img/janela.png';
    janela.classList.remove('aberta');
    janelaOn = false;
  } else {
    console.log('Janela está aberta');
    janela.src = 'img/janela-aberta.png';
    janela.classList.add('aberta');
    janelaOn = true;
  }
}