const Sequelize = require('sequelize');
const db = require('../db');

const Recipe = db.define('recipe', {
    recipeName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    ingredients: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true
    },
    method: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true
    }
})

module.exports = Recipe