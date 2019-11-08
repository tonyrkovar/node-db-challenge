const db = require('../data/db-config')

module.exports = {
    getResources,
    addResource,
    getProjects,
    addProject
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