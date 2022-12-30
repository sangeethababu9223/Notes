const mongoose = require("mongoose");
const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: ["true", "Please add title"],
    unique: true,
    trim: true,
    maxlength: [50, "Name can not be more than 50 characters"],
  },
  slug: String,
  content: {
    type: String,
    required: ["true", "Please add content"],
    maxlength: [5000, "content can not be more than 5000 characters"],
  },
  createdDate: {
    type: Date,
    require: ["true", "Date is needed"],
  },
  updatedDate: Date,
});

module.exports = mongoose.model("Note", NoteSchema);
