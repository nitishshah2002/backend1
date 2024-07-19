// server.js

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 4000;
// const routes = require('routes');
const router = require('router');

const DATABASE_URL = 'mongodb://127.0.0.1:27017/blogAppDatabase';

// Import the router
const routes = require('./routes');

mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connected successfully');

    // Start the server only after the database connection is successful
    app.listen(PORT, () => {
        console.log(`Server started successfully at ${PORT}`);
    });

}).catch((error) => {
    console.error('Database connection error:', error);
});

// Define a simple schema and model
const blogSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Blog = mongoose.model('Blog', blogSchema);

// Insert a document to create the database
const newBlog = new Blog({
    title: 'First Blog Post',
    content: 'This is the content of the first blog post.'
});

newBlog.save().then(() => {
    console.log('Blog post saved successfully');
}).catch((error) => {
    console.error('Error saving blog post:', error);
});

// Use the router for handling routes
app.use('/', router);

// Define additional routes if needed
app.get('/', (req, res) => {
    res.send('<h1>This is HomePage Babyyy</h1>');
});
