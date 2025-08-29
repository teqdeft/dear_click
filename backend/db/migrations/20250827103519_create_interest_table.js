// migrations/20250827120000_create_interests_table.js
export async function up(knex) {
  return knex.schema.createTable("interests", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex) {
  return knex.schema.dropTable("interest");
}
