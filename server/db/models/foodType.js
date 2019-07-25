const Sequelize = require('Sequelize')
const db = require('../db')

const foodType = db.define('foodType', {
    typeOfFood: {
        type: Sequelize.STRING
    }
})

module.exports = foodType;