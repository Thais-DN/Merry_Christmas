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
  console.log('fui chamado')
}
