const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

let blogs = [];

// Get Blogs
app.get("/api/blogs", (req, res) => {
    res.json(blogs);
});

// Add Blog
app.post("/api/blogs", (req, res) => {

    const { title, author, content } = req.body;

    if (!title || !author || !content) {
        return res.status(400).json({
            message: "Please fill all fields"
        });
    }

    const newBlog = {
        id: blogs.length + 1,
        title,
        author,
        content
    };

    blogs.push(newBlog);

    res.status(201).json(newBlog);

});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});