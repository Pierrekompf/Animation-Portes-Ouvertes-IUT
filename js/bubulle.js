var w = window.innerWidth;
var h = window.innerHeight;
console.log(w);
console.log(h);

var c = document.getElementById("monCanevas");
c.width = w - 60;
c.height = h - 60;


var monCanevas = document.getElementById("monCanevas");
monCanevas.style.position = "absolute";
monCanevas.style.top = "0";
monCanevas.style.left = "0";
var ctx = monCanevas.getContext('2d');

var listeEtoiles = {};

function alea(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function creerEtoile(id, posX, posY, rayon, couleur, vitesse) {
    var monEtoile = {x: posX, y: posY, r: rayon, c: couleur, v: vitesse};
    listeEtoiles[id] = monEtoile;
}

for (var i = 0; i < 500; i++) {
    creerEtoile(i.toString(), alea(0, w), alea(h - 20, h + 500), alea(18, 22), 'rgba(' + alea(131, 194) + ',' + alea(208, 232) + ',' + alea(254, 255) + ', ' + Math.random() * 0.7 + ')', alea(1, 5));
}

console.log(listeEtoiles[3]);

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

dessine();

function bouge() {
    for (cle in listeEtoiles) {
        listeEtoiles[cle].y -= listeEtoiles[cle].v;
        listeEtoiles[cle].x += alea(-3, 3);
        listeEtoiles[cle].v += 0.3;
        listeEtoiles[cle].r += 0.2;
        if (listeEtoiles[cle].y < -10) {
            listeEtoiles[cle].y = h - 100;
            listeEtoiles[cle].r = alea(1, 4);
            listeEtoiles[cle].v = alea(1, 5);
        }
    }
    dessine();
}

var timer;

function start() {
    console.log("start bouge");
    timer = setInterval("bouge()", 33);
}
