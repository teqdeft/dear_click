// migrations/20250821120000_create_users_table.js
exports.up = function (knex) {
    return knex.schema.createTable("users", (table) => {
        table.increments("id").primary(); // Auto-increment user ID
        table.string("contact", 20).nullable().defaultTo(null); // Optional phone
        table.string("email", 100).nullable().unique();
        table.string("password").notNullable(); // Hashed password
        table.string("username", 50).nullable().unique(); // Unique username
        table.string("name", 100); // Display name
        table.text("bio"); // User bio
        table.string("profile_image"); // Profile picture URL
        table.string("website", 255); // Optional website link
        table.string("otp", 6); // OTP code (temporary)
        table.timestamp("otp_expires_at").nullable().defaultTo(null);
        table.string('interest_id').nullable().defaultTo(null);
        table.boolean("is_private").defaultTo(false); // Private account
        table.boolean("contact_verify").defaultTo(false); // Private account
        table.boolean("email_verify").defaultTo(false);
        table.tinyint('status').unsigned().defaultTo(1).comment('0=inactive,1=active');
        table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("users");
};
