// var animationToCheck = document.getElementById("animate");
// var animationToCheck2 = document.getElementById("animate2");
// var animationToCheck3 = document.getElementById("animate3");
var sand = document.getElementById('sand');
var fonds = document.getElementById('fonds');
var button = document.getElementById('begin');

document.addEventListener('click', function(){
  if (fonds.classList.contains('display')){
    fonds.classList.remove('display');
  }
  if (sand.classList.contains('pos1')) {
    sand.classList = '';
    sand.classList.add('pos2');
  } else if (!sand.classList.contains('pos1')) {
    sand.classList = '';
    sand.classList.add('pos1');
  }
  button.classList.add('display');
  start();
});