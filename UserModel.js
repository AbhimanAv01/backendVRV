const mongoose = require('mongoose');
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
  isActive: { type: Boolean, default: true },
  lastActive: { type: String, default: getFormattedLocalDateTime }, 
  dateAdded: { type: String, default: getFormattedLocalDateTime },  
});

module.exports = userSchema;
