const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Notes = require("../models/Notes");

exports.getNotes = asyncHandler(async (req, res, next) => {
  const notes = await Notes.find();
  res.status(200).json({
    success: true,
    coun: notes.length,
    data: notes,
  });
});

exports.getNote = asyncHandler(async (req, res, next) => {
  const note = await Notes.findById(req.params.id);
  if (!note) {
    return next(
      new ErrorResponse(`Note with id ${req.params.id} not found`, 404)
    );
  }
  res.status(200).json({
    success: true,
    data: note,
  });
});

exports.addNote = asyncHandler(async (req, res, next) => {
  const note = await Notes.create(req.body);
  res.status(201).json({
    success: true,
    data: note,
  });
});

exports.updateNote = asyncHandler(async (req, res, next) => {
  const note = await Notes.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!note) {
    return next(
      new ErrorResponse(`Note with id ${req.params.id} not found`, 404)
    );
  }
  res.status(200).json({ success: true, data: note });
});

exports.deleteNote = asyncHandler(async (req, res, next) => {
  const note = await Notes.findByIdAndDelete(req.params.id);
  if (!note) {
    return next(
      new ErrorResponse(`Note with id ${req.params.id} not found`, 404)
    );
  }
  res.status(200).json({ success: true, data: {} });
});
