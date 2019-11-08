
exports.up = function (knex) {
    return knex.schema
        .createTable('resources', tbl => {
            tbl.increments()
            tbl.string('resource_name', 255).notNullable()
            tbl.string('resource_desc', 600)
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('resources')
};
