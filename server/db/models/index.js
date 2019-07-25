const User = require('./user');
const BlogPost = require('./blogPost');
const Recipe = require('./recipe');
const FoodType = require('./foodType');

Recipe.belongsToMany(FoodType, {through: 'type-of-food'});
FoodType.belongsToMany(Recipe, {through: 'type-of-food'});

module.exports = {
    User,
    BlogPost,
    Recipe,
    FoodType
};