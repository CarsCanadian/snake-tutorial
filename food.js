let food = { x: 10, y: 1 }

export function update() {
    
}

export function draw(gameboard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameboard.appendChild(foodElement)
    
}