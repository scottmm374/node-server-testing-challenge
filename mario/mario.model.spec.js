const db = require("../data/dbConfig");
const marioMod = require("./mario.model");

// refreshes seeds before tests
beforeEach(async () => {
  await db.seed.run();
});

describe(" Mario-chars model", () => {
  test("find", async () => {
    const res = await marioMod.find();
    expect(res.length).toBeGreaterThan(0);
  });
});
