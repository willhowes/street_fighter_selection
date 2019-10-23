const streetFighterSelection = require("./streetFighterSelection");

const fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];

describe("#streetFighterSelection", () => {
  const position = [0, 0];

  it("Returns blank array when no moves given", () => {
    expect(streetFighterSelection(fighters, position, [])).toEqual([]);
  });

  it("Handles one move to the right correctly", () => {
    const position = [0, 0];

    expect(streetFighterSelection(fighters, position, ["right"])).toEqual([
      "E.Honda"
    ]);
  });

  it("Handles two moves to the right correctly", () => {
    const position = [0, 0];

    expect(
      streetFighterSelection(fighters, position, ["right", "right"])
    ).toEqual(["E.Honda", "Blanka"]);
  });
});
