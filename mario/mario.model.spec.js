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

  test("update", async () => {
    await marioMod.update(3, { name: "BonziBill" });
    const char = await marioMod.findById(3);
    expect(char.name).toBe("BonziBill");
  });

  test("remove", async () => {
    await marioMod.remove(4);
    const char = await marioMod.find();
    expect(char).toHaveLength(3);
  });
});
