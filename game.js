import { update as updateSnake, draw as drawSneak, SNAKE_SPEED } from './snake.js'
import { update as updatefood, draw as drawFood } from './food.js'

let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    window.requestAnimationFrame(main)
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
    

    console.log('Render')
    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    drawFood()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSneak(gameBoard)
    drawFood(gameBoard)
}