const Sequelize = require('sequelize');
const db = require('../db')

BlogPost = db.define('blogPost', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

module.exports = BlogPost