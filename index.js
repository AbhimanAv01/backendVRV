const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors"); // Import CORS
require("dotenv").config();
const userSchema = require("./UserModel");
const Tokenverify=require("./middleware/Tokenverify")

// Initialize Express app
const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Create a User model
const User = mongoose.model("User", userSchema);

// Routes

// Get all users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// Add a new user
app.post("/api/users", async (req, res) => {
  const { name, email, password, access } = req.body;

  // Validate required fields
  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ error: "Name, email, and password are required." });
  }

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const newUser = new User({
      name,
      email,
      password: hashedPassword, // Use the hashed password here
      access: access || [], // Default to an empty array if no access roles are provided
    });

    // Save the user to the database
    await newUser.save();
    res.status(201).json(newUser); // Respond with the created user
  } catch (err) {
    res.status(500).json({ error: "Failed to add user" });
  }
});

// Edit a user
app.put("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, access } = req.body;

  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    user.name = name || user.name;
    user.email = email || user.email;
    user.access = access || user.access;

    await user.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: "Failed to update user" });
  }
});

// Delete a user
app.delete("/api/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    res.status(200).json({ message: "User deleted successfully." });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete user" });
  }
});


// Login a user
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user from the database using the 'email'
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

// Generate JWT
const token = jwt.sign(
  {
    id: user._id, // Include the user's MongoDB ID
    username: user.name,
    access: user.access,
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "1h",
  }
);

    // Send the response with the token and access
    res.json({
      message: "Login successful",
      token,
      access: user.access, // Send the access array to the frontend
      username:user.name 
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred during login" });
  }
});


// user access
app.get('/access', Tokenverify, async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) return res.status(404).json({ message: "User not found" });

  res.json({
    username: user.username,
    access: user.access, // e.g., { "Data Export": true, "Data Import": false }
  });
});


// Admin dashboard route
// router.get("/dashboard", verifyToken, verifyAdmin, (req, res) => {
//   res.status(200).json({ message: "Welcome to the Admin Dashboard!" });
// });

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
