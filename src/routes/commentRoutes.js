// routes/commentRoutes.js

const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/CommentController');

router.post('/', CommentController.createComment);
router.get('/:commentId', CommentController.getComment);
router.put('/:commentId', CommentController.updateComment);
router.delete('/:commentId', CommentController.deleteComment);

module.exports = router;
