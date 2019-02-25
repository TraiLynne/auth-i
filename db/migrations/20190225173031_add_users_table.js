
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();

        tbl
            .string('name')
            .notNullable();


        tbl
            .string('username')
            .notNullable()
            .unique('uq_username');

        tbl
            .string('password')
            .notNullable();

        tbl
            .timestamp('createdAt')
            .defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
