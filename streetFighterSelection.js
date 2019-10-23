const streetFighterSelection = (fighters, position, moves) => {
  let result = [];
  let currentPosition = position;
  let row = currentPosition[0];
  let column = currentPosition[1];

  const pushFighterToResult = () => {
    result.push(fighters[row][column]);
  };

  moves.forEach(move => {
    if (move === "right") {
      if (column === 5) {
        column = 0;
        pushFighterToResult();
      } else {
        column += 1;
        pushFighterToResult();
      }
    }

    if (move === "down") {
      if (row === 1) {
        pushFighterToResult();
      } else {
        row += 1;
        pushFighterToResult();
      }
    }

    if (move === "up") {
      if (row === 0) {
        pushFighterToResult();
      } else {
        row -= 1;
        pushFighterToResult();
      }
    }

    if (move === "left") {
      if (column === 0) {
        column = 5;
        pushFighterToResult();
      } else {
        column -= 1;
        pushFighterToResult();
      }
    }
  });
  return result;
};
module.exports = streetFighterSelection;
