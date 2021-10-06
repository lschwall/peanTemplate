const Worker = require('../models').Worker
const { Router } = require('express');
const workerRouter = Router();

workerRouter.post('/create', (req, res) => {
    const { company_name } = req.body;
    Worker.create({
        company_name
    })
    res.send('SUCCESS')
})
workerRouter.post('/', (req, res) => {
    res.send('SUCCESS POST')
})
workerRouter.put('/', (req, res) => {
    res.send('SUCCESS PUT')
})
workerRouter.delete('/delete', (req, res) => {
    const { name } = req.query
    Worker.findOne({ where: { company_name: name } })
        .then(result => result.destroy())
        .finally(response => res.send(response))
        .catch(error => console.log(error))
})

module.exports = {
    workerRouter
}