import { Board } from "./board_class";
class Ship {
  constructor(length) {
    this.length = length;
    this.position = this.startPosition(length);
    this.hits = 0;
    this.sunk = false;
    this.horizontal = true;
    this.placed = false;
  }
  startPosition(length) {
    let position = [];
    for (let i = 0; i < length; i++) {
      position.push(0);
    }
    return position;
  }
}

export { Ship };
