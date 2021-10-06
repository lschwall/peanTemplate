//express setup

const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')
const app = express();
app.use(cors())
app.use(bodyParser.json());
const distDir = __dirname + "/dist/";
app.use(express.static(distDir));
const server = app.listen(process.env.PORT || 8080, function () {
    const port = server.address().port;
    console.log("App now running on port", port);
});

//database models 

const models = require('./db/models/index')

// routes 
const { workerRouter } = require('./db/routes/Worker')

//end points

app.use('/db/worker', workerRouter)


//Initialize Database
const connection = async () => {
    try {
        await models.sequelize.authenticate();
        console.info('Database Connection Successful');
    } catch (error) {
        console.warn('Database Connection Cannot Be Established', error);
    }
};

const syncModels = async () => {
    try {
        await models.sequelize.sync();
        console.info('Model Sync Successful');
    } catch (error) {
        console.warn('Failed to Sync Models:', error);
    }
};

connection();
syncModels();
