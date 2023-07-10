import "./styles.scss";
import { createTag, createMultiTags } from "./modules/functions";

class Board {
  constructor(name, shipNum) {
    this.name = name;
    this.shipAmount = shipNum;
    this.allShipsLength = [2, 3, 3, 4];
    this.allShips = this.createShips(4, this.allShipsLength);
    this.field = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0,
    ];
    this.shipsPlaced = 0;
    this.allShipsPlaced = false;
  }
  placeShip(position) {
    for (let i = 0; i < position.length; i++) {
      this.field[position[i]] = 1;
    }
    console.log(this.field);
    this.shipsPlaced += 1;
    if (this.shipsPlaced === this.shipAmount) {
      this.allShipsPlaced = true;
    }
  }
  markSquare(position) {
    for (let i = 0; i < position.length; i++) {
      const square = document.querySelector(
        `[data-square='${String(position[i])}']`
      );
      square.classList.add("placedShip");
    }
  }
  receiveAttack(square) {
    if (this.field[square] === 0) {
      console.log("Miss");
      this.field[square] = 2;
    } else if (this.field[square] === 1) {
      console.log("Hit");
      while (targetElement != null) this.field[square] = 3;
    }
  }
  createBoard() {
    const content = document.querySelector("#content");
    const board = createTag(content, "div", "board");
    for (let i = 1; i <= 100; i++) {
      let field = createTag(board, "div", null, "field");
      field.setAttribute("data-square", i);
    }
  }
  createShips(num, list) {
    const allShips = [];
    for (let i = 0; i < num; i++) {
      const ship = new Ship(list[i]);
      allShips.push(ship);
    }
    return allShips;
  }

  comShips() {}
}

class Ship {
  constructor(length) {
    this.length = length;
    this.position = this.startPosition(length);
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

const checkIfPlaced = (shipStart) => {
  playerBoard.allShips.every((ship) => {
    if (ship.placed === false) {
      for (let i = 0; i < ship.length; i++) {
        ship.position[i] = shipStart + i;
        console.log(ship.position);
      }
      ship.placed = true;
      playerBoard.placeShip(ship.position);
      playerBoard.markSquare(ship.position);
      return false;
    }
    return true;
  });
};

const playerBoard = new Board("Player", 4);
const comBoard = new Board("Computer", 4);
playerBoard.createBoard();
comBoard.createBoard();

const board = document.querySelector("#board");
board.addEventListener("click", (e) => {
  let targetElement = e.target;
  if (targetElement.matches(".field")) {
    let shipStart = parseInt(targetElement.getAttribute("data-square"));
    if (playerBoard.allShipsPlaced === false) {
      checkIfPlaced(shipStart);
    }
  }
});
