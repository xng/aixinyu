'use strict'
let momObj = function() {
    this.x;
    this.y;
    this.angle;
    this.momTailTimer = 0;
    this.momTailCount = 0;
    this.momEyeTimer = 0;
    this.momEyeCount = 0;
    this.momEyeInterval = 1000;
    this.momBodyCount = 0;
}
momObj.prototype.init = function() {
    this.x = canWidth * 0.5;
    this.y = canHeight * 0.5;
    this.angle = 0;
}
momObj.prototype.draw = function() {
    this.x = lerpDistance(mx, this.x, 0.99)
    this.y = lerpDistance(my, this.y, 0.99)
    let deltaY = my - this.y;
    let deltaX = mx - this.x;
    let beta = Math.atan2(deltaY, deltaX) + Math.PI;
    this.angle = lerpAngle(beta, this.angle, 0.6);
    this.momTailTimer += deltaTime;
    if (this.momTailTimer > 50) {
        this.momTailCount = (this.momTailCount + 1) % 8;
        this.momTailTimer %= 50;
    }
    this.momEyeTimer += deltaTime;
    if (this.momEyeTimer > this.momEyeInterval) {
        this.momEyeCount = (this.momEyeCount + 1) % 2;
        this.momEyeTimer %= this.momEyeInterval;
        if (this.momEyeCount === 0) {
            this.momEyeInterval = Math.random() * 1500 + 2000;
        } else {
            this.momEyeInterval = 200;
        }
    }
    ctx1.save();
    ctx1.translate(this.x, this.y)
    ctx1.rotate(this.angle);
    ctx1.drawImage(momTail[this.momTailCount], -momTail[this.momTailCount].width * 0.5 + 30, -momTail[this.momTailCount].height * 0.5);
    if (data.double == 1) {
        ctx1.drawImage(momBodyOra[this.momBodyCount], -momBodyOra[this.momBodyCount].width * 0.5, -momBodyOra[this.momBodyCount].height * 0.5);
    } else {
        ctx1.drawImage(momBodyBlue[this.momBodyCount], -momBodyBlue[this.momBodyCount].width * 0.5, -momBodyBlue[this.momBodyCount].height * 0.5);
    }
    ctx1.drawImage(momEye[this.momEyeCount], -momEye[this.momEyeCount].width * 0.5, -momEye[this.momEyeCount].height * 0.5)
    ctx1.restore();
}
