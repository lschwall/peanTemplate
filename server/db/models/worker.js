module.exports = (sequelize, Sequelize) => {
    const Worker = sequelize.define('worker', {
        company_name: {
            type: Sequelize.TEXT
        },
        phone: {
            type: Sequelize.TEXT
        },
        email: {
            type: Sequelize.TEXT
        }
    }, {
        freezeTableName: true,
    });

    return Worker;
};