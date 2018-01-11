// var animationToCheck = document.getElementById("animate");
// var animationToCheck2 = document.getElementById("animate2");
// var animationToCheck3 = document.getElementById("animate3");
var sand = document.getElementById('sand');
var fonds = document.getElementById('fonds');
var button = document.getElementById('begin');
var requin = document.getElementById('requin');
var rocher1 = document.getElementById('rocher1');
var rocher2 = document.getElementById('rocher2');
sand.classList.add('pos1');
// requin.classList.remove('display_in');
// rocher1.classList.remove('display_in_rocks');

document.addEventListener('click', function(){
  if (fonds.classList.contains('display')){
    fonds.classList.remove('display');
  }
  if (sand.classList.contains('pos1')) {
    requin.classList.add('display_out');
    rocher1.classList.add('display_in_rocks');
    rocher2.classList.remove('display_in_rocks');
    sand.classList = '';
    sand.classList.add('pos2');
    setTimeout(function(){
      requin.classList.add('display_in');
      requin.classList.remove('display_out');
    }, 1000)
  }
  button.classList.add('display');
  start();
});