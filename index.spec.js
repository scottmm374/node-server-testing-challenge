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
