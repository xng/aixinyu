'use strict'
let can1, can2, ctx1, ctx2;
let lastTime, deltaTime;
let bgPic = new Image();
let ane, fruit, mom, baby, data, wave, halo,dust;
let mx, my;
let babyTail = [],
    babyEye = [],
    babyBody = [];
let momTail = [],
    momEye = [],
    momBodyOra = [],
    momBodyBlue = [];
let dustPic = [];
const canWidth = 800,
    canHeight = 600;
document.body.onload = game;

function game() {
    console.log(`game start`);
    init();
    lastTime = Date.now();
    deltaTime = 0;
    gameloop();
}

function init() {
    can1 = document.getElementById('canvas1');
    can2 = document.getElementById('canvas2');
    ctx1 = can1.getContext('2d');
    ctx2 = can2.getContext('2d');
    can1.addEventListener('mousemove', onMouseMove, false)
    bgPic.src = `./img/background.jpg`;
    ane = new aneObj();
    ane.init();
    fruit = new fruitObj();
    mom = new momObj();
    baby = new babyObj();
    fruit.init();
    mom.init();
    baby.init();
    mx = canWidth * 0.5;
    my = canHeight * 0.5;
    for (let i = 0; i < 8; i++) {
        babyTail[i] = new Image();
        babyTail[i].src = `./img/babyTail${i}.png`
    }
    for (let i = 0; i < 2; i++) {
        babyEye[i] = new Image();
        babyEye[i].src = `./img/babyEye${i}.png`
    }
    for (let i = 0; i < 20; i++) {
        babyBody[i] = new Image();
        babyBody[i].src = `./img/babyFade${i}.png`
    }
    for (let i = 0; i < 8; i++) {
        momTail[i] = new Image();
        momTail[i].src = `./img/bigTail${i}.png`
    }
    for (let i = 0; i < 2; i++) {
        momEye[i] = new Image();
        momEye[i].src = `./img/bigEye${i}.png`
    }
    for (let i = 0; i < 8; i++) {
        momBodyBlue[i] = new Image();
        momBodyBlue[i].src = `./img/bigSwimBlue${i}.png`;
        momBodyOra[i] = new Image();
        momBodyOra[i].src = `./img/bigSwim${i}.png`;
    }
    data = new dataObj();
    ctx1.fillStyle = '#fff';
    ctx1.font = '30px Verdana';
    ctx1.textAlign = 'center';
    wave = new waveObj();
    halo = new haloObj();
    wave.init();
    halo.init();
    for (let i = 0; i < 7; i++) {
        dustPic[i] = new Image();
        dustPic[i].src = `./img/dust${i}.png`;
    }
    dust = new dustObj();
    dust.init();
}

function onMouseMove(e) {
    if (data.gameOver) {
        return false;
    }
    if (e.offSetX || e.layerX) {
        mx = e.offSetX == undefined ? e.layerX : e.offSetX;
        my = e.offSetY == undefined ? e.layerY : e.offSetY;
    }
}

function gameloop() {
    window.requestAnimFrame(gameloop);
    let now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    if (deltaTime > 40) {
        deltaTime = 40;
    }
    drawBackground();
    ane.draw();
    fruitMonitor();
    fruit.draw();
    ctx1.clearRect(0, 0, canWidth, canHeight)
    mom.draw();
    momFruitsCollision();
    momBabyCollision();
    baby.draw();
    data.draw();
    wave.draw();
    halo.draw();
    dust.draw();
}
