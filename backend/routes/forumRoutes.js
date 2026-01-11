const express = require('express');
const router = express.Router();
const { getTopics, createTopic, addComment } = require('../controllers/forumController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
  .get(getTopics)
  .post(protect, createTopic);

router.route('/:id/comment').post(protect, addComment);

module.exports = router;