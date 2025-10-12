import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "secret123";

// Health check endpoint
router.get("/health", (req, res) => {
  res.json({ 
    message: "Auth service is running", 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

//register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, role });
    await user.save();
    res.json({ message: "user register successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    
    console.log('Login attempt for email:', email);
    console.log('Request origin:', req.headers.origin);

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found:', email);
      return res.status(400).json({ error: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Invalid password for:', email);
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role }, // include role in payload
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    console.log('Login successful for:', email, 'Role:', user.role);

    res.json({
      token,
      role: user.role, // 👈 send role to frontend
      name: user.name, // optional: send name
      email: user.email, // optional: send email
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
