var Leo = document.getElementById('leo');
var Bru = document.getElementById('bru');
var Sam = document.getElementById('sam');
var ArrowLeft = document.getElementById('arrow-left');
var ArrowRight = document.getElementById('arrow-right');

function RolarDireita () {
    Leo.style = "display: none";
    Bru.style = "display: flex";
    ArrowRight.style = "display: none";
    ArrowLeft.style = "display: flex; margin-top: 55px"; 
}

function RolarEsquerda () {
    Leo.style = "display: flex";
    Bru.style = "display: none";
    ArrowRight.style = "display: flex margin-top: 55px";
    ArrowLeft.style = "display: none";
}
e.preventDefault();