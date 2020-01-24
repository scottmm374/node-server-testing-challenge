const supertest = require("supertest");
const server = require("./index");
const db = require("./data/dbConfig");

beforeEach(async () => {
  await db.seed.run();
});

test("welcome route", async () => {
  const res = await supertest(server).get("/");
  expect(res.status).toBe(200);
  expect(res.type).toBe("application/json");
  expect(res.body.message).toMatch(/Welcome to Nolan's world of Mario/i);
});

test("Get Mario Character list", async () => {
  const res = await supertest(server).get("/mario");
  expect(res.status).toBe(200);
  expect(res.type).toBe("application/json");
  expect(res.body.length).toBeGreaterThan(0);
  expect(res.body[0].id).toBe(1);
  expect(res.body[0].name).toBe("Nolan");
});

test("insert new character", async () => {
  const res = await supertest(server)
    .post("/mario")
    .send({ name: "Mario", description: "The Hero" });
  expect(res.status).toBe(201);
  expect(res.type).toBe("application/json");
  expect(res.body).toEqual({ id: 4, name: "Mario", description: "The Hero" });
});

test("update character", async () => {
  const res = await supertest(server)
    .put(`/mario/3`)
    .send({ name: "BonziBill" });
  expect(res.status).toBe(201);
  expect(res.type).toBe("application/json");
  expect(res.body).toEqual({
    id: 3,
    name: "BonziBill",
    description: "A variety of the BulletBill but bigger"
  });
});

test("delete", async () => {
  const res = await supertest(server).del(`/mario/4`);
  expect(res.status).toBe(200);
  expect(res.type).toBe("application/json");
});

// ! Shows passing tests... YAY!

// PASS  ./index.spec.js
// √ welcome route (382ms)
// √ Get Mario Character list (338ms)
// √ insert new character (507ms)
// √ update character (566ms)
// √ delete (351ms)

// Test Suites: 1 passed, 1 total
// Tests:       5 passed, 5 total
// Snapshots:   0 total
// Time:        5.112s
// Ran all test suites related to changed files.
