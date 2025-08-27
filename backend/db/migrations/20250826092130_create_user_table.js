/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments("id").primary();
    table.tinyint("role").defaultTo(1).comment("1=user");
    table.string("name", 20);
    table.string("userName", 20).nullable().defaultTo(null);
    table.string("email", 100).nullable().defaultTo(null);
    table.string("emailOtp", 20).nullable().defaultTo(null);
    table.string("phone", 20).nullable().defaultTo(null);
    table.string("phoneOtp", 20).nullable().defaultTo(null);
    table.boolean("mobileVerified").defaultTo(false);
    table.boolean("emailVerified").defaultTo(false);
    table.string("password", 255);
    table.string("profile_pic", 255).nullable().defaultTo(null);
    table.boolean("status").defaultTo(true);
    table.timestamp("created_at").defaultTo(knex.raw("CURRENT_TIMESTAMP"));
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
