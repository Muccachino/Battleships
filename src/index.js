import "./styles.scss";
import { createTag, createMultiTags } from "./modules/functions";

class Board {
  constructor(name, shipNum) {
    this.name = name;
    this.shipAmount = shipNum;
    this.allShipsLength = [2, 3, 3, 4];
    this.allShips = this.createShips(4, this.allShipsLength);
    this.field = this.createFields();
    this.shipsPlaced = 0;
    this.allShipsPlaced = false;
    this.allHits = 0;
    this.usedChoices = [];
  }
  placeShip(position) {
    for (let i = 0; i < position.length; i++) {
      this.field[position[i]] = 1;
    }
    this.shipsPlaced += 1;
    if (this.shipsPlaced === this.shipAmount) {
      this.allShipsPlaced = true;
      console.log("All Ships placed");
    }
  }
  markSquare(position) {
    for (let i = 0; i < position.length; i++) {
      const square = document.querySelector(
        `[data-square='${String(position[i])}']`
      );
      if (this.name === "Computer") {
        square.classList.add("placedShipCom");
      } else {
        square.classList.add("placedShip");
      }
    }
  }
  receiveAttack(square) {
    if (this.field[square] === 0) {
      this.field[square] = 2;
    } else if (this.field[square] === 1) {
      this.field[square] = 3;
      this.allHits += 1;
      this.registerHitShip(square);
    }
    this.markAttackSquare(square, this.field[square]);
  }

  markAttackSquare(shot, box) {
    const square = document.querySelector(`[data-square='${String(shot)}']`);
    if (box === 2) {
      square.classList.add("water");
    } else if (box === 3) {
      square.classList.add("shipHit");
    }
  }

  markSunkenShip(position) {
    for (let i = 0; i < position.length; i++) {
      const square = document.querySelector(
        `[data-square='${String(position[i])}']`
      );
      square.classList.add("sunk");
      this.field[position[i]] = 4;
    }
  }

  registerHitShip(square) {
    this.allShips.forEach((ship) => {
      for (let i = 0; i < ship.position.length; i++) {
        if (ship.position[i] === square) {
          ship.hits += 1;
          if (ship.hits === ship.length) {
            ship.sunk = true;
            this.markSunkenShip(ship.position);
            this.allShipsSunk();
          }
        }
      }
    });
  }

  allShipsSunk() {
    if (this.allHits === 12) {
      if (this.name === "Computer") {
        console.log("Gewonnen");
      } else {
        console.log("Verloren");
      }
    }
  }

  createBoard(num) {
    const content = document.querySelector("#content");
    const board = createTag(content, "div", this.name, "board");
    for (let i = 1; i <= 100; i++) {
      let field = createTag(board, "div", null, "field");
      field.setAttribute("data-square", i + num);
    }
  }
  createFields() {
    let fields = [];
    for (let i = 0; i <= 301; i++) {
      fields.push(0);
    }
    return fields;
  }
  createShips(num, list) {
    const allShips = [];
    for (let i = 0; i < num; i++) {
      const ship = new Ship(list[i]);
      allShips.push(ship);
    }
    return allShips;
  }

  comShips() {
    while (this.allShipsPlaced === false) {
      let shipStart = Math.floor(Math.random() * (300 - 201)) + 201;
      checkIfPlaced(this, shipStart);
    }
  }

  comAttack() {
    let lastShot = comBoard.usedChoices.slice(-1);
    lastShot = lastShot[0];
    console.log(lastShot);
    let comChoice = Math.floor(Math.random() * (100 - 1)) + 1;
    if (
      playerBoard.field[lastShot] === 3 &&
      playerBoard.field[lastShot + 1] === 1
    ) {
      comChoice = lastShot + 1;
    } else if (
      playerBoard.field[lastShot] === 3 &&
      playerBoard.field[lastShot - 1] === 1
    ) {
      comChoice = lastShot - 1;
    } else if (
      playerBoard.field[lastShot] === 3 &&
      playerBoard.field[lastShot - 2] === 1
    ) {
      comChoice = lastShot - 2;
    } else if (
      playerBoard.field[lastShot] === 3 &&
      playerBoard.field[lastShot - 3] === 1
    ) {
      comChoice = lastShot - 3;
    } else {
      while (comBoard.usedChoices.includes(comChoice)) {
        comChoice = Math.floor(Math.random() * (100 - 1)) + 1;
      }
    }
    comBoard.usedChoices.push(comChoice);
    playerBoard.receiveAttack(comChoice);
  }
}

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

const checkIfPlaced = (board, shipStart) => {
  board.allShips.every((ship) => {
    if (ship.placed === false) {
      let uncheckedPosition = "";
      let beforeBorderCheck_right = [];
      let beforeBorderCheck_left = [];
      for (let i = 0; i < ship.length; i++) {
        beforeBorderCheck_right[i] = shipStart + i;
        beforeBorderCheck_left[i] = shipStart - i;
      }
      if (checkBorder(beforeBorderCheck_right)) {
        uncheckedPosition = beforeBorderCheck_left;
      } else {
        uncheckedPosition = beforeBorderCheck_right;
      }
      if (
        checkDoublePlacement(board.allShips, uncheckedPosition) === false &&
        board.shipsPlaced > 0
      ) {
        setShipPosition(ship.position, uncheckedPosition);
        board.placeShip(ship.position);
        board.markSquare(ship.position);
        ship.placed = true;
      } else if (board.shipsPlaced === 0) {
        setShipPosition(ship.position, uncheckedPosition);
        board.placeShip(ship.position);
        board.markSquare(ship.position);
        ship.placed = true;
      }

      return false;
    }
    return true;
  });
};

const checkDoublePlacement = (placedShips, position) => {
  let check = false;
  placedShips.forEach((ship) => {
    for (let i = 0; i < ship.position.length; i++) {
      for (let j = 0; j < position.length; j++) {
        if (ship.position[i] === position[j]) {
          check = true;
        }
      }
    }
  });
  return check;
};

const setShipPosition = (shipPos, newPos) => {
  for (let i = 0; i < newPos.length; i++) {
    shipPos[i] = newPos[i];
  }
};

const checkBorder = (pos) => {
  if (pos.at(-2) % 10 === 0 || pos.at(-3) % 10 === 0 || pos.at(-4) % 10 === 0) {
    return true;
  } else {
    return false;
  }
};

const playerBoard = new Board("Player", 4);
const comBoard = new Board("Computer", 4);
playerBoard.createBoard(0);
comBoard.createBoard(200);
comBoard.comShips();

const board = document.querySelectorAll(".board");
board[0].addEventListener("click", (e) => {
  let targetElement = e.target;
  if (targetElement.matches(".field")) {
    let shipStart = parseInt(targetElement.getAttribute("data-square"));
    if (playerBoard.allShipsPlaced === false) {
      checkIfPlaced(playerBoard, shipStart);
    }
  }
});

board[1].addEventListener("click", (e) => {
  let targetElement = e.target;
  if (targetElement.matches(".field")) {
    let shot = parseInt(targetElement.getAttribute("data-square"));
    if (
      playerBoard.allShipsPlaced === true &&
      !playerBoard.usedChoices.includes(shot)
    ) {
      playerBoard.usedChoices.push(shot);
      comBoard.receiveAttack(shot);
      comBoard.comAttack();
    }
  }
});
