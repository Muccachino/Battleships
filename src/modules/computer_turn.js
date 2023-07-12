const comAttack = (com, player) => {
  let lastShot = com.usedChoices.slice(-1);
  lastShot = lastShot[0];
  let comChoice = Math.floor(Math.random() * (100 - 1)) + 1;
  comChoice = comBestShot(comChoice, lastShot, com, player);

  com.usedChoices.push(comChoice);
  player.receiveAttack(comChoice);
};

const comBestShot = (comChoice, lastShot, com, player) => {
  if (player.field[lastShot] === 3 && player.field[lastShot + 1] === 1) {
    comChoice = lastShot + 1;
  } else if (player.field[lastShot] === 3 && player.field[lastShot - 1] === 1) {
    comChoice = lastShot - 1;
  } else if (player.field[lastShot] === 3 && player.field[lastShot - 2] === 1) {
    comChoice = lastShot - 2;
  } else if (player.field[lastShot] === 3 && player.field[lastShot - 3] === 1) {
    comChoice = lastShot - 3;
  } else if (
    player.field[lastShot] === 3 &&
    player.field[lastShot + 10] === 1
  ) {
    comChoice = lastShot + 10;
  } else if (
    player.field[lastShot] === 3 &&
    player.field[lastShot - 10] === 1
  ) {
    comChoice = lastShot - 10;
  } else if (
    player.field[lastShot] === 3 &&
    player.field[lastShot - 20] === 1
  ) {
    comChoice = lastShot - 20;
  } else if (
    player.field[lastShot] === 3 &&
    player.field[lastShot - 30] === 1
  ) {
    comChoice = lastShot - 30;
  } else {
    while (com.usedChoices.includes(comChoice)) {
      comChoice = Math.floor(Math.random() * (100 - 1)) + 1;
    }
  }
  return comChoice;
};

export { comAttack, comBestShot };
