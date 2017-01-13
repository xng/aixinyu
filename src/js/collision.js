function momFruitsCollision() {
    for (let i in fruit.alive) {
        fruit.alive[i] && calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y) < 900 && fruit.dead(i);
    }
}
