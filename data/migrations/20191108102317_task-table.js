
exports.up = function (knex) {
    return knex.schema
        .createTable('tasks', tbl => {
            tbl.increments()
            tbl.string('task_name', 255).notNullable()
            tbl.string('task_desc', 3000).notNullable()
            tbl.string('task_notes', 255)
            tbl.integer('project_id', 255)
                .unsigned()
                .references('id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
            tbl.integer('completed').notNullable().defaultTo(0)
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('tasks')
};
