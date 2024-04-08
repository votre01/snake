import { canvas } from "./InitGameVariables.mjs";
import GameObject from "./GameObject.mjs";

// Globals
let direction = 'x';

// Begin GAME_OBJECT
export default class SnakeObject extends GameObject {

  /*****************************
   * Update snake object
   *****************************/
  update() {
    if (this.x < (canvas.width - this.width) && direction === 'x') {     
      this.x += 1; // Move right
    }
    if (this.x > 0 && direction === '-x') {
      this.x -= 1; // Move left       
    }
    if (this.y > 0 && direction === '-y') {
      this.y -= 1; // Move up
    }
    if (this.y < (canvas.height - this.height) && direction === 'y') {
      this.y += 1; // Move down
    }
  }

  /*****************************
   * Direction controls
   *****************************/
  controls() {
    if (Object.keys['ArrowRight']) { direction = 'x'; }
    if (Object.keys['ArrowLeft']) { direction = '-x'; }
    if (Object.keys['ArrowUp']) { direction = '-y'; }
    if (Object.keys['ArrowDown']) { direction = 'y'; }
  }
} // End GAME_OBJECT

// Keyboard input handling  
document.addEventListener('keydown', event => { Object.keys[event.key] = true; });
document.addEventListener('keyup', event => Object.keys[event.key] = false);