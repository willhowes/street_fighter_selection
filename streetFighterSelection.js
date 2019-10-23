const streetFighterSelection = (fighters, position, moves) => {
  if (moves === undefined || moves.length == 0) {
    return moves;
  }
  if (moves[0] === "right") {
    return ["E.Honda"];
  }
};
module.exports = streetFighterSelection;
