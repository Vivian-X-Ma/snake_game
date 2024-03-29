let snake;
let rez = 20;
let food;
let w;
let h;

function setup() {
  createCanvas(600, 600);
  w = floor(width/rez);
  h = floor(height/rez);
  frameRate(10);
  snake = new Snake();
  foodLocation();
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (keyCode == 32) {
    for (let i = 0; i < 50; i++) {
    snake.grow();
  }
  }
}

function draw() {
  scale(rez);
  background(220);
  if (snake.eat(food)) {
    foodLocation();
}
  snake.update();
  snake.show();
  if (snake.endGame()) {
    background(255, 0, 0);
    textSize(2);
    text('GAME OVER', floor(w/3), floor(h/2));
    noLoop();
  }
  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}