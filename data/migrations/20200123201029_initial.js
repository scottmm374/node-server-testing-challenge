exports.up = async knex => {
  await knex.schema.createTable("mario-chars", tbl => {
    tbl.increments();
    tbl.string("name").notNullable();
    tbl.text("description", 288);
  });
};

exports.down = async knex => {
  await knex.schema.dropTableIfExists("mario-chars");
};
