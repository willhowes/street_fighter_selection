const streetFighterSelection = require("./streetFighterSelection");

const fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];

const position = [0, 0];

describe("#streetFighterSelection", () => {
  it("Returns blank array when no moves given", () => {
    expect(streetFighterSelection(fighters, position, [])).toEqual([]);
  });
});
