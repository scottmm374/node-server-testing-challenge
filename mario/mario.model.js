const db = require("../data/dbConfig");

function find() {
  return db("mario-chars");
}

function findById(id) {
  return db("mario-chars")
    .where({ id })
    .first();
}

async function insert(char) {
  const [id] = await db("mario-chars").insert(char);
  return findById(id);
}

async function update(id, char) {}

function remove(id) {}

module.exports = {
  find,
  findById,
  insert,
  remove,
  update
};
