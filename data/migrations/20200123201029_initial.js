exports.up = async knex => {
  await knex.schema.createTable("mario-chars", tbl => {
    tbl.increments();
    tbl
      .string("name")
      .notNullable()
      .unique();
    tbl.text("description", 288).notNullable();
  });
};

exports.down = async knex => {
  await knex.schema.dropTableIfExists("mario-chars");
};
