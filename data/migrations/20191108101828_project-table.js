
exports.up = function (knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments()
            //Foreign key for resources
            tbl.string('project_name', 255).notNullable()
            tbl.string('project_desc', 3000)
            tbl.integer('completed').notNullable().defaultTo('0')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('projects')
};
