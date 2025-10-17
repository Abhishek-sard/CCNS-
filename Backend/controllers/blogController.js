import Blog from "../models/Blog.js";

// Create Blog
export const createBlog = async (req, res) => {
  try {
    const newBlog = new Blog({
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      content: req.body.content,
      image: req.file ? `/uploads/${req.file.filename}` : null,
    });
    await newBlog.save();
    res.status(201).json({ message: "Blog created successfully", blog: newBlog });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all Blogs
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get single Blog
export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: "Blog not found" });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Blog
export const updateBlog = async (req, res) => {
  try {
    const updateData = {
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      content: req.body.content,
    };
    if (req.file) updateData.image = `/uploads/${req.file.filename}`;

    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });
    if (!updatedBlog) return res.status(404).json({ error: "Blog not found" });

    res.json(updatedBlog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Blog
export const deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) return res.status(404).json({ error: "Blog not found" });

    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
