'use strict'
let can1, can2, ctx1, ctx2;
let lastTime, deltaTime;
let bgPic = new Image();
let ane, fruit;
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
    bgPic.src = `./img/background.jpg`;
    ane = new aneObj();
    ane.init();
    fruit = new fruitObj();
    fruit.init();
}

function gameloop() {
    window.requestAnimFrame(gameloop);

    let now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;

    drawBackground();
    ane.draw();
    fruit.draw();
}
