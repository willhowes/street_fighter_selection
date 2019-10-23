const streetFighterSelection = (fighters, position, moves) => {
  let result = [];
  currentPosition = position;
  const pushFighterToResult = () => {
    result.push(fighters[currentPosition[0]][currentPosition[1]]);
  };
  moves.forEach(move => {
    if (move === "right") {
      if (currentPosition[1] === 5) {
        currentPosition[1] = 0;
        pushFighterToResult();
      } else {
        currentPosition[1] += 1;
        pushFighterToResult();
      }
    }

    if (move === "down") {
      if (currentPosition[0] === 1) {
        pushFighterToResult();
      } else {
        currentPosition[0] += 1;
        pushFighterToResult();
      }
    }

    if (move === "up") {
      if (currentPosition[0] === 0) {
        pushFighterToResult();
      } else {
        currentPosition[0] -= 1;
        pushFighterToResult();
      }
    }

    if (move === "left") {
      if (currentPosition[1] === 0) {
        currentPosition[1] = 5;
        pushFighterToResult();
      } else {
        currentPosition[1] -= 1;
        pushFighterToResult();
      }
    }
  });
  return result;
};
module.exports = streetFighterSelection;
