const router = require('express').Router();
const users = require('./users');
const blogPosts = require('./blogPosts');


router.use('/users', users)
router.use('/blog-posts', blogPosts)

router.use((req, res, next) => {
    const err = new Error('not found.');
    err.status = 404;
    next(err);
})

module.exports = router;
