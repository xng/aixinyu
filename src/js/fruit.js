'use strict'
let fruitObj = function() {
    this.alive = [];
    this.x = [];
    this.y = [];
    this.l = [];
    this.spd = [];
    this.aneNO = [];
    this.fruitType = [];
    this.orange = new Image();
    this.blue = new Image();
}
fruitObj.prototype.num = 30;
fruitObj.prototype.init = function() {
    for (let i = 0; i < this.num; i++) {
        this.alive[i] = false;
        this.x[i] = 0;
        this.y[i] = 0;
        this.l[i] = 0;
        this.fruitType[i] = '';
        this.aneNO[i] = 0;
        this.spd[i] = Math.random() * 0.017 + 0.003;
        this.born(i);
    }
    this.orange.src = './img/fruit.png'
    this.blue.src = './img/blue.png'
}
fruitObj.prototype.draw = function() {
    for (let i in fruit.alive) {
        if (this.alive[i]) {
            let pic = this.orange;
            if (this.fruitType[i] === 'blue') {
                pic = this.blue;
            }
            if (this.l[i] <= 14) {
                this.x[i] = ane.headx[this.aneNO[i]];
                this.y[i] = ane.heady[this.aneNO[i]];
                this.l[i] += this.spd[i] * deltaTime;
            } else {
                this.y[i] -= this.spd[i] * 7 * deltaTime;
            }
            ctx2.drawImage(pic, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i])

            this.y[i] < 10 && (this.alive[i] = false);
        }
    }
}
fruitObj.prototype.update = function() {
    let num = 0;
    for (let i = 0; i < this.num; i++) {

    }
}
fruitObj.prototype.born = function(i) {
    this.aneNO[i] = Math.floor(Math.random() * ane.num);
    this.l[i] = 0;
    this.alive[i] = true;
    this.fruitType[i] = Math.random() < 0.2 ? 'blue' : 'orange';
}

function fruitMonitor() {
    let num = 0;
    for (let i in fruit.alive) {
        fruit.alive[i] && num++;
    }
    if (num < 15) {
        sendFruit();
        return;
    }
}

function sendFruit() {

    for (let i in fruit.alive) {
        if (!fruit.alive[i]) {
            fruit.born(i);
            return;
        }
    }
}
fruitObj.prototype.dead = function(i) {
    this.alive[i] = false;
}
