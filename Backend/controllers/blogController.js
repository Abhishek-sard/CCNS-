import Blog from '../models/Blog.js';


//create Blog
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
        res.json({message: "Blog created successfully, blog: newBlog"});
        
    } catch (error) {
        res.status(500).json({error: error.message});
        
    }
}

//get all blogs
export const getBlogs = async(req,res) => {
    try {
        const blogs = await Blog.find().sort({createdAt: -1});
        res.json(blogs);
        
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

//get single blog
export const getBlogById = async(req,res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        res.json(blog);
        
    } catch (error) {
        res.status(500).json({error: error.message});
        
    }
}

//update blog
export const updateBlog = async (req, res) => {
    try {
        const updateData = {
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            content: req.body.content,
            

        };
        if(req.file) uploadData.image = `/uploads/${req.file.filename}`;

        const updateBlog = await Blog.findByIdAndUpdate(req.params.id, updateData, {new: true});
        res.json(updateBlog);
        
    } catch (error) {
        res.status(500).json({error: error.message});
        
    }
}

//Delete blog

export const deleteBlog = async (req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id);
        
    } catch (error) {
        res.status(500).json({error: error.message});

        
    }
}
    