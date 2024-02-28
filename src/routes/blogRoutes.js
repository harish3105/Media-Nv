// routes/blogRoutes.js

const express = require('express');
const router = express.Router();
const BlogController = require('../controllers/BlogController');

router.post('/', BlogController.createBlog);
router.get('/:blogId', BlogController.getBlog);
router.put('/:blogId', BlogController.updateBlog);
router.delete('/:blogId', BlogController.deleteBlog);
router.get('/user/:userId', BlogController.getBlogsByUser);

module.exports = router;
