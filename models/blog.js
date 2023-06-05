const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  snippet: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true, // Added missing 'true'
  },
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema); // Corrected variable name to 'Blog'
module.exports = Blog;