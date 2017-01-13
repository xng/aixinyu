function momFruitsCollision() {
    if (data.gameOver) {
        return;
    }
    for (let i in fruit.alive) {
        if (fruit.alive[i] && calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y) < 900) {
            fruit.dead(i);
            data.fruitNum++;
            mom.momBodyCount++;
            if (mom.momBodyCount > 7) {
                mom.momBodyCount = 7;
            }
            if (fruit.fruitType[i] === 'blue') {
                data.double = 2;
            }
            wave.born(fruit.x[i], fruit.y[i]);
        }
    }
}

function momBabyCollision() {
    if (!data.gameOver && data.fruitNum > 0 && calLength2(mom.x, mom.y, baby.x, baby.y) < 900) {
        baby.babyBodyCount = 0;
        mom.momBodyCount = 0;
        data.addScore();
        halo.born(baby.x, baby.y);
    }

}
