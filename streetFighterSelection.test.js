const streetFighterSelection = require("./streetFighterSelection");

const fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];

let position = [0, 0];

describe("#streetFighterSelection", () => {
  beforeEach(() => {
    position = [0, 0];
  });

  afterEach(() => {
    position = [0, 0];
  });

  it("Returns blank array when no moves given", () => {
    expect(streetFighterSelection(fighters, position, [])).toEqual([]);
  });

  it("Handles one move to the right correctly", () => {
    expect(streetFighterSelection(fighters, position, ["right"])).toEqual([
      "E.Honda"
    ]);
  });

  it("Handles two moves to the right correctly", () => {
    expect(
      streetFighterSelection(fighters, position, ["right", "right"])
    ).toEqual(["E.Honda", "Blanka"]);
  });

  it("Handles one move down correctly", () => {
    expect(streetFighterSelection(fighters, position, ["down"])).toEqual([
      "Ken"
    ]);
  });

  it("Handles two moves down correctly", () => {
    expect(
      streetFighterSelection(fighters, position, ["down", "down"])
    ).toEqual(["Ken", "Ken"]);
  });

  it("Handles one move up correctly", () => {
    expect(streetFighterSelection(fighters, position, ["up"])).toEqual(["Ryu"]);
  });

  it("Handles two moves up correctly", () => {
    expect(streetFighterSelection(fighters, position, ["up", "up"])).toEqual([
      "Ryu",
      "Ryu"
    ]);
  });
});
