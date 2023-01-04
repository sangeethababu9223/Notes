const ErrorResponse = require("../utils/errorResponse");
const Notes = require("../models/Notes");

exports.getNotes = async (req, res, next) => {
  try {
    const notes = await Notes.find();
    res.status(200).json({
      success: true,
      coun: notes.length,
      data: notes,
    });
  } catch (err) {
    next(err);
  }
};

exports.getNote = async (req, res, next) => {
  try {
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
  } catch (err) {
    next(err);
  }
};

exports.addNote = async (req, res, next) => {
  try {
    const note = await Notes.create(req.body);
    res.status(201).json({
      success: true,
      data: note,
    });
  } catch (err) {
    next(err);
  }
};

exports.updateNote = async (req, res, next) => {
  try {
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
  } catch (err) {
    next(err);
  }
};

exports.deleteNote = async (req, res, next) => {
  try {
    const note = await Notes.findByIdAndDelete(req.params.id);
    if (!note) {
      return next(
        new ErrorResponse(`Note with id ${req.params.id} not found`, 404)
      );
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    next(err);
  }
};
