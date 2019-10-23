const streetFighterSelection = (fighters, position, moves) => {
  let result = [];

  moves.forEach(move => {
    if (move === "right") {
      if (position[1] === 5) {
        position[1] = 0;
        result.push(fighters[position[0]][position[1]]);
      } else {
        position[1] += 1;
        result.push(fighters[position[0]][position[1]]);
      }
    }

    if (move === "down") {
      if (position[0] === 1) {
        result.push(fighters[position[0]][position[1]]);
      } else {
        position[0] += 1;
        result.push(fighters[position[0]][position[1]]);
      }
    }

    if (move === "up") {
      if (position[0] === 0) {
        result.push(fighters[position[0]][position[1]]);
      } else {
        position[0] -= 1;
        result.push(fighters[position[0]][position[1]]);
      }
    }

    if (move === "left") {
      if (position[1] === 0) {
        position[1] = 5;
        result.push(fighters[position[0]][position[1]]);
      } else {
        position[1] -= 1;
        result.push(fighters[position[0]][position[1]]);
      }
    }
  });
  return result;
};
module.exports = streetFighterSelection;
