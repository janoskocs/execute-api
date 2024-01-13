/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable("user", (table) => {
            table.increments("id").primary();
            table.string("first_name").notNullable();
            table.string("last_name").notNullable();
            table.string("handle").notNullable();
            table.string("email").notNullable();
            table.string("password").notNullable();
            table.number("count_of_tasks_done").notNullable();
            table.number("number_of_followers").notNullable();
            table.timestamp("created_at").defaultTo(knex.fn.now());
            table.timestamp("last_logged_in_time");
            table
                .timestamp("updated_at")
                .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
        })
        .createTable("todo", (table) => {
            table.increments("id").primary();
            table.string("todo", 256).notNullable();
            table.string("handle").notNullable();
            table
                .integer("user_id")
                .unsigned()
                .references("user.id")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table.timestamp("created_at").defaultTo(knex.fn.now());
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
    return knex.schema.dropTable("todo").dropTable("user");
};
