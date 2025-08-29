exports.up = function (knex) {
    return knex.schema.createTable('password_resets', function (table) {
        table.increments('id').primary();
        table.integer('user_id').nullable().defaultTo(null);
        table.string('token', 255).nullable().defaultTo(null);
        table.timestamp('expires_at').nullable().defaultTo(null);
        table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('password_resets');
};
