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
    dragao.classList.remove('acende'); // Remove a classe acende
    dragaoOn = false;
  } else {
    dragao.src = 'img/dragao-acende.gif';
    dragao.classList.add('acende'); // Adiciona a classe acende
    dragaoOn = true;
  }
}
