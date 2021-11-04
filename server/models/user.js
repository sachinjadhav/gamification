const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema for user
const UserSchema = new Schema({
  empid: {
    type: String,
    required: [true],
  },
  name: {
    type: String,
    required: [true],
  },
  email: {
    type: String,
    required: [true],
  },
  rank: {
    type: String,
    required: [true],
  },
  location: {
    type: String,
    required: [true],
  },
  organization: {
    type: String,
    required: [true],
  },
  active: {
    type: String,
    required: [true],
  },
  address: {
    type: String,
    required: [true],
  },
  createdate: {
    type: Date,
  },
  lastupdate: {
    type: Date,
  },
});

// Create model for user

const User = mongoose.model("user", UserSchema);

module.exports = User;
