import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Blog API functions
export const blogApi = {
  // Get all blogs
  getBlogs: async () => {
    try {
      const response = await api.get('/blogs');
      return response.data;
    } catch (error) {
      console.error('Error fetching blogs:', error);
      throw error;
    }
  },

  // Get single blog by ID
  getBlogById: async (id) => {
    try {
      const response = await api.get(`/blogs/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching blog:', error);
      throw error;
    }
  },

  // Create new blog (admin only)
  createBlog: async (blogData) => {
    try {
      const formData = new FormData();
      formData.append('title', blogData.title);
      formData.append('author', blogData.author);
      formData.append('description', blogData.description);
      formData.append('content', blogData.content);
      
      if (blogData.image) {
        formData.append('image', blogData.image);
      }

      const response = await api.post('/blogs', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error creating blog:', error);
      throw error;
    }
  },

  // Update blog (admin only)
  updateBlog: async (id, blogData) => {
    try {
      const formData = new FormData();
      formData.append('title', blogData.title);
      formData.append('author', blogData.author);
      formData.append('description', blogData.description);
      formData.append('content', blogData.content);
      
      if (blogData.image) {
        formData.append('image', blogData.image);
      }

      const response = await api.put(`/blogs/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error updating blog:', error);
      throw error;
    }
  },

  // Delete blog (admin only)
  deleteBlog: async (id) => {
    try {
      const response = await api.delete(`/blogs/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting blog:', error);
      throw error;
    }
  },
};

export default blogApi;

