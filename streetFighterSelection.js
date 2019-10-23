const streetFighterSelection = (fighters, position, moves) => {
  let result = [];
  if (moves === undefined || moves.length == 0) {
    return moves;
  }
  if (moves[0] === "right") {
    result.push(fighters[0][1]);
  }
  return result;
};
module.exports = streetFighterSelection;
