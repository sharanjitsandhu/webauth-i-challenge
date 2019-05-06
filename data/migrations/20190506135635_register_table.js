exports.up = function(knex, Promise) {
  return knex.schema.createTable("register", register => {
    register.increments();
    register
      .string("user", 128)
      .notNullable()
      .unique();
    register.string("password", 128).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("register");
};
