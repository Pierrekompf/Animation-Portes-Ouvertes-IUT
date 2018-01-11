var timer;


var w = window.innerWidth;
var h = window.innerHeight;

var c = document.getElementById("monCanevas");
c.width = w - 60;
c.height = h - 60;


var monCanevas = document.getElementById("monCanevas");
monCanevas.style.position = "absolute";
monCanevas.style.top = "0";
monCanevas.style.left = "0";
var ctx = monCanevas.getContext('2d');

var listeEtoiles = {};
var listeBulles = {};

function alea(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function creerEtoile(id, posX, posY, rayon, couleur, vitesse) {
  var monEtoile = {x: posX, y: posY, r: rayon, c: couleur, v: vitesse};
  listeEtoiles[id] = monEtoile;
}

function creerBulles(id, posX, posY, rayon, couleur, vitesse) {
  var monEtoile = {x: posX, y: posY, r: rayon, c: couleur, v: vitesse};
  listeBulles[id] = monEtoile;
}

for (var i = 0; i < 300; i++) {
  creerEtoile(i.toString(), alea(0, w), alea(h - 20, h + 500), alea(10, 15), 'rgba(' + alea(131, 194) + ',' + alea(208, 232) + ',' + alea(254, 255) + ', ' + Math.random() * 0.7 + ')', alea(1, 5));
}

function dessine() {
  ctx.clearRect(0, 0, monCanevas.width, monCanevas.height);
  for (var cle in listeEtoiles) {
    ctx.beginPath();
    ctx.arc(listeEtoiles[cle].x, listeEtoiles[cle].y, listeEtoiles[cle].r, 0, 2 * Math.PI, false);
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillStyle = listeEtoiles[cle].c;
    ctx.fill();
    ctx.closePath();
  }
}

function dessineBulles() {
  ctx.clearRect(0, 0, monCanevas.width, monCanevas.height);
  for (var cle in listeBulles) {
    ctx.beginPath();
    ctx.arc(listeBulles[cle].x, listeBulles[cle].y, listeBulles[cle].r, 0, 2 * Math.PI, false);
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillStyle = listeBulles[cle].c;
    ctx.fill();
    ctx.closePath();
  }
}

dessine();

function bouge() {
  for (cle in listeEtoiles) {
    listeEtoiles[cle].y -= listeEtoiles[cle].v;
    listeEtoiles[cle].x += alea(-3, 3);
    listeEtoiles[cle].v += 0.3;
    listeEtoiles[cle].r += 0.2;
    if (listeEtoiles[cle].y < -10) {
      delete listeEtoiles[cle];
      // for (var i = 0; i < 3; i++){
      //     var x = alea(0, w);
      //     creerEtoile(i.toString(), x, alea(h - 20, h + 500), alea(5, 10), 'rgba(' + alea(131, 194) + ',' + alea(208, 232) + ',' + alea(254, 255) + ', ' + Math.random() * 0.7 + ')', alea(1, 5))
      // }
      // listeEtoiles[cle].y = h - 100;
      // listeEtoiles[cle].r = alea(1, 4);
      // listeEtoiles[cle].v = alea(1, 5);
    }
  }
  dessine();
}

function bougeBulles() {
  var x = alea(0, w);
  for (cle in listeBulles) {
    listeBulles[cle].y -= listeBulles[cle].v;
    listeBulles[cle].x += alea(-3, 3);
    listeBulles[cle].v += 0.3;
    listeBulles[cle].r += 0.2;
    if (listeBulles[cle].y < -10) {
      listeBulles[cle].y = h - 100;
      listeBulles[cle].x = x;
      listeBulles[cle].r = alea(1, 4);
      listeBulles[cle].v = alea(1, 5);
    }
  }
  dessineBulles();
}

function start() {
  // timer = setInterval("bouge()", 33);
}

var timer2;


function start2() {
  for (var i = 0; i < 5; i++) {
    var x = alea(0, w);
    var y = alea(h - 20, h + 500);
    creerBulles(i.toString(), x, y, alea(5, 10), 'rgba(' + alea(131, 194) + ',' + alea(208, 232) + ',' + alea(254, 255) + ', ' + Math.random() * 0.7 + ')', alea(1, 5));
  }
  timer2 = setInterval("bougeBulles()", 33);
}