const checkIfPlaced = (board, shipStart) => {
  board.allShips.every((ship) => {
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
        if (checkBorder_h(beforeBorderCheck_right)) {
          uncheckedPosition = beforeBorderCheck_left;
        } else {
          uncheckedPosition = beforeBorderCheck_right;
        }
      } else {
        for (let i = 0; i < ship.length; i++) {
          beforeBorderCheck_down[i] = shipStart + i * 10;
          beforeBorderCheck_up[i] = shipStart - i * 10;
        }
        if (checkBorder_v(beforeBorderCheck_down)) {
          uncheckedPosition = beforeBorderCheck_up;
        } else {
          uncheckedPosition = beforeBorderCheck_down;
        }
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

const checkBorder_h = (pos) => {
  if (pos.at(-2) % 10 === 0 || pos.at(-3) % 10 === 0 || pos.at(-4) % 10 === 0) {
    return true;
  } else {
    return false;
  }
};

const checkBorder_v = (pos) => {
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
};

export {
  checkIfPlaced,
  checkDoublePlacement,
  checkBorder_h,
  checkBorder_v,
  setShipPosition,
};
