// var animationToCheck = document.getElementById("animate");
// var animationToCheck2 = document.getElementById("animate2");
// var animationToCheck3 = document.getElementById("animate3");
var sand = document.getElementById('sand');

document.addEventListener('click', function(){
  if (sand.classList.contains('pos1')) {
    sand.classList = '';
    sand.classList.add('pos2');
  } else if (!sand.classList.contains('pos1')) {
    sand.classList = '';
    sand.classList.add('pos1');
  }
});