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
var seal = document.getElementById('seal');
var text = document.getElementById('text');
var bas_aqua = document.getElementById('bas_aqua');
var haut_aqua = document.getElementById('haut_aqua');
var vitre = document.getElementById('vitre');
var reflet = document.getElementById('reflet');

document.addEventListener('click', function(){
  if (sand.classList.contains('display_in_rocks')){
      button.classList.add('display');
    bas_aqua.classList.remove('display_in_rocks');
    haut_aqua.classList.remove('display_in_vitre');
    vitre.classList.remove('display_in_vitre');
    reflet.classList.remove('display_in_vitre');
    setTimeout(function () {
      start2();
      sand.classList.remove('display_in_rocks');
      sand.classList.add('pos0');
      setTimeout(function(){
        requin.classList.remove('display_out');
        rocher1.classList.remove('display_in_rocks');
        hyppo.classList.remove('display_out');
      }, 1000);
      setTimeout(function(){
          text.style.opacity = '1';
      },2000)
    }, 1000)
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
    requin.classList.add('display_out');
    text.innerHTML='Maintenant essaye de trouver où se cache la tortue !';
    rocher1.classList.add('display_in_rocks');
    rocher2.classList.remove('display_in_rocks');
    sand.classList = '';
    sand.classList.add('pos1');
    setTimeout(function(){
        requin.classList.add('display_in');
        requin.classList.remove('display_out');
        tortue.classList.remove('display_in_rocks');
      }, 1000)
  }
  else if (sand.classList.contains('pos1')){
      sand.classList = '';
      sand.classList.add('pos1_5');
      text.innerHTML='Bravo tu as trouvé Franklin la tortue ! Touche l\'écran pour continuer';
      tortue.style.top = '20%';
      tortue.style.animation = 'swing 2s linear';
  } else if (sand.classList.contains('pos1_5')){
      sand.classList='';
      sand.classList.add('pos2');
      rocher2.classList.add('display_in_rocks');
      // text.innerHTML='Je crois avoir aperçu quelque chose dans les buissons vite clique !';
      tortue.style.top = '-500px';
      tortue.style.animation = 'swing 2s linear';
      text.innerHTML='Bravo ! Tu as trouvé tous mes amis ! Tu as suffisamment de talent pour les TP de réseau !';
      seal.classList.remove('display_in_rocks');
  }
  else if (sand.classList.contains('pos2')){
      sand.classList='';
      sand.classList.add('display_in_rocks');
      haut_aqua.classList.add('display_in_vitre');
      vitre.classList.add('display_in_vitre');
      bas_aqua.classList.add('display_in_rocks');
      reflet.classList.add('display_in_vitre');
      text.style.opacity= '0';
      rocher1.classList.add('display_in_rocks');
      rocher2.classList.add('display_in_rocks');
      hyppo.classList.add('display_out');
      seal.classList.add('display_in_rocks');
      requin.classList='';
      requin.classList.add('display_out');
      requin.style.top= '40%';
      requin.style.left='0';
      tortue.classList='';
      tortue.classList.add('display_in_rocks');
      tortue.style.top = '65%';
      tortue.style.left='58%';
      button.classList.remove('display');
      text.innerHTML='Bonjour, je suis Dora. Aide moi à retrouver les animaux. Touche l\'écran pour trouver le requin';
      stop();
  }

});