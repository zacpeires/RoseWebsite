const router = require('express').Router();
const { Recipe } = require('../db/models');

module.exports = router;

router.post('/new-recipe', async (req, res, next) => {
    try {
        const newRecipe = await Recipe.create(req.body);
        res.json(newRecipe);
    } 
    catch { next(error) }
})