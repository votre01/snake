import { ctx } from "./InitGameVariables.mjs";

// Begin GAME_OBJECT
export default class GameObject {
  constructor(x, y, width, height, color) {    
    this.x = x;
    this.y = y
    this.width = width;
    this.height = height;
    this.color = color;
  }

  /*****************************
   * Draw game object
   *****************************/
  draw() {
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.color;    
  }
} // End GAME_OBJECT