const express = require('express')

const db = require('../models/project-model')

const router = express.Router()

router.get('/resources', (req, res) => {
    db.getResources()
        .then(resc => {
            res.status(200).json(resc)
        })
        .catch(err => {
            res.status(400).json({ ERROR: `There was an error: ${err}` })
        })
})

router.post('/resources', (req, res) => {
    const newResc = req.body
    db.addResource(newResc)
        .then(resc => {
            res.status(200).json(resc)
        })
        .catch(err => {
            res.status(400).json({ ERROR: `There was an error: ${err}` })
        })
})

router.get('/', (req, res) => {
    db.getProjects()
        .then(proj => {
            res.status(200).json(proj.map(newProj => {
                if (newProj.completed === 0) {
                    return {
                        ...newProj,
                        completed: false
                    }
                } else {
                    return {
                        ...newProj,
                        completed: true
                    }
                }
            }))
        })
        .catch(err => {
            res.status(400).json({ ERROR: `There was an error: ${err}` })
        })
})

router.post('/', (req, res) => {
    const newProj = req.body
    db.addProject(newProj)
        .then(proj => {
            res.status(200).json(proj)
        })
        .catch(err => {
            res.status(400).json({ ERROR: `There was an error: ${err}` })
        })
})

router.get('/:id/tasks', (req, res) => {
    db.getTasks(req.params.id)
        .then(task => {
            res.status(200).json(task.map(newTask => {
                if (newTask.completed === 0) {
                    return {
                        ...newTask,
                        completed: false,
                    }
                } else {
                    return {
                        ...newTask,
                        completed: true,
                    }
                }
            }))
        })
        .catch(err => {
            res.status(400).json({ ERROR: `There was an error: ${err}` })
        })
})

// function convertCompleted(req, res, next) {
//     req.map(newProj => {
//         // console.log(newProj)
//         if (newProj.completed === 0) {
//             res.status(200).json({
//                 id: newProj.id,
//                 project_name: newProj.project_name,
//                 project_desc: newProj.project_desc,
//                 completed: false
//             })
//         } else {
//             res.status(200).json({
//                 id: newProj.id,
//                 project_name: newProj.project_name,
//                 project_desc: newProj.project_desc,
//                 completed: true
//             })
//         }
//         next()
//     })
// }


module.exports = router;
