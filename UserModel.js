const mongoose = require('mongoose');

// Function to get the system's local date and time in 12-hour format
const getFormattedLocalDateTime = () => {
  const date = new Date();
  return date.toLocaleString('en-GB', { hour12: true }).replace(',', '');
};

// Define the User schema
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: true,
   
  },
  access: [String],
  lastActive: { type: String, default: getFormattedLocalDateTime }, // Save as string
  dateAdded: { type: String, default: getFormattedLocalDateTime },  // Save as string
});

// Export the schema so that it can be used to create the model
module.exports = userSchema;
