'use strict'
let can1, can2, ctx1, ctx2;
let lastTime, deltaTime;
let bgPic = new Image();
let ane, fruit, mom, baby;
let mx, my;
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
}

function onMouseMove(e) {
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
    baby.draw();
}
