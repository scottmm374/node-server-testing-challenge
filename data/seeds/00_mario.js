exports.seed = async knex => {
  await knex("mario-chars").truncate();

  await knex("mario-chars").insert([
    {
      name: "Nolan",
      description:
        "Mario expert and collaborator at the ripe old age of 8 years old"
    },
    { name: "Goomba", description: "A fungus that marches" },
    {
      name: "Bonzi Bill",
      description: "A variety of the BulletBill but bigger"
    }
  ]);
};
