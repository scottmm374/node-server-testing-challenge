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
});
