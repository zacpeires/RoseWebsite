const router = require('express').Router();
const { BlogPost } = require('../db/models');
module.exports = router;

router.post('/post-article', async (req, res, next) => {
    try {
        const newArticle = await BlogPost.create(req.body);
        res.json(newArticle);

    } catch (error) {
        next(error)
    }
})