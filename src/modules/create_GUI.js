import { createTag } from "./html_functions";
import { Board } from "./board_class";

const computer = () => {
  const comBoard = new Board("Computer", 4);
  comBoard.createBoard(200);
  comBoard.comShips();
  return comBoard;
};

const player = () => {
  const playerBoard = new Board("Player", 4);
  playerBoard.createBoard(0);
  return playerBoard;
};

const gui = (com, player) => {
  const header = document.querySelector("#header");
  const heading = createTag(header, "h1", "heading", null, "Battleships");
  const playerName = createTag(header, "p", "playerName", null, player.name);
  const comName = createTag(header, "p", "comName", null, com.name);
  const content = document.querySelector("#content");
  const btn_direction = createTag(
    content,
    "button",
    "direction",
    null,
    "Vertical"
  );
  const message = createTag(
    document.body,
    "p",
    "message",
    null,
    "Place your ships on the left board. Change directions by clicking the button first"
  );
};

export { computer, player, gui };
