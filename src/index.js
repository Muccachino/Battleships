import "./styles.scss";
import { computer, player, gui } from "./modules/create_GUI";
import { createTag, createMultiTags } from "./modules/html_functions";
import { Ship } from "./modules/ship_class";
import { Board } from "./modules/board_class";
import { ComAI } from "./modules/computer_AI_class";

const playerBoard = player();
const comBoard = computer();
gui(comBoard, playerBoard);
const comAI = new ComAI(comBoard, playerBoard);

//all Event Listener

const board = document.querySelectorAll(".board");
board[0].classList.add("playerBackground");
board[0].addEventListener("click", (e) => {
  let targetElement = e.target;
  if (targetElement.matches(".field")) {
    let shipStart = parseInt(targetElement.getAttribute("data-square"));
    if (playerBoard.allShipsPlaced === false) {
      playerBoard.checkIfPlaced(shipStart);
      if (playerBoard.allShipsPlaced) {
        button.classList.add("hide");
        const message = document.querySelector("#message");
        message.innerHTML = "Shoot for enemy ships on the right board";
      }
    }
  }
});

board[1].classList.add("comBackground");
board[1].addEventListener("click", (e) => {
  let targetElement = e.target;
  if (targetElement.matches(".field")) {
    let shot = parseInt(targetElement.getAttribute("data-square"));
    if (
      playerBoard.allShipsPlaced === true &&
      !playerBoard.usedChoices.includes(shot) &&
      playerBoard.allHits != 12 &&
      comBoard.allHits != 12
    ) {
      playerBoard.usedChoices.push(shot);
      comBoard.receiveAttack(shot);
      comAI.comAttack();
    }
  }
});

const button = document.querySelector("#direction");
button.addEventListener("click", () => {
  playerBoard.allShips.forEach((ship) => {
    if (ship.horizontal) {
      ship.horizontal = false;
      button.innerHTML = "Horizontal";
    } else {
      ship.horizontal = true;
      button.innerHTML = "Vertical";
    }
  });
});
