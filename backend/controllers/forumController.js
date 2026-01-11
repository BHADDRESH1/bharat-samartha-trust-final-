const ForumTopic = require('../models/ForumTopic');

// @desc    Get topics
// @route   GET /api/forum
// @access  Public
const getTopics = async (req, res) => {
  try {
    const topics = await ForumTopic.find({})
      .populate('author', 'name')
      .populate('comments.user', 'name');
    res.json(topics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create topic
// @route   POST /api/forum
// @access  Private
const createTopic = async (req, res) => {
  try {
    const { title, content, category } = req.body;
    const topic = await ForumTopic.create({
      title,
      content,
      category,
      author: req.user._id
    });
    res.status(201).json(topic);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Add comment
// @route   POST /api/forum/:id/comment
// @access  Private
const addComment = async (req, res) => {
  try {
    const topic = await ForumTopic.findById(req.params.id);
    if(topic) {
        topic.comments.push({
            user: req.user._id,
            text: req.body.text
        });
        await topic.save();
        res.json(topic);
    } else {
        res.status(404).json({ message: 'Topic not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getTopics, createTopic, addComment };