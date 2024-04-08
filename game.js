/*****************************
 * Init imports
 ****************************/
import SnakeObject from "./SnakeObject.mjs"; // GameObject class
import FoodObject from "./FoodObject.mjs"
import { canvas, ctx, colors } from "./InitGameVariables.mjs"; // Init variables

// Begin GAME_ENGINE
document.addEventListener('DOMContentLoaded', () => {

// Snake objects
const snakeObjects = [];

// Create snake objects as instance of a snakeObject
const square = new SnakeObject(0, 0, 6, 6, colors.BLUE_ACCENT1);
// Add game objects to gameObjects array
snakeObjects.push(square);

// Food objects
let xPos = Math.floor(Math.random() * canvas.width);
let yPos = Math.floor(Math.random() * canvas.height);
let food = new FoodObject(xPos, yPos, 6, 6, colors.ORANGE);



/*****************************
 * Game loop function
 ****************************/
 let testVar = 0;
function gameLoop() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
  //update and draw each game object
  snakeObjects.forEach(object => {    
    object.draw();
    object.controls();
    object.update();    
  });  

  if (testVar % 100 == 0) {
    xPos = Math.floor(Math.random() * canvas.width);
    yPos = Math.floor(Math.random() * canvas.height);    
    food.setX(xPos);
    food.setY(yPos);
  }
  food.draw();

  testVar++;

  // Call the game loop recursively
  requestAnimationFrame(gameLoop);
}
//Start game loop
gameLoop();


/*****************************
 * Generate food
 ****************************/

 






}) // End GAME_ENGINE
