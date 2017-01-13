let babyObj = function() {
    this.x;
    this.y;
    this.angle;
    this.babyTailTimer = 0;
    this.babyTailCount = 0;
    this.babyEyeTimer = 0;
    this.babyEyeCount = 0;
    this.babyEyeInterval = 1000;
    this.babyBodyTimer = 0;
    this.babyBodyCount = 0;
}
babyObj.prototype.init = function() {
    this.x = canWidth * 0.5 - 50;
    this.y = canHeight * 0.5 + 50;
    this.angle = 0;
}
babyObj.prototype.draw = function() {
    this.x = lerpDistance(mom.x, this.x, 0.98)
    this.y = lerpDistance(mom.y, this.y, 0.98)
    let deltaY = mom.y - this.y;
    let deltaX = mom.x - this.x;
    let beta = Math.atan2(deltaY, deltaX) + Math.PI;
    this.angle = lerpAngle(beta, this.angle, 0.6);
    this.babyTailTimer += deltaTime;
    if (this.babyTailTimer > 50) {
        this.babyTailCount = (this.babyTailCount + 1) % 8;
        this.babyTailTimer %= 50;
    }
    this.babyEyeTimer += deltaTime;
    if (this.babyEyeTimer > this.babyEyeInterval) {
        this.babyEyeCount = (this.babyEyeCount + 1) % 2;
        this.babyEyeTimer %= this.babyEyeInterval;
        if (this.babyEyeCount === 0) {
            this.babyEyeInterval = Math.random() * 1500 + 2000;
        } else {
            this.babyEyeInterval = 200;
        }
    }
    this.babyBodyTimer += deltaTime;
    if (this.babyBodyTimer > 300) {
        this.babyBodyCount = (this.babyBodyCount + 1);
        this.babyBodyTimer %= 300;
        if (this.babyBodyCount > 19) {
            this.babyBodyCount = 19;
            data.gameOver = true;
        }
    }
    ctx1.save();
    ctx1.translate(this.x, this.y);
    ctx1.rotate(this.angle);
    ctx1.drawImage(babyTail[this.babyTailCount], -babyTail[this.babyTailCount].width * 0.5 + 23, -babyTail[this.babyTailCount].height * 0.5);
    ctx1.drawImage(babyBody[this.babyBodyCount], -babyBody[this.babyBodyCount].width * 0.5, -babyBody[this.babyBodyCount].height * 0.5);
    ctx1.drawImage(babyEye[this.babyEyeCount], -babyEye[this.babyEyeCount].width * 0.5, -babyEye[this.babyEyeCount].height * 0.5);
    ctx1.restore();
}
