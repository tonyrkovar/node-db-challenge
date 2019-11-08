
exports.up = function (knex) {
    return knex.schema
        .creatTable('projects', tbl => {
            tbl.increments()
            //Foreign key for tasks
            //Foreign key for resources
            tbl.string('project_name', 255).notNullable()
            tbl.string('project_desc', 3000)
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('projects')
};
