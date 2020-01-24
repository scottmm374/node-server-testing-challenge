const db = require("../data/dbConfig");
const marioMod = require("./mario.model");

// refreshes seeds before tests
beforeEach(async () => {
  await db.seed.run();
});

describe(" Mario-chars model", () => {
  test("find", async () => {
    const res = await marioMod.find();
    console.log("test find", res);
    expect(res.length).toBeGreaterThan(0);
  });

  test("findById", async () => {
    const res = await marioMod.findById(1);
    expect(res.name).toBe("Nolan");
  });

  // not passing?
  // ReferenceError: Cannot access 'res' before initialization

  //   20 |
  //   21 |   test("insert", async () => {
  // > 22 |     const res = await marioMod.insert(res);
  //      |                                       ^
  //   23 |     expect("mario-chars").toHaveLength(4);
  //   24 |   });
  //   25 | });

  //   at Object.<anonymous> (mario/mario.model.spec.js:22:39)

  test("insert", async () => {
    // dont forget to mock insert something!
    await marioMod.insert({
      name: "Spiny",
      description:
        "Beetle that is thrown by cloud turtle and can't be stomped on!"
    });
    const chars = await db("mario-chars").select();
    expect(chars).toHaveLength(4);
  });
});
