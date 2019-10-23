const streetFighterSelection = (fighters, position, moves) => {
  let result = [];
  let currentPosition = position;
  if (moves === undefined || moves.length == 0) {
    return moves;
  }
  moves.forEach(move => {
    if (move === "right") {
      position[1] += 1;
      result.push(fighters[position[0]][position[1]]);
    }

    if (move === "down") {
      position[0] += 1;
      result.push(fighters[position[0]][position[1]]);
    }
  });
  return result;
};
module.exports = streetFighterSelection;
