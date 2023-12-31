import { Ship } from "./ship_class";
import { createTag, createMultiTags } from "./html_functions";

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
      const message = document.querySelector("#message");
      if (this.name === "Computer") {
        console.log("Gewonnen");
        message.innerHTML = "You sunk all enemy ships! <br> You Win!!!";
      } else {
        console.log("Verloren");
        message.innerHTML = "All your ships have been sunk! <br> You Lose!!!";
      }
      const newGame = document.querySelector("#newGame");
      newGame.addEventListener("click", () => {
        location.reload();
      });
      newGame.classList.remove("hide");
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
      let shipStart = Math.floor(Math.random() * (301 - 201)) + 201;
      let comDirection = Math.floor(Math.random() * (3 - 1)) + 1;
      this.allShips.forEach((ship) => {
        if (comDirection === 1) {
          ship.horizontal = true;
        } else {
          ship.horizontal = false;
        }
      });
      this.checkIfPlaced(shipStart);
    }
  }

  checkIfPlaced(shipStart) {
    this.allShips.every((ship) => {
      if (ship.placed === false) {
        let uncheckedPosition = "";
        let beforeBorderCheck_right = [];
        let beforeBorderCheck_left = [];
        let beforeBorderCheck_down = [];
        let beforeBorderCheck_up = [];
        if (ship.horizontal === true) {
          for (let i = 0; i < ship.length; i++) {
            beforeBorderCheck_right[i] = shipStart + i;
            beforeBorderCheck_left[i] = shipStart - i;
          }
          if (this.checkBorder_h(beforeBorderCheck_right)) {
            uncheckedPosition = beforeBorderCheck_left;
          } else {
            uncheckedPosition = beforeBorderCheck_right;
          }
        } else {
          for (let i = 0; i < ship.length; i++) {
            beforeBorderCheck_down[i] = shipStart + i * 10;
            beforeBorderCheck_up[i] = shipStart - i * 10;
          }
          if (this.checkBorder_v(beforeBorderCheck_down)) {
            uncheckedPosition = beforeBorderCheck_up;
          } else {
            uncheckedPosition = beforeBorderCheck_down;
          }
        }
        if (
          this.checkDoublePlacement(this.allShips, uncheckedPosition) ===
            false &&
          this.shipsPlaced > 0
        ) {
          this.setShipPosition(ship.position, uncheckedPosition);
          this.placeShip(ship.position);
          this.markSquare(ship.position);
          ship.placed = true;
        } else if (this.shipsPlaced === 0) {
          this.setShipPosition(ship.position, uncheckedPosition);
          this.placeShip(ship.position);
          this.markSquare(ship.position);
          ship.placed = true;
        }

        return false;
      }
      return true;
    });
  }

  checkDoublePlacement(placedShips, position) {
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
  }

  setShipPosition(shipPos, newPos) {
    for (let i = 0; i < newPos.length; i++) {
      shipPos[i] = newPos[i];
    }
  }

  checkBorder_h(pos) {
    if (
      pos.at(-2) % 10 === 0 ||
      pos.at(-3) % 10 === 0 ||
      pos.at(-4) % 10 === 0
    ) {
      return true;
    } else {
      return false;
    }
  }

  checkBorder_v(pos) {
    if (pos[0] >= 200) {
      if (
        pos.at(-2) + 10 > 300 ||
        pos.at(-3) + 10 > 300 ||
        pos.at(-4) + 10 > 300
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      if (
        pos.at(-2) + 10 > 100 ||
        pos.at(-3) + 10 > 100 ||
        pos.at(-4) + 10 > 100
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
}

export { Board };
