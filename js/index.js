// var animationToCheck = document.getElementById("animate");
// var animationToCheck2 = document.getElementById("animate2");
// var animationToCheck3 = document.getElementById("animate3");
var sand = document.getElementById('sand');
var button = document.getElementById('begin');
var requin = document.getElementById('requin');
var rocher1 = document.getElementById('rocher1');
var rocher2 = document.getElementById('rocher2');
var hyppo = document.getElementById('hyppo');
var tortue = document.getElementById('tortue');
var text = document.getElementById('text');

document.addEventListener('click', function(){
  if (sand.classList.contains('display_in_rocks')){
      start2();
    sand.classList.remove('display_in_rocks');
    sand.classList.add('pos0');
    setTimeout(function(){
      requin.classList.remove('display_out');
      rocher1.classList.remove('display_in_rocks');

      hyppo.classList.remove('display_out');
    }, 1000);
  }
  else if (sand.classList.contains('pos0')){
    sand.classList = '';
    sand.classList.add('pos0.5');
    text.innerHTML='Bravo tu as trouvé Lenny le requin derrière le rocher ! Touche l\'écran pour continuer';
    requin.style.left = '30%';
    requin.style.top = '10%';
    requin.style.animation = 'rotating 2s linear infinite';
  }
  else if (sand.classList.contains('pos0.5')) {
        tortue.classList.remove('display_in_rocks');
  }
  else if (sand.classList.contains('pos1')){
      sand.classList = '';
      sand.classList.add('pos1_5');
      text.innerHTML='Bravo tu as trouvé Franklin la tortue ! Touche l\'écran pour continuer';
      tortue.style.top = '20%';
      requin.style.animation = 'swing 2s linear infinite';
  }
  button.classList.add('display');
});