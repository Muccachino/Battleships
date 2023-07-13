import { Board } from "./board_class";

class ComAI {
  constructor(com, player) {
    this.computer = com;
    this.enemyPlayer = player;
  }
  comAttack() {
    let lastShot = this.computer.usedChoices.slice(-1);
    lastShot = lastShot[0];
    let comChoice = Math.floor(Math.random() * (100 - 1)) + 1;
    comChoice = this.comBestShot(comChoice, lastShot);

    this.computer.usedChoices.push(comChoice);
    this.enemyPlayer.receiveAttack(comChoice);
  }

  comBestShot(comChoice, lastShot) {
    if (
      this.enemyPlayer.field[lastShot] === 3 &&
      this.enemyPlayer.field[lastShot + 1] === 1
    ) {
      comChoice = lastShot + 1;
    } else if (
      this.enemyPlayer.field[lastShot] === 3 &&
      this.enemyPlayer.field[lastShot - 1] === 1
    ) {
      comChoice = lastShot - 1;
    } else if (
      this.enemyPlayer.field[lastShot] === 3 &&
      this.enemyPlayer.field[lastShot - 2] === 1
    ) {
      comChoice = lastShot - 2;
    } else if (
      this.enemyPlayer.field[lastShot] === 3 &&
      this.enemyPlayer.field[lastShot - 3] === 1
    ) {
      comChoice = lastShot - 3;
    } else if (
      this.enemyPlayer.field[lastShot] === 3 &&
      this.enemyPlayer.field[lastShot + 10] === 1
    ) {
      comChoice = lastShot + 10;
    } else if (
      this.enemyPlayer.field[lastShot] === 3 &&
      this.enemyPlayer.field[lastShot - 10] === 1
    ) {
      comChoice = lastShot - 10;
    } else if (
      this.enemyPlayer.field[lastShot] === 3 &&
      this.enemyPlayer.field[lastShot - 20] === 1
    ) {
      comChoice = lastShot - 20;
    } else if (
      this.enemyPlayer.field[lastShot] === 3 &&
      this.enemyPlayer.field[lastShot - 30] === 1
    ) {
      comChoice = lastShot - 30;
    } else {
      while (this.computer.usedChoices.includes(comChoice)) {
        comChoice = Math.floor(Math.random() * (100 - 1)) + 1;
      }
    }
    return comChoice;
  }
}

export { ComAI };
