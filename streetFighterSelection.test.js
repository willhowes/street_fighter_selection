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

  it("Handles one move down and one move up correctly", () => {
    expect(streetFighterSelection(fighters, position, ["down", "up"])).toEqual([
      "Ken",
      "Ryu"
    ]);
  });

  it("Handles one move to the left correctly", () => {
    expect(streetFighterSelection(fighters, position, ["left"])).toEqual([
      "Vega"
    ]);
  });

  it("Handles two moves to the left correctly", () => {
    expect(
      streetFighterSelection(fighters, position, ["left", "left"])
    ).toEqual(["Vega", "Balrog"]);
  });

  it("Handles one move to the right then one to the left correctly", () => {
    expect(
      streetFighterSelection(fighters, position, ["right", "left"])
    ).toEqual(["E.Honda", "Ryu"]);
  });

  it("handles moves to the right beyond end of row", () => {
    expect(
      streetFighterSelection(fighters, position, [
        "right",
        "right",
        "right",
        "right",
        "right",
        "right"
      ])
    ).toEqual(["E.Honda", "Blanka", "Guile", "Balrog", "Vega", "Ryu"]);
  });

  it("handles multiple moves in different directions", () => {
    const moves = ["up", "left", "right", "left", "left"];
    expect(streetFighterSelection(fighters, position, moves)).toEqual([
      "Ryu",
      "Vega",
      "Ryu",
      "Vega",
      "Balrog"
    ]);
  });
  it("Handles multiple moves and going off far right of screen on second row", () => {
    const moves2 = ["right", "down", "left", "left", "left", "left", "right"];
    expect(streetFighterSelection(fighters, position, moves2)).toEqual([
      "E.Honda",
      "Chun Li",
      "Ken",
      "M.Bison",
      "Sagat",
      "Dhalsim",
      "Sagat"
    ]);
  });
});
