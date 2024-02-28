// controllers/BlogController.js

const Blog = require("../models/Blog");

exports.createBlog = async (req, res, next) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(201).json(blog);
  } catch (error) {
    next(error);
  }
};

// Implement other controllers similarly
