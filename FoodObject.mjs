import GameObject from "./SnakeObject.mjs";

// Begin FOOD_OBJECT

export default class FoodObject extends GameObject {

  setX(xPos) { this.x = xPos; }
  setY(yPos) { this.y = yPos; }

} // End FOOD_OBJECT
