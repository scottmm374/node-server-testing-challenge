const db = require("../data/dbConfig");

function find() {
  return db("mario-chars");
}

function findById(id) {}

async function insert(char) {}

async function update(id, char) {}

function remove(id) {}

module.exports = {
  find,
  findById,
  insert,
  remove,
  update
};
