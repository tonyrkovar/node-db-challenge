
exports.up = function (knex) {
    return knex.schema
        .createTable('resources', tbl => {
            tbl.increments()
            tbl.integer('project_id', 255)
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
            tbl.string('resource_name', 255).notNullable()
            tbl.string('resource_desc', 600)
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('resources')
};
