const db = require('../data/db-config')

module.exports = {
    getResources,
    addResource,
    getProjects,
    addProject,
    getTasks
}

function getResources() {
    return db('resources')
}

function addResource(resc) {
    return db
        .insert(resc)
        .into('resources')
}

function getProjects() {
    return db('projects')
}

function addProject(resc) {
    return db
        .insert(resc)
        .into('projects')
}

function getTasks(id) {
    return db
        .select('T.*', 'P.project_name', 'P.project_desc')
        .from('tasks as T')
        .join('projects as P', function () {
            this.on('P.Id ', '=', 'T.project_id')
        })
        .where({ 'P.Id': id })
}