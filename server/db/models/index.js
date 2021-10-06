const { Sequelize } = require('sequelize');

const username = 'larry';
const host = 'localhost';
const database = 'workdirectory';
const password = '123456';
const port = 5432;

const sequelize = new Sequelize(
    database,
    username,
    password,
    {
        host,
        dialect: 'postgres',
        port,
        logging: false
    }
);

const WorkerModel = require('./worker');

const Worker = WorkerModel(sequelize, Sequelize);

const models = {
    Worker,
};

Object.keys(models).forEach((model) => {
    if (models[model].associate) {
        models[model].associate(models);
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;
module.exports = models;