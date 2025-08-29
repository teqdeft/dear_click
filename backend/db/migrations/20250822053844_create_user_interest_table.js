exports.up = function (knex) {
    return knex.schema.createTable("interest", function (table) {
        table.increments("id").primary();
        table.string("interest").notNullable();
        table.boolean("status").defaultTo(true); // active by default
        table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("interest");
};
